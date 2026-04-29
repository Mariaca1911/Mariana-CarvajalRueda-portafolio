"use client";

import { ProfileData } from "@/types";
import { useLocale } from "@/context/LocaleContext";
import MagicBento from "@/components/atoms/MagicBento";

/**
 * ProfileDialog — diálogo creativo con MagicBento y foto de perfil.
 * Se abre al presionar "Ver más sobre mí" en el hero.
 */
interface ProfileDialogProps {
  data: ProfileData;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileDialog({ data, isOpen, onClose }: ProfileDialogProps) {
  const { t } = useLocale();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-slide-up my-4 border border-blue-100">

        {/* ── Header azul con foto circular ── */}
        <div className="bg-blue-800 px-6 pt-8 pb-6 text-center relative">
          
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center hover:bg-blue-400 transition-colors"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Foto circular */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 mx-auto mb-4 shadow-lg">
            <img
              src={data.photo}
              alt={data.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Nombre y rol */}
          <h2 className="text-2xl font-display font-bold text-white">{data.name}</h2>
          <p className="text-blue-200 text-sm mt-1">{t.title} · UdeA</p>
        </div>

        {/* ── MagicBento ── */}
        <MagicBento
          textAutoHide={false}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={300}
          particleCount={8}
          glowColor="24, 95, 165"
          disableAnimations={false}
        />

        {/* ── Botones ── */}
        <div className="flex gap-3 px-6 pb-6 pt-2">

          <a
            href="#portfolio"
            onClick={onClose}
            className="flex-1 bg-blue-600 text-white rounded-xl py-3 text-sm font-semibold text-center hover:bg-blue-800 transition-colors"
          >
            {t.viewPortfolio}
          </a>

          <a
            href={`mailto:${data.contact.email}`}
            className="flex-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl py-3 text-sm font-semibold text-center hover:bg-blue-100 transition-colors"
          >
            {t.contactMe}
          </a>

        </div>

      </div>
    </div>
  );
}