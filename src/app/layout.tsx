import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fondation Impact Afrique Durable (FIAD)",
    template: "%s | FIAD",
  },
  description:
    "La FIAD est une fondation africaine engagée dans le développement durable, l'innovation sociale et l'inclusion économique en Afrique.",
  keywords: [
    "fondation africaine",
    "développement durable Afrique",
    "innovation sociale",
    "ONG Côte d'Ivoire",
    "impact Africa",
    "FIAD",
  ],
  authors: [{ name: "FIAD — Fondation Impact Afrique Durable" }],
  metadataBase: new URL("https://fondation-fiad.org"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Fondation Impact Afrique Durable",
    title: "Fondation Impact Afrique Durable (FIAD)",
    description:
      "La FIAD œuvre pour un développement africain souverain, inclusif et durable — éducation, entrepreneuriat, environnement, inclusion économique.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fondation Impact Afrique Durable — FIAD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation Impact Afrique Durable (FIAD)",
    description:
      "La FIAD œuvre pour un développement africain souverain, inclusif et durable.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
