import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  fullName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  organization: z.string().optional(),
  subject: z.string().min(1, "Sujet requis"),
  message: z.string().min(10, "Message trop court"),
  locale: z.enum(["fr", "en"]).default("fr"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = ContactSchema.parse(body);

    // Envoi via Resend (https://resend.com — gratuit jusqu'à 3000 emails/mois)
    // Pour activer : créer un compte Resend, récupérer la clé API, l'ajouter en variable d'env RESEND_API_KEY
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Mode développement : on log et on retourne succès pour ne pas bloquer
      console.log("[CONTACT FORM] Message reçu (Resend non configuré) :", {
        from: data.email,
        name: data.fullName,
        subject: data.subject,
      });
      return NextResponse.json({ success: true, dev: true });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f2a4a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #c9973a; margin: 0; font-size: 22px;">Nouveau message — FIAD</h1>
        </div>
        <div style="background: #f8f5f0; padding: 32px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 140px; vertical-align: top;">Nom complet</td>
              <td style="padding: 10px 0; font-weight: 600; color: #0f2a4a;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #1b6b3a;"><a href="mailto:${data.email}" style="color: #1b6b3a;">${data.email}</a></td>
            </tr>
            ${data.organization ? `<tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Organisation</td>
              <td style="padding: 10px 0; color: #0f2a4a;">${data.organization}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Sujet</td>
              <td style="padding: 10px 0; font-weight: 600; color: #c9973a;">${data.subject}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 20px 0 0;">
                <div style="background: white; border-left: 4px solid #1b6b3a; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
            Message reçu via fondation-fiad.org · Langue : ${data.locale.toUpperCase()}
          </div>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FIAD Site Web <noreply@fondation-fiad.org>",
        to: ["contact@fondation-fiad.org"],
        reply_to: data.email,
        subject: `[FIAD] ${data.subject} — ${data.fullName}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[CONTACT FORM] Erreur Resend :", error);
      return NextResponse.json(
        { success: false, error: "Erreur d'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("[CONTACT FORM] Erreur inattendue :", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
