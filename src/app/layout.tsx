import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Colonial Iguaçu - Black Friday",
  description:
    "Aproveite as ofertas da Black Friday no Hotel Colonial Iguaçu! Desfrute de uma estadia confortável em Foz do Iguaçu, próximo às Cataratas e ao Parque Nacional. Tarifas exclusivas e benefícios especiais, só por tempo limitado. Reserve agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
