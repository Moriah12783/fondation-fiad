"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  organization: z.string().optional(),
  subject: z.string().min(1, "Veuillez choisir un sujet"),
  message: z.string().min(10, "Message trop court (minimum 10 caractères)"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  locale: string;
}

const SUBJECTS_FR = [
  "Partenariat",
  "Financement / Don",
  "Demande de projet",
  "Presse / Médias",
  "Autre",
];
const SUBJECTS_EN = [
  "Partnership",
  "Funding / Donation",
  "Project inquiry",
  "Press / Media",
  "Other",
];

export default function ContactForm({ locale }: ContactFormProps) {
  const isFr = locale === "fr";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none",
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-200 focus:border-fiad-green focus:ring-2 focus:ring-fiad-green/10"
    );

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-fiad-green/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-fiad-green" />
        </div>
        <h3 className="font-display font-bold text-xl text-fiad-navy mb-2">
          {isFr ? "Message envoyé !" : "Message sent!"}
        </h3>
        <p className="text-fiad-gray-light text-sm max-w-xs">
          {isFr
            ? "Notre équipe vous répondra dans les 48 heures ouvrées."
            : "Our team will get back to you within 48 business hours."}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-fiad-green hover:underline"
        >
          {isFr ? "Envoyer un autre message" : "Send another message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Nom + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-fiad-gray mb-2">
            {isFr ? "Nom complet *" : "Full name *"}
          </label>
          <input
            {...register("fullName")}
            type="text"
            className={inputClass(!!errors.fullName)}
            placeholder={isFr ? "Votre nom" : "Your name"}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-fiad-gray mb-2">
            {isFr ? "Email *" : "Email *"}
          </label>
          <input
            {...register("email")}
            type="email"
            className={inputClass(!!errors.email)}
            placeholder="email@exemple.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Organisation */}
      <div>
        <label className="block text-sm font-medium text-fiad-gray mb-2">
          {isFr ? "Organisation" : "Organization"}
        </label>
        <input
          {...register("organization")}
          type="text"
          className={inputClass(false)}
          placeholder={isFr ? "Votre organisation (optionnel)" : "Your organization (optional)"}
        />
      </div>

      {/* Sujet */}
      <div>
        <label className="block text-sm font-medium text-fiad-gray mb-2">
          {isFr ? "Sujet *" : "Subject *"}
        </label>
        <select
          {...register("subject")}
          className={cn(inputClass(!!errors.subject), "text-fiad-gray")}
        >
          <option value="">{isFr ? "Choisir un sujet" : "Choose a subject"}</option>
          {(isFr ? SUBJECTS_FR : SUBJECTS_EN).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-fiad-gray mb-2">
          {isFr ? "Message *" : "Message *"}
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className={cn(inputClass(!!errors.message), "resize-none")}
          placeholder={isFr ? "Décrivez votre demande..." : "Describe your request..."}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Erreur globale */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {isFr
            ? "Une erreur s'est produite. Réessayez ou écrivez-nous directement à contact@fondation-fiad.org"
            : "An error occurred. Please retry or email us at contact@fondation-fiad.org"}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-fiad-green hover:bg-fiad-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-fiad-green/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {isFr ? "Envoi en cours..." : "Sending..."}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {isFr ? "Envoyer le message" : "Send message"}
          </>
        )}
      </button>

      <p className="text-xs text-fiad-gray-light text-center">
        {isFr
          ? "Réponse garantie sous 48h ouvrées · Vos données ne sont jamais partagées."
          : "Response guaranteed within 48 business hours · Your data is never shared."}
      </p>
    </form>
  );
}
