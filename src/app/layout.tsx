import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "ANISH // INK — Defy The Norm | Islamabad Custom Tattoo Studio",
  description:
    "High-end bespoke fine-line, surrealist, and dark-art tattoos. Designed and crafted exclusively in Islamabad by Anish. No templates, custom art only.",
  keywords: [
    "Anish Tattoo",
    "Tattoo Artist Islamabad",
    "Fine line tattoo Pakistan",
    "Dark art tattoo",
    "Surrealism tattoo Islamabad",
    "Custom tattoo studio",
  ],
  authors: [{ name: "Anish" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
