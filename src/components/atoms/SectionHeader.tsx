/**
 * SectionHeader — título de sección con línea  azul.
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-xl font-display font-semibold text-blue-800">
        {title}
      </h2>
      {/* Línea decorativa */}
      <div className="w-9 h-[3px] bg-blue-400 rounded-full mx-auto mt-2" />
      {subtitle && (
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}