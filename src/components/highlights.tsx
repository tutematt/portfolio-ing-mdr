"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { portfolioConfig, getIcon } from "@/config/portfolio"

export function Highlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {portfolioConfig.highlights.map((item, index) => {
        const Icon = getIcon(item.icon as any)

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-6 h-full bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}

