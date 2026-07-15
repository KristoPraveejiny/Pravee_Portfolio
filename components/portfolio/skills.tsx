"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, TestTube, FileText, Globe, PlugZap, Layers3, GitBranch, BriefcaseBusiness } from "lucide-react"

const skillCategories = [
  {
    title: "Testing Skills",
    icon: Code,
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Functional Testing", level: 92 },
      { name: "Test Case Design", level: 94 },
      { name: "Test Planning", level: 90 },
      { name: "Test Execution", level: 93 },
      { name: "Defect Reporting", level: 92 },
      { name: "Bug Life Cycle", level: 88 }
    ]
  },
  {
    title: "Testing Concepts",
    icon: TestTube,
    skills: [
      { name: "Regression Testing", level: 90 },
      { name: "Smoke Testing", level: 88 },
      { name: "Sanity Testing", level: 86 },
      { name: "Exploratory Testing", level: 89 },
      { name: "Black Box Testing", level: 91 }
    ]
  },
  {
    title: "Automation Testing",
    icon: PlugZap,
    skills: [
      { name: "Selenium WebDriver", level: 92 },
      { name: "TestNG", level: 90 },
      { name: "Maven", level: 88 },
      { name: "Java Automation Testing", level: 90 },
      { name: "Explicit Waits", level: 89 },
      { name: "Assertions", level: 91 },
      { name: "Apache POI", level: 86 },
      { name: "POM", level: 88 },
      { name: "Data-Driven Testing", level: 89 }
    ]
  },
  {
    title: "API Testing",
    icon: Globe,
    skills: [
      { name: "Postman", level: 92 },
      { name: "REST API Testing", level: 91 },
      { name: "HTTP Methods", level: 90 },
      { name: "CRUD Operations", level: 88 },
      { name: "Status Code Validation", level: 92 },
      { name: "JSON Validation", level: 90 },
      { name: "Authentication Testing", level: 89 }
    ]
  },
  {
    title: "Programming Languages",
    icon: FileText,
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 84 },
      { name: "SQL", level: 88 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 91 },
      { name: "PHP", level: 86 }
    ]
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "SQL Queries", level: 89 },
      { name: "CRUD Operations", level: 87 },
      { name: "Database Validation", level: 88 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ IDEA", level: 86 }
    ]
  },
  {
    title: "Methodologies",
    icon: BriefcaseBusiness,
    skills: [
      { name: "SDLC", level: 90 },
      { name: "STLC", level: 92 },
      { name: "Agile Scrum", level: 88 }
    ]
  }
]

const softSkills = [
  "Attention to Detail",
  "Analytical Thinking",
  "Problem Solving",
  "Team Collaboration",
  "Communication Skills",
  "Quick Learning Ability"
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
            2021 (2022)
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical skills, testing experience, and QA tooling aligned to my portfolio work
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
