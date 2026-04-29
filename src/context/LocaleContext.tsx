"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Locale } from "@/types";
import { translations } from "@/data/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations["es"];
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "es",
  setLocale: () => {},
  t: translations["es"],
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}