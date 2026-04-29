"use client";

import { useLocale } from "@/context/LocaleContext";

/**
 * LanguageToggle — botones para cambiar el idioma entre español e inglés.
 */
export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 bg-blue-50 rounded-full p-1 border border-blue-100">
      <button
        onClick={() => setLocale("es")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          locale === "es"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-blue-400 hover:text-blue-600"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          locale === "en"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-blue-400 hover:text-blue-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}