import { Github, Linkedin, Mail, Code2, Cloud, Brain, Rocket, Server, Lightbulb } from "lucide-react"

export const portfolioConfig = {
  // Información Personal
  personal: {
    name: "Matias David Rodoni",
    title: "Ingeniero en Informática",
    description:
      "Desarrollador Full Stack con experiencia en arquitectura de software y desarrollo de aplicaciones web. Especializado en React, Node.js y sistemas distribuidos.",
    avatar: "/avatar.jpg",
    contact: {
      email: "matiasdavid.rodoni@gmail.com",
      github: "https://github.com/tutematt",
      linkedin: "https://linkedin.com/in/matiasdrodoni",
    },
  },

  // Historia/Biografía
  story: {
    title: "Mi Historia",
    content: [
      "Me considero una persona capaz de resolver problemas y crear soluciones para optimizar, automatizar y modificar procesos. A lo largo de los años, he podido trabajar en proyectos que me han permitido crecer tanto técnica como profesionalmente.",
      "Trabajar en equipo con un buen clima de trabajo en fundamental para poder lograr los objetivos propuestos a nivel individual y grupal, cada proyecto ha sido una oportunidad para aprender y mejorar. Me gusta enfocarme en mantenerme actualizado con las últimas tecnologías.",
    ],
    isAvailable: true,
  },

  // Áreas de Expertise
  highlights: [
    {
      icon: "Code2",
      title: "Desarrollo Full Stack",
      description: "Especializado en React, Next.js y Node.js",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Cloud",
      title: "Arquitectura Cloud",
      description: "Diseño e implementación de soluciones en AWS",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Brain",
      title: "Liderazgo Técnico",
      description: "Gestión de equipos y mentorías",
      color: "from-amber-500 to-red-500",
    },
    {
      icon: "Rocket",
      title: "Innovación",
      description: "Implementación de nuevas tecnologías",
      color: "from-green-500 to-emerald-500",
    },
  ],

  // Especialidades Técnicas
  specialties: [
    {
      icon: "Code2",
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Server",
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Cloud",
      title: "DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
      color: "from-amber-500 to-red-500",
    },
    {
      icon: "Lightbulb",
      title: "Arquitectura",
      skills: ["Microservicios", "API Design", "Escalabilidad", "Seguridad"],
      color: "from-green-500 to-emerald-500",
    },
  ],

  // Trayectoria Profesional
  journey: [
    {
      year: "2019",
      title: "Inicio del Viaje",
      description: "Graduación universitaria y primeros pasos en desarrollo web",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2020",
      title: "Desarrollo Frontend",
      description: "Especialización en React y ecosistema moderno",
      color: "from-cyan-500 to-teal-500",
    },
    {
      year: "2021",
      title: "Full Stack",
      description: "Dominio de Node.js y arquitecturas backend",
      color: "from-teal-500 to-green-500",
    },
    {
      year: "2022",
      title: "Liderazgo Técnico",
      description: "Gestión de equipos y proyectos complejos",
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2023",
      title: "Arquitectura Cloud",
      description: "Diseño de soluciones escalables en la nube",
      color: "from-emerald-500 to-blue-500",
    },
  ],

  // Experiencia Detallada (Timeline)
  experience: [
    {
      icon: "GraduationCap",
      title: "Ingeniero en Informática",
      description: "Universidad de Morón",
      date: "2015 - 2023",
      tags: ["Algoritmos", "Sistemas Distribuidos", "IA", "Seguridad Informática", "Analisis de Sistemas"],
      color: "bg-blue-500",
    },
    {
      icon: "Briefcase",
      title: "Coordinador de desarrollo de software",
      description: "Laboratorios Andrómaco",
      date: "2022 - Presente",
      tags: ["React", "React Native", "SQL Server", "C#", "Gestión de Proyectos", "Liderazgo Técnico"],
      color: "bg-purple-500",
    },
    {
      icon: "Code2",
      title: "Proyectos Destacados",
      description: "Portfolio de Aplicaciones Web",
      date: "2022 - 2023",
      tags: ["Next.js", "TypeScript", "Docker"],
      color: "bg-pink-500",
    },
    {
      icon: "Trophy",
      title: "Reconocimientos",
      description: "Hackathon Nacional",
      date: "2023",
      tags: ["Primer Lugar", "Innovación"],
      color: "bg-amber-500",
    },
  ],

  // Configuración de la navegación
  navigation: [
    { name: "Sobre mí", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ],
}

// Tipo para el icono
export type IconName = keyof typeof import("lucide-react")

// Helper para obtener el icono correcto
export function getIcon(iconName: IconName) {
  const icons = {
    Code2,
    Cloud,
    Brain,
    Rocket,
    Server,
    Lightbulb,
    Github,
    Linkedin,
    Mail,
  }
  return icons[iconName as keyof typeof icons]
}

