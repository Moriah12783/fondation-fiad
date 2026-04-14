import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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
  keywords: ["fondation", "Afrique", "développement durable", "innovation sociale", "ONG", "Côte d'Ivoire"],
  authors: [{ name: "FIAD" }],
  metadataBase: new URL("https://fondation-fiad.org"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Fondation Impact Afrique Durable",
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
      </body>
    </html>
  );
}
