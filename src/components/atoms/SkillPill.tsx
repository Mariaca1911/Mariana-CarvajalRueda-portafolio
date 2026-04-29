/**
 * SkillPill — etiqueta reutilizable para habilidades blandas/extra.
 */
interface SkillPillProps {
  label: string;
}

export default function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-block bg-blue-800 border border-blue-400 rounded-full px-2 py-[2px] text-xs text-blue-100 mr-1 mb-1 leading-tight">
      {label}
    </span>
  );
}
