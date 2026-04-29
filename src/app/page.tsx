import { profileData } from "@/data/profile";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import MainContent from "@/components/organisms/MainContent"; 
/**
 * Página principal del portafolio.
 */
export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-blue-50/20">
      {/* Columna izquierda — fija, con scroll interno */}
      <LeftSidebar data={profileData} />

      {/* Columna central — scroll vertical */}
      <MainContent data={profileData} />

      {/* Columna derecha — fija, íconos de redes sociales */}
      <RightSidebar contact={profileData.contact} />
    </div>
  );
}
