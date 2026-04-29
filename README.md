# Portafolio — Mariana Carvajal Rueda

Hoja de vida web personal desarrollada con **Next.js 14**, **React 18**, **TypeScript** y **TailwindCSS** como proyecto evaluativo de Ingeniería Web.

---

## Propósito

Presentar mi perfil profesional como estudiante de Ingeniería de Sistemas con experiencia en desarrollo web full stack. El portafolio incluye mis conocimientos, educación, proyectos y datos de contacto.

---

## Tecnologías

| Tecnología   | Versión  | Uso                          |
|--------------|----------|------------------------------|
| Next.js      | 14.2.3   | Framework principal (App Router) |
| React        | 18       | Biblioteca de UI             |
| TypeScript   | 5        | Tipado estático              |
| TailwindCSS  | 3.3      | Estilos utilitarios          |
| Google Fonts | —        | Tipografías: Syne + Plus Jakarta Sans |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx        # Layout raíz con metadatos
│   ├── page.tsx          # Página principal (composición del layout)
│   └── globals.css       # Estilos globales + fuentes
├── components/
│   ├── atoms/            # Componentes base reutilizables
│   │   ├── SkillBar.tsx      # Barra de progreso (idiomas / lenguajes)
│   │   ├── SkillPill.tsx     # Etiqueta de habilidad
│   │   ├── SectionHeader.tsx # Título de sección con línea decorativa
│   │   └── KnowledgeIcon.tsx # Íconos SVG para conocimientos
│   ├── molecules/        # Componentes compuestos reutilizables
│   │   ├── SidebarBlock.tsx  # Bloque de sección del sidebar
│   │   ├── KnowledgeCard.tsx # Tarjeta de conocimiento
│   │   ├── EducationCard.tsx # Tarjeta de educación
│   │   └── ProjectCard.tsx   # Tarjeta de proyecto con botón
│   └── organisms/        # Secciones completas de la UI
│       ├── LeftSidebar.tsx   # Panel lateral izquierdo fijo
│       ├── RightSidebar.tsx  # Panel lateral derecho con redes sociales
│       ├── MainContent.tsx   # Contenido central con scroll
│       ├── ProfileDialog.tsx # Diálogo del perfil
│       └── ProjectDialog.tsx # Diálogo de detalle de proyectos
├── data/
│   └── profile.ts        # Datos del portafolio (editar aquí)
└── types/
    └── index.ts          # Definiciones de tipos TypeScript
```

---

## Cómo ejecutar

### Requisitos previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/Mariaca1911/mariana-carvajal-portafolio

# Entra al directorio
cd mariana-carvajal-portafolio

# Instala dependencias
npm install

# Inicia en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para producción

```bash
npm run build
npm start
```

---


## Despliegue en Vercel

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel
```

El proyecto está configurado para desplegarse automáticamente en Vercel conectando el repositorio de GitHub.

URL esperada: `mariana-carvajal.vercel.app`

---

## Atomic Design

El proyecto sigue la metodología **Atomic Design**:

- **Átomos**: `SkillBar`, `SkillPill`, `SectionHeader`, `KnowledgeIcon` — componentes base sin dependencias internas.
- **Moléculas**: `SidebarBlock`, `KnowledgeCard`, `EducationCard`, `ProjectCard` — combinan átomos con lógica propia.
- **Organismos**: `LeftSidebar`, `RightSidebar`, `MainContent`, `ProfileDialog`, `ProjectDialog` — secciones completas que componen moléculas y átomos.

---

## Autor

**Mariana Carvajal Rueda**  
Estudiante de Ingeniería de Sistemas — Universidad de Antioquia  

