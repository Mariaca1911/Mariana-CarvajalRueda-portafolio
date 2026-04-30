import { profileData } from "@/data/profile";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import MainContent from "@/components/organisms/MainContent";

/**
 * Página principal del portafolio.
 * Desktop: layout de tres columnas fijas.
 * Móvil: layout apilado verticalmente con scroll.
 */
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen md:overflow-hidden bg-blue-50/20">
      {/* Columna izquierda */}
      <LeftSidebar data={profileData} />

      {/* Columna central */}
      <MainContent data={profileData} />

      {/* Columna derecha */}
      <RightSidebar contact={profileData.contact} />
    </div>
  );
}