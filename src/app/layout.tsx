import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petal & Grace | Curated Botanicals & Fine Goods",
  description: "A premium floral boutique and lifestyle shop specializing in curated botanicals and fine goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
