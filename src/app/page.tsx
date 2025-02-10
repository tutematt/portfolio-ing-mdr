import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles"
import { MouseSpotlight } from "@/components/mouse-spotlight"
import { Timeline } from "@/components/timeline"
import { Highlights } from "@/components/highlights"
import { JourneyMap } from "@/components/journey-map"
import { SpecialtiesGrid } from "@/components/specialties-grid"
import { StorySection } from "@/components/story-section"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { portfolioConfig } from "@/config/portfolio"

export default function Home() {
  const { personal, navigation } = portfolioConfig
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ParticlesBackground />
      <MouseSpotlight />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/50 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Terminal className="h-6 w-6" />
          </motion.div>
          <div className="flex gap-4">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Button variant="ghost" size="sm" className="relative group">
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container pt-32 pb-16">
        <div className="space-y-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <Avatar className="border-4 border-background shadow-xl">
                  <AvatarImage src={personal.avatar} alt={personal.name} />
                  <AvatarFallback>
                    {personal.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                      {personal.name}
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground">{personal.title}</p>
                </motion.div>
              </div>
            </div>

            <p className="text-muted-foreground">{personal.description}</p>

            <div className="flex justify-center gap-4">
              <Button className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contactar
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button variant="secondary" className="group">
                Ver Proyectos
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <a href={personal.contact.github} target="_blank" rel="noopener noreferrer" className="group">
                <Button variant="ghost" size="icon" className="relative overflow-hidden">
                  <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </a>
              <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                <Button variant="ghost" size="icon" className="relative overflow-hidden">
                  <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Story Section */}
          <StorySection />

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Áreas de Expertise</h2>
            <Highlights />
          </section>

          {/* Specialties Grid */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Especialidades</h2>
            <SpecialtiesGrid />
          </section>

          {/* Journey Map */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Mi Trayectoria</h2>
            <JourneyMap />
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Experiencia Detallada</h2>
            <Timeline />
          </section>
        </div>
      </main>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  )
}

