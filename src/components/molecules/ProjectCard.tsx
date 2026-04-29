"use client";

import { Project } from "@/types";
import { useLocale } from "@/context/LocaleContext";

/**
 * ProjectCard — tarjeta de proyecto para la sección de Portafolio.
 */
interface ProjectCardProps {
  project: Project;
  onLearnMore: (project: Project) => void;
  learnMoreLabel: string;
}

const cardColors = ["bg-blue-600", "bg-blue-800", "bg-blue-400", "bg-blue-900"];

export default function ProjectCard({ project, onLearnMore, learnMoreLabel }: ProjectCardProps) {
  const { t } = useLocale();
  const colorIndex = ["diverank", "lifetracker", "kaggle", "speechcommands"].indexOf(project.id);
  const bgColor = cardColors[colorIndex >= 0 ? colorIndex : 0];
  // Obtiene título y descripción traducidos
  const translated = t.project_items[project.id as keyof typeof t.project_items];

  return (
    <div className="flex-shrink-0 w-96 bg-white border border-blue-50 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-200">

      {/* Imagen del proyecto */}
      <div className="h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Si no carga la imagen oculta el elemento
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="p-4">
        <h4 className="text-base font-semibold text-blue-800 mb-2">
          {translated?.title ?? project.title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {translated?.short ?? project.shortDescription}
        </p>
        <button
          onClick={() => onLearnMore(project)}
          className="text-sm text-blue-600 border border-blue-200 rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors duration-150 w-full font-medium"
        >
          {learnMoreLabel}
        </button>
      </div>
    </div>
  );
}