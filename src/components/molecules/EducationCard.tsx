"use client";

import { Education } from "@/types";
import { useLocale } from "@/context/LocaleContext";

/**
 * EducationCard — tarjeta de historial educativo.
 */
interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const { t } = useLocale();
  // Obtiene el título y descripción traducidos según el id
  const translated = t.education_items[education.id as keyof typeof t.education_items];

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 py-4 border-b border-blue-50 last:border-b-0 last:pb-0">
      <div>
        <h4 className="text-sm font-semibold text-blue-800 leading-tight mb-1">
          {education.institution}
        </h4>
        <span className="inline-block bg-blue-50 text-blue-600 rounded px-2 py-[2px] text-xs">
          {education.period}
        </span>
      </div>
      <div>
        <h5 className="text-sm font-semibold text-gray-700 mb-1">
          {translated?.degree ?? education.degree}
        </h5>
        <p className="text-xs text-gray-600 leading-relaxed">
          {translated?.description ?? education.description}
        </p>
      </div>
    </div>
  );
}
