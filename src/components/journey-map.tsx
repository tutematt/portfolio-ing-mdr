"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

const journeyPoints = [
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
]

export function JourneyMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Línea de conexión */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

      {journeyPoints.map((point, index) => {
        const isEven = index % 2 === 0
        return (
          <motion.div
            key={point.year}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center gap-4 mb-12 ${isEven ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`w-1/2 ${isEven ? "text-right" : "text-left"}`}>
              <Card className="inline-block p-6 bg-background/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </Card>
            </div>
            <div className="relative">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${point.color}`} />
              <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium">
                {point.year}
              </span>
            </div>
            <div className="w-1/2" />
          </motion.div>
        )
      })}
    </div>
  )
}

