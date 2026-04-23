"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, BookOpen, Shield, Target } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const traits = [
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Passionately exploring emerging technologies, software testing methodologies, and modern development frameworks to expand my technical expertise."
    },
    {
      icon: Shield,
      title: "Quality-Oriented Thinker",
      description: "Focused on identifying issues, improving software reliability, and ensuring seamless user experiences through effective Quality Assurance practices."
    },
    {
      icon: Target,
      title: "Goal-Driven Developer",
      description: "Committed to building impactful, user-friendly, and efficient software solutions that solve real-world problems."
    }
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 md:pt-28 relative overflow-hidden">
      {/* Gradient blur background shapes */}
      <div className="gradient-blur w-96 h-96 bg-primary/40 -top-48 -right-48 absolute animate-float" />
      <div className="gradient-blur w-80 h-80 bg-primary/30 bottom-20 -left-40 absolute" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-10%20at%2020.31.36_43cc4855-I5J3yhp1n5ScOpDv3CHGPXTthr6ued.jpg"
                  alt="Sabaratnam Kristo Praveejiny - Software QA & Full-Stack Developer"
                  width={192}
                  height={192}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.65)]">
                <span className="text-primary-foreground text-lg">✓</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary/70 text-secondary-foreground rounded-full neon-chip backdrop-blur-md">
              Available for opportunities
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Sabaratnam Kristo Praveejiny
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-3">
            Software Quality Assurance | Full-Stack Developer
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium bg-primary/10 text-blue-200 rounded-full neon-chip">
              <Shield className="h-3.5 w-3.5" />
              ISTQB Certified Tester
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
            An undergraduate in Industrial Information Technology at Uva Wellassa University, 
            with a strong passion for Software Quality Assurance, Testing, and Full-Stack Development. 
            I am dedicated to ensuring software reliability through effective testing practices while 
            also building modern, user-friendly, and efficient web applications. With a growing interest 
            in both quality engineering and software development, I strive to create innovative digital 
            solutions that deliver meaningful user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 px-8 neon-button bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 px-8 border-primary/40 bg-primary/5 hover:bg-primary/15 hover:text-blue-100 neon-button"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {traits.map((trait, index) => (
            <div 
              key={trait.title}
              className="p-6 rounded-2xl neon-panel neon-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                <trait.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{trait.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
