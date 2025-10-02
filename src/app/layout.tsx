import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  // Título para SEO y la pestaña del navegador
  title: "Black Friday 2026 Hotel em Foz do Iguaçu",

  // Descripción para los resultados de búsqueda
  description:
    "Ofertas imperdíveis da Black Friday 2026 no Hotel Colonial Iguaçu. Garanta descontos exclusivos para sua hospedagem em Foz do Iguaçu, perto das Cataratas. Reserve já!",

  // Palabras clave relevantes
  keywords: [
    "Black Friday 2026 em Foz do Iguaçu",
    "hotel Foz do Iguaçu",
    "ofertas de hotel",
    "promoção de hotel",
    "Hotel Colonial Iguaçu",
    "hotel perto das Cataratas do Iguaçu",
    "hospedagem Foz do Iguaçu",
  ],

  // Metadatos para compartir en redes sociales (Facebook, WhatsApp, etc.)
  openGraph: {
    title: "Black Friday 2026 | Ofertas Exclusivas no Hotel Colonial Iguaçu",
    description:
      "Não perca os descontos incríveis da nossa Black Friday 2026 para sua viagem a Foz do Iguaçu. Vagas limitadas!",
    // URL actualizada al subdominio
    url: "https://black.hotelcolonialfoz.com.br",
    siteName: "Hotel Colonial Iguaçu",
    images: [
      {
        // URL de la imagen actualizada al subdominio
        url: "https://black.hotelcolonialfoz.com.br/og-image-black-friday.jpg",
        width: 1200,
        height: 630,
        alt: "Promoção de Black Friday no Hotel Colonial Iguaçu",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Metadatos para compartir en Twitter
  twitter: {
    card: "summary_large_image",
    title: "Black Friday 2026 | Ofertas Exclusivas no Hotel Colonial Iguaçu",
    description:
      "Não perca os descontos incríveis da nossa Black Friday 2026 para sua viagem a Foz do Iguaçu. Vagas limitadas!",
    // URL de la imagen para Twitter actualizada al subdominio
    images: [
      "https://black.hotelcolonialfoz.com.br/twitter-image-black-friday.jpg",
    ],
  },

  // URL canónica actualizada para indicar la versión principal de la página
  alternates: {
    canonical: "https://black.hotelcolonialfoz.com.br",
  },

  // Información del autor
  authors: [{ name: "Hotel Colonial Iguaçu" }],

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <Analytics />
      <GoogleTagManager gtmId="GTM-W9B9B6D" />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9B9B6D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
