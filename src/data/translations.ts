import { Locale } from "@/types";

export const translations: Record<Locale, {
  title: string;
  profileSummary: string;
  contact: string;
  languages: string;
  programmingLanguages: string;
  extraSkills: string;
  hello: string;
  role: string;
  seeMore: string;
  contactMe: string;
  knowledge: string;
  knowledgeSubtitle: string;
  education: string;
  portfolio: string;
  portfolioSubtitle: string;
  learnMore: string;
  scrollHint: string;
  links: string;
  semester: string;
  projects: string;
  english: string;
  quote: string;
  viewPortfolio: string;
  downloadCV: string;
  viewOnGithub: string;
  viewLive: string;
  extraSkillsList: string[];
  languagesList: { name: string; percentage: number }[];
  knowledges: {
    fullstack: { title: string; description: string };
    databases: { title: string; description: string };
    apis: { title: string; description: string };
    git: { title: string; description: string };
    crud: { title: string; description: string };
    testing: { title: string; description: string };
  };
  education_items: {
    udea: { degree: string; description: string };
    blendex: { degree: string; description: string };
  };
  project_items: {
    diverank: { title: string; short: string; full: string };
    lifetracker: { title: string; short: string; full: string };
    kaggle: { title: string; short: string; full: string };
    speechcommands: { title: string; short: string; full: string };
  };
}> = {
  es: {
    title: "Desarrolladora Full Stack",
    profileSummary: "Estudiante de 7.° semestre con experiencia en proyectos académicos y personales de desarrollo web full stack. He trabajado en la construcción de interfaces frontend y en la implementación de lógica backend conectada a bases de datos. Tengo conocimientos en Java y Python, y actualmente estoy fortaleciendo mis habilidades en React.",
    contact: "Contacto",
    languages: "Idiomas",
    programmingLanguages: "Lenguajes",
    extraSkills: "Habilidades extra",
    hello: "¡Hola! Soy",
    role: "Est. Ing. de Sistemas",
    seeMore: "Ver más sobre mí",
    contactMe: "Contáctame",
    knowledge: "Conocimientos",
    knowledgeSubtitle: "Tecnologías y habilidades que aplico en mis proyectos de desarrollo.",
    education: "Educación",
    portfolio: "Portafolio",
    portfolioSubtitle: "Proyectos académicos y personales desarrollados en mi formación.",
    learnMore: "Saber más →",
    scrollHint: "← desliza para ver más proyectos →",
    links: "Links",
    semester: "Semestre",
    projects: "Proyectos",
    english: "Inglés",
    quote: "\"Como desarrolladora Full Stack, más que escribir código, me enfoco en construir soluciones que conecten frontend y backend de manera eficiente, creando experiencias útiles, bien pensadas y con impacto real en quienes las usan.\"",
    viewPortfolio: "Ver portafolio",
    downloadCV: "Descargar CV",
    viewOnGithub: "Ver en GitHub",
    viewLive: "Ver en vivo",
    extraSkillsList: [
      "Resolución de problemas",
      "Trabajo en equipo",
      "Pensamiento analítico",
      "Adaptabilidad",
      "Aprendizaje continuo",
    ],
    languagesList: [
      { name: "Español", percentage: 100 },
      { name: "Inglés C1", percentage: 80 },
    ],
    knowledges: {
      fullstack: { title: "Full Stack Web", description: "Desarrollo de aplicaciones web integrando frontend con React y backend en Java o Python." },
      databases: { title: "Bases de datos", description: "Diseño e integración de bases relacionales (MySQL, PostgreSQL) y no relacionales (MongoDB)." },
      apis: { title: "APIs REST", description: "Construcción y consumo de APIs REST. Prueba de endpoints con Postman." },
      git: { title: "Control de versiones", description: "Uso de Git y GitHub para control de versiones y trabajo colaborativo." },
      crud: { title: "CRUD Operations", description: "Gestión completa de datos: crear, leer, actualizar y eliminar desde el backend." },
      testing: { title: "Testing con Postman", description: "Prueba y documentación de endpoints de APIs REST usando Postman." },
    },
    education_items: {
      udea: { degree: "Ingeniería de Sistemas", description: "Estudiante de 7.° semestre. Desarrollo web full stack, bases de datos relacionales y no relacionales, APIs REST, Java, Python y React." },
      blendex: { degree: "Inglés C1", description: "Certificación en inglés nivel C1 del Marco Común Europeo. Comunicación técnica oral y escrita." },
    },
    project_items: {
      diverank: { title: "DiveRank", short: "Plataforma web colaborativa para ranking y exploración de sitios de buceo a nivel mundial.", full: "DiveRank es una aplicación web full stack desarrollada en equipo que permite a los usuarios explorar, calificar y compartir sitios de buceo alrededor del mundo. Integra frontend y backend con base de datos relacional, operaciones CRUD completas y autenticación de usuarios." },
      lifetracker: { title: "LifeTracker", short: "Aplicación de bienestar personal para seguimiento de hábitos, salud y metas de vida.", full: "LifeTracker es una plataforma de bienestar que permite a los usuarios registrar y monitorear sus hábitos diarios, metas de salud y progreso personal. Desarrollada con arquitectura full stack, incluye backend con APIs REST, base de datos y una interfaz intuitiva de seguimiento." },
      kaggle: { title: "Proyecto Kaggle – Modelos 1", short: "Competencia Kaggle: análisis de datos y modelos predictivos de clasificación en Python.", full: "Proyecto desarrollado como parte de una competencia en Kaggle. Aplica técnicas de análisis exploratorio de datos, preprocesamiento, entrenamiento de modelos de machine learning y evaluación de métricas para resolver un problema de predicción usando Python, scikit-learn y pandas." },
      speechcommands: { title: "Reconocimiento de Comandos de Voz", short: "Modelo de machine learning para reconocimiento de comandos de voz en tiempo real.", full: "Proyecto de reconocimiento de comandos de voz usando modelos de aprendizaje profundo. Implementa procesamiento de señales de audio, extracción de características (MFCC) y clasificación de comandos. Incluye reporte técnico con metodología, experimentos y resultados del modelo entrenado." },
    },
  },
  en: {
    title: "Full Stack Developer",
    profileSummary: "7th semester student with experience in academic and personal full stack web development projects. I have worked on building frontend interfaces and implementing backend logic connected to databases. I have knowledge in Java and Python, and I am currently strengthening my React skills.",
    contact: "Contact",
    languages: "Languages",
    programmingLanguages: "Programming",
    extraSkills: "Extra Skills",
    hello: "Hi! I'm",
    role: "Systems Eng. Student",
    seeMore: "Learn more about me",
    contactMe: "Contact me",
    knowledge: "Knowledge",
    knowledgeSubtitle: "Technologies and skills I apply in my development projects.",
    education: "Education",
    portfolio: "Portfolio",
    portfolioSubtitle: "Academic and personal projects developed during my education.",
    learnMore: "Learn more →",
    scrollHint: "← scroll to see more projects →",
    links: "Links",
    semester: "Semester",
    projects: "Projects",
    english: "English",
    quote: "\"As a Full Stack developer, rather than writing code, I focus on building solutions that efficiently connect frontend and backend, creating useful, well-thought-out experiences with a real impact on those who use them.\"",
    viewPortfolio: "View portfolio",
    downloadCV: "Download CV",
    viewOnGithub: "View on GitHub",
    viewLive: "View live",
    extraSkillsList: [
      "Problem solving",
      "Teamwork",
      "Analytical thinking",
      "Adaptability",
      "Continuous learning",
    ],
    languagesList: [
      { name: "Spanish", percentage: 100 },
      { name: "English C1", percentage: 80 },
    ],
    knowledges: {
      fullstack: { title: "Full Stack Web", description: "Web application development integrating React frontend with Java or Python backend." },
      databases: { title: "Databases", description: "Design and integration of relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases." },
      apis: { title: "REST APIs", description: "Building and consuming REST APIs. Endpoint testing with Postman." },
      git: { title: "Version Control", description: "Using Git and GitHub for version control and collaborative work." },
      crud: { title: "CRUD Operations", description: "Full data management: create, read, update and delete from the backend." },
      testing: { title: "Testing with Postman", description: "Testing and documenting REST API endpoints using Postman." },
    },
    education_items: {
      udea: { degree: "Systems Engineering", description: "7th semester student. Full stack web development, relational and non-relational databases, REST APIs, Java, Python and React." },
      blendex: { degree: "English C1", description: "C1 certification from the Common European Framework. Technical oral and written communication." },
    },
    project_items: {
      diverank: { title: "DiveRank", short: "Collaborative web platform for ranking and exploring diving sites worldwide.", full: "DiveRank is a full stack web application developed as a team that allows users to explore, rate and share diving sites around the world. Integrates frontend and backend with relational database, full CRUD operations and user authentication." },
      lifetracker: { title: "LifeTracker", short: "Personal wellness app for tracking habits, health and life goals.", full: "LifeTracker is a wellness platform that allows users to record and monitor their daily habits, health goals and personal progress. Built with full stack architecture, includes REST API backend, database and an intuitive tracking interface." },
      kaggle: { title: "Kaggle Project – Models 1", short: "Kaggle competition: data analysis and predictive classification models in Python.", full: "Project developed as part of a Kaggle competition. Applies exploratory data analysis, preprocessing, machine learning model training and metric evaluation to solve a prediction problem using Python, scikit-learn and pandas." },
      speechcommands: { title: "Voice Command Recognition", short: "Machine learning model for real-time voice command recognition.", full: "Voice command recognition project using deep learning models. Implements audio signal processing, feature extraction (MFCC) and command classification. Includes a technical report with methodology, experiments and results of the trained model." },
    },
  },
};