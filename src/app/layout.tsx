import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
