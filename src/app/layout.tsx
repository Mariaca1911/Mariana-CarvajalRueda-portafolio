import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";

export const metadata: Metadata = {
  title: "Mariana Carvajal Rueda | Portafolio",
  description: "Portafolio profesional de Mariana Carvajal Rueda, estudiante de Ingeniería de Sistemas en la Universidad de Antioquia. Desarrolladora Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="h-screen overflow-hidden">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}