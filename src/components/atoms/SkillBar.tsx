/**
 * SkillBar — barra de progreso reutilizable para idiomas y lenguajes.
 */
interface SkillBarProps {
  label: string;
  percentage: number;
}

export default function SkillBar({ label, percentage }: SkillBarProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {/* Etiqueta del skill */}
      <span className="text-blue-100 text-xs w-[72px] shrink-0 leading-tight">
        {label}
      </span>

      {/* Barra de progreso */}
      <div className="flex-1 h-[4px] bg-blue-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-200 rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${percentage}%`}
        />
      </div>

      {/* Porcentaje */}
      <span className="text-blue-200 text-[10px] w-7 text-right shrink-0">
        {percentage}%
      </span>
    </div>
  );
}