"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Workflow } from "lucide-react"

const expertiseAreas = [
  {
    icon: Code,
    title: "Frontend",
    description: "Desarrollo de interfaces modernas y responsivas",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend",
    description: "APIs robustas y escalables",
    skills: ["Node.js", "Express", "GraphQL", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Infraestructura y despliegue",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Workflow,
    title: "Arquitectura",
    description: "Diseño de sistemas distribuidos",
    skills: ["Microservicios", "Event-Driven", "DDD", "TDD"],
    color: "from-green-500 to-emerald-500",
  },
]

export function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {expertiseAreas.map((area, index) => (
        <motion.div
          key={area.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="h-full relative overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity`}
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${area.color}`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
              <p className="text-muted-foreground">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

