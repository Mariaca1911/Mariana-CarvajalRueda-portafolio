"use client";

import { Knowledge } from "@/types";
import KnowledgeIcon from "@/components/atoms/KnowledgeIcon";
import { useLocale } from "@/context/LocaleContext";

/**
 * KnowledgeCard — tarjeta de conocimiento con ícono, título y descripción.
 */
interface KnowledgeCardProps {
  knowledge: Knowledge;
}

export default function KnowledgeCard({ knowledge }: KnowledgeCardProps) {
  const { t } = useLocale();
  // Obtiene el título y descripción traducidos según el id del conocimiento
  const translated = t.knowledges[knowledge.id as keyof typeof t.knowledges];

  return (
    <div className="bg-white border border-blue-50 rounded-xl p-4 text-center hover:border-blue-100 hover:shadow-sm transition-all duration-200 group">
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors duration-200">
        <KnowledgeIcon icon={knowledge.icon} size={18} />
      </div>
      <h4 className="text-sm font-semibold text-blue-800 mb-1">
        {translated?.title ?? knowledge.title}
      </h4>
      <p className="text-xs text-gray-600 leading-relaxed">
        {translated?.description ?? knowledge.description}
      </p>
    </div>
  );
}