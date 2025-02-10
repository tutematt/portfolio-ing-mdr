"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Briefcase, GraduationCap, Trophy } from "lucide-react"

const timelineItems = [
  {
    icon: GraduationCap,
    title: "Ingeniero en Informática",
    description: "Universidad XYZ",
    date: "2019 - 2023",
    tags: ["Algoritmos", "Sistemas Distribuidos", "IA"],
    color: "bg-blue-500",
  },
  {
    icon: Briefcase,
    title: "Desarrollador Full Stack",
    description: "Tech Company ABC",
    date: "2023 - Presente",
    tags: ["React", "Node.js", "AWS"],
    color: "bg-purple-500",
  },
  {
    icon: Code2,
    title: "Proyectos Destacados",
    description: "Portfolio de Aplicaciones Web",
    date: "2022 - 2023",
    tags: ["Next.js", "TypeScript", "Docker"],
    color: "bg-pink-500",
  },
  {
    icon: Trophy,
    title: "Reconocimientos",
    description: "Hackathon Nacional",
    date: "2023",
    tags: ["Primer Lugar", "Innovación"],
    color: "bg-amber-500",
  },
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  })

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* Línea de progreso animada */}
      <motion.div
        className="absolute left-8 top-4 bottom-4 w-[2px]"
        style={{
          background: "linear-gradient(to bottom, rgb(59, 130, 246), rgb(147, 51, 234), rgb(236, 72, 153))",
          scaleY: scrollYProgress,
        }}
      />

      {/* Línea de fondo estática */}
      <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-muted" />

      <div className="space-y-8 relative">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="relative ml-16 p-4 hover:bg-accent/50 transition-colors">
              <div className="absolute -left-[52px] rounded-full p-2 bg-background shadow-md border">
                <item.icon className={`w-6 h-6 ${item.color.replace("bg-", "text-")}`} />
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <Badge variant="secondary">{item.date}</Badge>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-background">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

