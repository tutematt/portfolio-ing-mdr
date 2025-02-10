"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function StorySection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="p-8 bg-background/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Mi Historia
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mi viaje en el desarrollo de software comenzó con una pasión por resolver problemas y crear soluciones
            innovadoras. A lo largo de los años, he tenido el privilegio de trabajar en proyectos desafiantes que me han
            permitido crecer tanto técnica como profesionalmente.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Desde el desarrollo de aplicaciones web escalables hasta la implementación de arquitecturas cloud-native,
            cada proyecto ha sido una oportunidad para aprender y mejorar. Mi enfoque siempre ha sido mantenerme
            actualizado con las últimas tecnologías mientras construyo soluciones robustas y mantenibles.
          </p>
          <div className="flex justify-center pt-4">
            <div className="inline-flex items-center rounded-full border px-4 py-1 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              Disponible para nuevos proyectos
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

