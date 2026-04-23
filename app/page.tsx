import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Skills } from "@/components/portfolio/skills"
import { Certifications } from "@/components/portfolio/certifications"
import { Languages } from "@/components/portfolio/languages"
import { Footer } from "@/components/portfolio/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen relative isolate overflow-hidden">
      <Navigation />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Languages />
      <Footer />
    </main>
  )
}
