"use client"

import { motion } from "framer-motion"
import { Code2, Server, Cloud, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"

const specialties = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    color: "from-amber-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "Arquitectura",
    skills: ["Microservicios", "API Design", "Escalabilidad", "Seguridad"],
    color: "from-green-500 to-emerald-500",
  },
]

export function SpecialtiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specialties.map((specialty, index) => (
        <motion.div
          key={specialty.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="p-6 h-full bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${specialty.color}`}>
                <specialty.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">{specialty.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {specialty.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 text-xs rounded-full bg-background/50 border">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

