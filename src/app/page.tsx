import { profileData } from "@/data/profile";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import MainContent from "@/components/organisms/MainContent"; 
/**
 * Página principal del portafolio.
 */
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-blue-50/20">
      {/* Sidebar izquierdo */}
      <LeftSidebar data={profileData} />

      {/* Contenido central */}
      <MainContent data={profileData} />

      {/* Sidebar derecho */}
      <RightSidebar contact={profileData.contact} />
    </div>
  );
}
