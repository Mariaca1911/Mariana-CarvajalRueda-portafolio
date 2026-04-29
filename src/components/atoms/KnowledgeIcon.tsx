import { Knowledge } from "@/types";

/**
 * KnowledgeIcon — íconos SVG para las tarjetas de conocimiento.
 */
interface KnowledgeIconProps {
  icon: Knowledge["icon"];
  size?: number;
}

export default function KnowledgeIcon({ icon, size = 20 }: KnowledgeIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#185FA5",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<Knowledge["icon"], JSX.Element> = {
    code: (
      <svg {...props}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    database: (
      <svg {...props}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    api: (
      <svg {...props}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3l-4 4-4-4" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
    git: (
      <svg {...props}>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6"  cy="6"  r="3" />
        <path d="M13 6h3a2 2 0 012 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    crud: (
      <svg {...props}>
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    testing: (
      <svg {...props}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    frontend: (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    backend: (
      <svg {...props}>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  };

  return icons[icon] ?? icons.code;
}
