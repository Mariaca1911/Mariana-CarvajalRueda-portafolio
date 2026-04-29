import { ProfileData } from "@/types";

/**
 * Datos del portafolio de Mariana Carvajal Rueda.
 * Actualiza este archivo con tu información real.
 */
export const profileData: ProfileData = {
  name: "Mariana Carvajal Rueda",
  title: "Desarrolladora Full Stack",
  profileSummary:
    "Estudiante de 7.° semestre de Ingeniería de Sistemas con experiencia en proyectos académicos y personales de desarrollo web full stack. He trabajado en la construcción de interfaces frontend y en la implementación de lógica backend conectada a bases de datos. Tengo conocimientos en Java y Python, y actualmente estoy fortaleciendo mis habilidades en React.",

  // Reemplaza con la ruta de tu foto en /public
  photo: "/photo.png",

  contact: {
    city: "Marinilla, Antioquia",
    phone: "319 371 2120",
    email: "mariana.carvajalr@udea.edu.co",
    linkedin: "https://www.linkedin.com/in/mariana-carvajal-rueda-849462307/",
    github: "https://github.com/Mariaca1911",
    whatsapp: "https://wa.me/573193712120",
  },

  languages: [
    { name: "Español", percentage: 100 },
    { name: "Inglés C1", percentage: 80 },
  ],

  programmingLanguages: [
    { name: "Java",       percentage: 75 },
    { name: "Python",     percentage: 70 },
    { name: "JavaScript", percentage: 65 },
    { name: "React",      percentage: 55 },
    { name: "SQL",        percentage: 70 },
    { name: "HTML/CSS",   percentage: 80 },
  ],

  extraSkills: [
    "Resolución de problemas",
    "Trabajo en equipo",
    "Pensamiento analítico",
    "Adaptabilidad",
    "Aprendizaje continuo",
  ],

  knowledges: [
    {
      id: "fullstack",
      title: "Full Stack Web",
      description: "Desarrollo de aplicaciones web integrando frontend con React y backend en Java o Python.",
      icon: "code",
    },
    {
      id: "databases",
      title: "Bases de datos",
      description: "Diseño e integración de bases relacionales (MySQL, PostgreSQL) y no relacionales (MongoDB).",
      icon: "database",
    },
    {
      id: "apis",
      title: "APIs REST",
      description: "Construcción y consumo de APIs REST. Prueba de endpoints con Postman.",
      icon: "api",
    },
    {
      id: "git",
      title: "Control de versiones",
      description: "Uso de Git y GitHub para control de versiones y trabajo colaborativo.",
      icon: "git",
    },
    {
      id: "crud",
      title: "CRUD Operations",
      description: "Gestión completa de datos: crear, leer, actualizar y eliminar desde el backend.",
      icon: "crud",
    },
    {
      id: "testing",
      title: "Testing con Postman",
      description: "Prueba y documentación de endpoints de APIs REST usando Postman.",
      icon: "testing",
    },
  ],

  education: [
    {
      id: "udea",
      institution: "Universidad de Antioquia",
      period: "2023 – Actualidad",
      degree: "Ingeniería de Sistemas",
      description:
        "Estudiante de 7.° semestre. Desarrollo web full stack, bases de datos relacionales y no relacionales, APIs REST, Java, Python y React.",
    },
    {
      id: "blendex",
      institution: "Blendex",
      period: "2022 – 2024",
      degree: "Inglés C1",
      description:
        "Certificación en inglés nivel C1 del Marco Común Europeo. Comunicación técnica oral y escrita.",
    },
  ],

  projects: [
    {
      id: "diverank",
      title: "DiveRank",
      shortDescription: "Plataforma web colaborativa para ranking y exploración de sitios de buceo a nivel mundial.",
      fullDescription:
        "DiveRank es una aplicación web full stack desarrollada en equipo que permite a los usuarios explorar, calificar y compartir sitios de buceo alrededor del mundo. Integra frontend y backend con base de datos relacional, operaciones CRUD completas y autenticación de usuarios.",
      image: "/projects/diverank.png",
      technologies: ["Java", "PostgreSQL", "REST API", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Los-tres-chirriados-y-Mateo/DiveRank",
    },
    {
      id: "lifetracker",
      title: "LifeTracker",
      shortDescription: "Aplicación de bienestar personal para seguimiento de hábitos, salud y metas de vida.",
      fullDescription:
        "LifeTracker es una plataforma de bienestar que permite a los usuarios registrar y monitorear sus hábitos diarios, metas de salud y progreso personal. Desarrollada con arquitectura full stack, incluye backend con APIs REST, base de datos y una interfaz intuitiva de seguimiento.",
      image: "/projects/lifetracker.png",
      technologies: ["Java", "MySQL", "REST API", "JavaScript", "CSS"],
      githubUrl: "https://github.com/LifeTrackWellness",
    },
    {
      id: "kaggle",
      title: "Proyecto Kaggle – Modelos 1",
      shortDescription: "Competencia Kaggle: análisis de datos y modelos predictivos de clasificación en Python.",
      fullDescription:
        "Proyecto desarrollado como parte de una competencia en Kaggle. Aplica técnicas de análisis exploratorio de datos (EDA), preprocesamiento, entrenamiento de modelos de machine learning y evaluación de métricas para resolver un problema de predicción o clasificación usando Python y librerías como scikit-learn y pandas.",
      image: "/projects/kaggle.png",
      technologies: ["Python", "scikit-learn", "pandas", "Jupyter", "Kaggle"],
      githubUrl: "https://github.com/Mariaca1911/ProyectoKaggle-Modelos1",
    },
    {
      id: "speechcommands",
      title: "Reconocimiento de Comandos de Voz",
      shortDescription: "Modelo de machine learning para reconocimiento de comandos de voz en tiempo real.",
      fullDescription:
        "Proyecto de reconocimiento de comandos de voz usando modelos de aprendizaje profundo. Implementa procesamiento de señales de audio, extracción de características (MFCC) y clasificación de comandos. Incluye un reporte técnico detallado con metodología, experimentos y resultados del modelo entrenado.",
      image: "/projects/speechcommands.png",
      technologies: ["Python", "TensorFlow", "Librosa", "MFCC", "Jupyter"],
      githubUrl: "https://github.com/Lanza11/Proyecto-Modelo-Speech-Commands",
      liveUrl: "https://github.com/Lanza11/Proyecto-Modelo-Speech-Commands/blob/main/ReporteProyectoReconocimientoComandosDeVoz.pdf",
    },
  ],

  // Footer
  footerTitle: "Construyamos algo juntos ",
  footerSubtitle: "Abierta a nuevas oportunidades y colaboraciones",
  footerCopyright: "© 2026 Mariana Carvajal Rueda · Hecho con ❤️ en Medellín, Colombia",
};