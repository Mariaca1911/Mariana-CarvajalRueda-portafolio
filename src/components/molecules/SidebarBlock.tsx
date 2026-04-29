/**
 * SidebarBlock — contenedor de sección reutilizable para el sidebar izquierdo.
 */
interface SidebarBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function SidebarBlock({ title, children }: SidebarBlockProps) {
  return (
    <div className="bg-blue-600 rounded-xl p-3">
      {/* Título del bloque */}
      <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}