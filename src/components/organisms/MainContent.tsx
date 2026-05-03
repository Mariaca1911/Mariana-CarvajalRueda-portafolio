"use client";

import { useState } from "react";
import { ProfileData, Project } from "@/types";
import { useLocale } from "@/context/LocaleContext";
import SectionHeader from "@/components/atoms/SectionHeader";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import EducationCard from "@/components/molecules/EducationCard";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProfileDialog from "@/components/organisms/ProfileDialog";
import ProjectDialog from "@/components/organisms/ProjectDialog";
import LanguageToggle from "@/components/atoms/LanguageToggle";

/**
 * MainContent — contenido central con scroll vertical.
 * Contiene las secciones: Hero/Perfil, Conocimientos, Educación, Portafolio y Footer.
 * Organismo principal del centro del layout.
 */
interface MainContentProps {
  data: ProfileData;
}

export default function MainContent({ data }: MainContentProps) {
  // Estado para el diálogo del perfil
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);

  // Estado para el diálogo de proyectos
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hook de idioma para traducciones
  const { t } = useLocale();

  return (
    <>
      <main className="w-full flex-1 bg-blue-50/30 overflow-visible md:overflow-y-auto">

        {/* ── SECCIÓN PERFIL / HERO ── */}
        <section className="bg-white border-b border-blue-50 px-4 md:px-6 py-0 flex items-stretch min-h-[180px] md:min-h-[220px]">

          {/* Contenido izquierdo: nombre, descripción y botones */}
          <div className="flex-1 py-7 pr-6">

            {/* Botones ES / EN arriba del todo */}
            <div className="flex justify-start mb-3">
              <LanguageToggle />
            </div>

            {/* Nombre y título */}
            <div className="mb-4">
              <p className="text-sm text-blue-400 font-medium">{t.hello}</p>
              <h1 className="text-3xl font-display font-bold text-blue-800 leading-tight">
                {data.name}
              </h1>
              <p className="text-base text-blue-400 mt-1">{t.title} · {t.role}</p>
            </div>

            {/* Línea separadora */}
            <hr className="border-blue-50 mb-5" />

            {/* Descripción del perfil */}
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {t.profileSummary}
            </p>

            {/* Botones de acción */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setProfileDialogOpen(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-5 py-2 text-xs font-semibold hover:bg-blue-800 transition-colors duration-200"
              >
               {t.seeMore}
              </button>
            

              <a
                href={"mailto:" + data.contact.email}
                className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-100 rounded-full px-5 py-2 text-xs font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {t.contactMe}
              </a>
            </div>
          </div>

          {/* Foto grande a la derecha */}
          <div className="w-56 shrink-0 relative overflow-hidden">
            <img
              src={data.photo}
              alt={"Foto de " + data.name}
              className="absolute bottom-0 right-0 h-full w-full object-cover object-top"
            />
          </div>

        </section>

        {/* ── SECCIÓN CONOCIMIENTOS ── */}
        <section className="px-4 md:px-6 py-5 md:py-7 bg-white border-b border-blue-50">
          <SectionHeader title={t.knowledge} subtitle={t.knowledgeSubtitle} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.knowledges.map((k) => (
              <KnowledgeCard key={k.id} knowledge={k} />
            ))}
          </div>
        </section>

        {/* ── SECCIÓN EDUCACIÓN ── */}
        <section className="px-4 md:px-6 py-5 md:py-7 bg-blue-50/40 border-b border-blue-50">
          <SectionHeader title={t.education} />
          <div className="bg-white rounded-xl border border-blue-50 px-5 py-2">
            {data.education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </section>

        {/* ── SECCIÓN PORTAFOLIO ── */}
        <section id="portfolio" className="px-4 md:px-6 py-5 md:py-7 bg-white border-b border-blue-50">
          <SectionHeader title={t.portfolio} subtitle={t.portfolioSubtitle} />
          {/* Scroll horizontal de tarjetas */}
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ overflowX: "scroll" }}>
            {data.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onLearnMore={(p) => setSelectedProject(p)}
                learnMoreLabel={t.learnMore}
              />
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">{t.scrollHint}</p>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-blue-800 px-6 py-10 text-center">
  
          {/* Frase de cierre */}
          <p className="text-lg font-display font-semibold text-white mb-2">
            {t.footerTitle}
          </p>
          <p className="text-blue-300 text-sm mb-8">
            {t.footerSubtitle}
          </p>

          {/* Copyright */}
          <div className="border-t border-blue-700 pt-6">
            <p className="text-blue-300 text-xs">
              {t.footerCopyright}
            </p>
          </div>

        </footer>

      </main>

      {/* ── DIÁLOGOS (montados fuera del scroll) ── */}
      <ProfileDialog
        data={data}
        isOpen={profileDialogOpen}
        onClose={() => setProfileDialogOpen(false)}
      />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}