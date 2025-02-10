"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"

interface Technology {
  name: string
  icon: string
  color: string
}

const technologies: Technology[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
]

export function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set((e.clientX - centerX) * 0.2)
        mouseY.set((e.clientY - centerY) * 0.2)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className="relative h-[400px] w-full perspective-1000">
      <motion.div className="relative h-full w-full transform-style-3d" style={{ rotateX: mouseY, rotateY: mouseX }}>
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="absolute left-1/2 top-1/2 transform-gpu"
            initial={{
              x: "-50%",
              y: "-50%",
              rotate: (i * 360) / technologies.length,
              translateZ: 150,
            }}
            animate={{
              rotate: [(i * 360) / technologies.length, ((i + 1) * 360) / technologies.length],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-background/10 backdrop-blur-sm"
              style={{
                boxShadow: `0 0 20px ${tech.color}33`,
                border: `2px solid ${tech.color}66`,
              }}
            >
              <span className="text-2xl">{tech.icon}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

