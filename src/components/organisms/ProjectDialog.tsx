"use client";

import { Project } from "@/types";
import { useLocale } from "@/context/LocaleContext";

/**
 * ProjectDialog — diálogo con información detallada de un proyecto del portafolio.
 * Se abre al presionar "Saber más" en cada ProjectCard.
 */
interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { t } = useLocale();

  if (!project) return null;

  // Obtiene traducción del proyecto según el idioma activo
  const translated = t.project_items[project.id as keyof typeof t.project_items];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={"Detalle del proyecto: " + (translated?.title ?? project.title)}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-slide-up">

        {/* Header con imagen */}
        <div className="h-40 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-blue-800/60 text-blue-200 text-xs flex items-center justify-center hover:bg-blue-800 transition-colors"
            aria-label="Cerrar diálogo"
          >
            ✕
          </button>
        </div>

        {/* Cuerpo */}
        <div className="px-6 py-5">

          {/* Título traducido */}
          <h2 className="text-xl font-display font-semibold text-blue-800 mb-2">
            {translated?.title ?? project.title}
          </h2>

          {/* Descripción completa traducida */}
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            {translated?.full ?? project.fullDescription}
          </p>

          {/* Tecnologías */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
            </p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-2 border-t border-blue-50 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-800 text-blue-50 rounded-lg py-2 text-sm font-semibold text-center hover:bg-blue-900 transition-colors flex items-center justify-center gap-1"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
                {t.viewOnGithub}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg py-2 text-sm font-semibold text-center hover:bg-blue-100 transition-colors"
              >
                {t.viewLive}
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}