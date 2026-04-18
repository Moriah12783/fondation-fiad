import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fondation Impact Afrique Durable — FIAD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f2a4a 0%, #1a4070 60%, #1b6b3a 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Cercles décoratifs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(201, 151, 58, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: 200,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(27, 107, 58, 0.2)",
          }}
        />

        {/* Header : logo + sigle */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#c9973a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            F
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#ffffff" }}>FIAD</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              Fondation Impact Afrique Durable
            </div>
          </div>
        </div>

        {/* Contenu central */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(201, 151, 58, 0.15)",
              border: "1px solid rgba(201, 151, 58, 0.3)",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#c9973a",
              }}
            />
            <span style={{ fontSize: 14, color: "#c9973a", fontWeight: 600 }}>
              Fondation africaine de développement
            </span>
          </div>

          <div style={{ fontSize: 56, fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}>
            Bâtir aujourd&apos;hui{" "}
            <span style={{ color: "#c9973a" }}>l&apos;Afrique</span>
            <br />
            que nous voulons léguer demain
          </div>

          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.65)", maxWidth: 700, lineHeight: 1.5 }}>
            Éducation · Entrepreneuriat · Environnement · Inclusion économique
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>
            fondation-fiad.org
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 10,
              background: "#c9973a",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Abidjan, Côte d&apos;Ivoire
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
