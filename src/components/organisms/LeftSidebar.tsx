"use client";

import Image from "next/image";
import { ProfileData } from "@/types";
import { useLocale } from "@/context/LocaleContext";
import SidebarBlock from "@/components/molecules/SidebarBlock";
import SkillBar from "@/components/atoms/SkillBar";
import SkillPill from "@/components/atoms/SkillPill";

/**
 * LeftSidebar — panel lateral izquierdo fijo.
 */
interface LeftSidebarProps {
  data: ProfileData;
}

export default function LeftSidebar({ data }: LeftSidebarProps) {
  const { t } = useLocale();

  return (
    <aside className="w-80 min-w-[320px] bg-blue-800 flex flex-col sticky top-0 h-screen overflow-y-auto">

      {/* ── Perfil: foto y  nombre  */}
      <div className="bg-blue-600 px-4 pt-6 pb-5 text-center border-b border-blue-800">
        <div className="relative w-16 h-16 rounded-full mx-auto mb-3 border-2 border-blue-100 overflow-hidden bg-blue-100">
          <Image
            src={data.photo}
            alt={`Foto de ${data.name}`}
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback de iniciales */}
          
        </div>
        <h1 className="text-blue-50 text-base font-display font-semibold leading-tight">
          {data.name}
        </h1>
        <p className="text-blue-200 text-xs mt-1">{t.title}</p>
      </div>

      {/* ── Bloques de información ── */}
      <div className="flex flex-col gap-3 p-3 flex-1">

        {/* Contacto */}
        <SidebarBlock title={t.contact}>
          <ContactRow icon="location" text={data.contact.city} />
          <ContactRow icon="phone"    text={data.contact.phone} />
          <ContactRow icon="email"    text={data.contact.email} />
          <ContactRow icon="linkedin" text="LinkedIn" href={data.contact.linkedin} />
          <ContactRow icon="github"   text="GitHub"   href={data.contact.github} />
        </SidebarBlock>

        {/* Idiomas — usa lista traducida */}
        <SidebarBlock title={t.languages}>
          {t.languagesList.map((lang) => (
            <SkillBar key={lang.name} label={lang.name} percentage={lang.percentage} />
          ))}
        </SidebarBlock>

        {/* Lenguajes de programación */}
        <SidebarBlock title={t.programmingLanguages}>
          {data.programmingLanguages.map((lang) => (
            <SkillBar key={lang.name} label={lang.name} percentage={lang.percentage} />
          ))}
        </SidebarBlock>

        {/* Habilidades extra — usa lista traducida */}
        <SidebarBlock title={t.extraSkills}>
          <div className="flex flex-wrap">
            {t.extraSkillsList.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </SidebarBlock>

      </div>
    </aside>
  );
}

/* ── Subcomponente: fila de contacto con ícono ── */
interface ContactRowProps {
  icon: "location" | "phone" | "email" | "linkedin" | "github";
  text: string;
  href?: string;
}

function ContactRow({ icon, text, href }: ContactRowProps) {
  const iconMap: Record<ContactRowProps["icon"], JSX.Element> = {
    location: (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    phone: (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.83a16 16 0 006.26 6.26l.97-.97a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    email: (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    linkedin: (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    github: (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="#85B7EB">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
      </svg>
    ),
  };

  const content = (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
        {iconMap[icon]}
      </div>
      <span className="text-blue-100 text-sm leading-tight break-all">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}