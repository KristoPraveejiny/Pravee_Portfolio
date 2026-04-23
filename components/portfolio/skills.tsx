"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 60 },
      { name: "C / C++", level: 55 }
    ]
  },
  {
    title: "Web & Database",
    icon: Database,
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "React", level: 65 },
      { name: "MongoDB", level: 60 }
    ]
  },
  {
    title: "Tools & Concepts",
    icon: Wrench,
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Software Testing / QA", level: 85 },
      { name: "GitHub", level: 75 },
      { name: "UI/UX Design", level: 70 }
    ]
  }
]

const softSkills = [
  "Problem Solving",
  "Teamwork & Collaboration",
  "Communication Skills",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Attention to Detail"
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/80 rounded-full overflow-hidden border border-primary/15">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-1000 ease-out shadow-[0_0_18px_rgba(59,130,246,0.65)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 section-divider relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 neon-chip">
            What I Work With
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-hover rounded-2xl neon-panel neon-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default neon-chip"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
