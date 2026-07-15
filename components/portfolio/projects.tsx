"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bug,
  CheckCircle,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  LayoutDashboard,
  Search,
  Server,
  Shield,
  Star,
  TestTube,
  Users
} from "lucide-react"

type ProjectLink = {
  label: string
  href?: string
  icon: LucideIcon
  variant?: "primary" | "outline"
}

type ProjectFeature = {
  icon: LucideIcon
  title: string
  description: string
}

type Project = {
  role: string
  title: string
  description: string
  overview: string
  badges: string[]
  techStack: { name: string; color: string }[]
  features: ProjectFeature[]
  links: ProjectLink[]
  featured?: boolean
}

const projects: Project[] = [
  {
    role: "QA Automation Tester",
    title: "OrangeHRM Login Automation Framework",
    description:
      "Developed a Selenium WebDriver automation testing framework for the OrangeHRM login module using Java, TestNG, Maven, Page Object Model (POM), and Apache POI.",
    overview:
      "Implemented Data-Driven Testing, assertions, explicit waits, and reusable automation scripts to validate login functionality.",
    badges: ["Java", "Selenium WebDriver", "TestNG"],
    techStack: [
      { name: "Java", color: "bg-red-500/15 text-red-200 border-red-300/35" },
      { name: "Selenium WebDriver", color: "bg-green-500/15 text-green-200 border-green-300/35" },
      { name: "TestNG", color: "bg-yellow-500/15 text-yellow-200 border-yellow-300/35" },
      { name: "Maven", color: "bg-orange-500/15 text-orange-200 border-orange-300/35" },
      { name: "POM", color: "bg-purple-500/15 text-purple-200 border-purple-300/35" },
      { name: "Apache POI", color: "bg-blue-500/15 text-blue-200 border-blue-300/35" }
    ],
    features: [
      {
        icon: TestTube,
        title: "Data-Driven Testing",
        description: "Multiple test data sets managed through Apache POI integration"
      },
      {
        icon: Shield,
        title: "Page Object Model",
        description: "Modular and maintainable automation design for login workflows"
      },
      {
        icon: CheckCircle,
        title: "Assertions & Waits",
        description: "Reliable validation with assertions and explicit waits"
      },
      {
        icon: Code2,
        title: "Reusable Scripts",
        description: "Reusable automation components for efficient test development"
      },
      {
        icon: Bug,
        title: "TestNG Framework",
        description: "Structured execution with TestNG annotations and reporting"
      },
      {
        icon: Database,
        title: "Apache POI Integration",
        description: "Excel-based test data management for login coverage"
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/KristoPraveejiny/TestNG-practice-with-Orange-HRM-website-.git",
        icon: Github,
        variant: "primary"
      },
      {
        label: "View Project",
        icon: ExternalLink,
        variant: "outline"
      }
    ],
    featured: true
  },
  {
    role: "API Tester",
    title: "REST API Testing - ReqRes API",
    description:
      "Performed REST API testing using Postman by creating and executing test cases for GET, POST, PUT, PATCH, and DELETE requests.",
    overview:
      "Validated response status codes, JSON responses, authentication, and API functionality through positive and negative test scenarios.",
    badges: ["Postman", "REST API", "JSON"],
    techStack: [
      { name: "Postman", color: "bg-orange-500/15 text-orange-200 border-orange-300/35" },
      { name: "REST API", color: "bg-green-500/15 text-green-200 border-green-300/35" },
      { name: "JSON", color: "bg-yellow-500/15 text-yellow-200 border-yellow-300/35" },
      { name: "HTTP Methods", color: "bg-blue-500/15 text-blue-200 border-blue-300/35" }
    ],
    features: [
      {
        icon: Server,
        title: "HTTP Methods Testing",
        description: "GET, POST, PUT, PATCH, and DELETE request coverage"
      },
      {
        icon: CheckCircle,
        title: "Response Validation",
        description: "Status codes, response payloads, and data integrity checks"
      },
      {
        icon: Shield,
        title: "Authentication Testing",
        description: "Token-based access and auth behavior validation"
      },
      {
        icon: Search,
        title: "Positive & Negative Tests",
        description: "Valid and invalid scenarios to verify API robustness"
      },
      {
        icon: FileText,
        title: "JSON Schema Validation",
        description: "Consistent response structure checks across endpoints"
      },
      {
        icon: Bug,
        title: "Error Handling",
        description: "Boundary conditions and error responses for edge cases"
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/KristoPraveejiny/postman-reqres-api-testing.git",
        icon: Github,
        variant: "primary"
      },
      {
        label: "View Collection",
        icon: ExternalLink,
        variant: "outline"
      }
    ]
  },
  {
    role: "Manual QA Tester",
    title: "Buggy Cars Rating - Manual Testing",
    description:
      "Designed and documented manual test scenarios and test cases for the Buggy Cars Rating web application.",
    overview:
      "Executed positive and negative test cases, compared expected and actual results, and documented defects and test execution outcomes using Excel.",
    badges: ["Manual Testing", "Excel Documentation", "Bug Reports"],
    techStack: [
      { name: "Manual Testing", color: "bg-purple-500/15 text-purple-200 border-purple-300/35" },
      { name: "Excel", color: "bg-green-500/15 text-green-200 border-green-300/35" },
      { name: "Test Documentation", color: "bg-blue-500/15 text-blue-200 border-blue-300/35" },
      { name: "Defect Tracking", color: "bg-red-500/15 text-red-200 border-red-300/35" }
    ],
    features: [
      {
        icon: FileText,
        title: "Test Scenarios",
        description: "Comprehensive manual scenarios for the application"
      },
      {
        icon: TestTube,
        title: "Test Cases",
        description: "Detailed coverage across functional requirements"
      },
      {
        icon: Bug,
        title: "Bug Reports",
        description: "Defects documented with reproduction details and severity"
      },
      {
        icon: CheckCircle,
        title: "Positive & Negative Testing",
        description: "Balanced execution of valid and invalid flows"
      },
      {
        icon: Search,
        title: "Expected vs Actual Results",
        description: "Clear comparison of expected and observed outcomes"
      },
      {
        icon: Database,
        title: "Excel Documentation",
        description: "Structured test records and execution reports in Excel"
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/KristoPraveejiny/Buggy-Cars-Rating_Manual-Testing.git",
        icon: Github,
        variant: "primary"
      }
    ]
  },
  {
    role: "QA Tester",
    title: "SauceDemo - Manual & Automation Testing",
    description:
      "Conducted manual testing and automated critical e-commerce workflows using Selenium WebDriver with Java and TestNG.",
    overview:
      "Developed automation scripts, validated application behavior using assertions, and applied Selenium locators and explicit waits for reliable test execution.",
    badges: ["Java", "Selenium", "TestNG"],
    techStack: [
      { name: "Java", color: "bg-red-500/15 text-red-200 border-red-300/35" },
      { name: "Selenium", color: "bg-green-500/15 text-green-200 border-green-300/35" },
      { name: "TestNG", color: "bg-yellow-500/15 text-yellow-200 border-yellow-300/35" },
      { name: "Manual Testing", color: "bg-purple-500/15 text-purple-200 border-purple-300/35" }
    ],
    features: [
      {
        icon: TestTube,
        title: "Automated E-Commerce Flows",
        description: "Login, product selection, and checkout workflows"
      },
      {
        icon: Code2,
        title: "Selenium WebDriver",
        description: "Reliable automation scripts with Java and TestNG"
      },
      {
        icon: Shield,
        title: "Assertions & Validations",
        description: "Behavior checks and data integrity validations"
      },
      {
        icon: Search,
        title: "Selenium Locators",
        description: "Multiple locator strategies for stable element targeting"
      },
      {
        icon: CheckCircle,
        title: "Explicit Waits",
        description: "Dynamic element handling for stable execution"
      },
      {
        icon: FileText,
        title: "Manual Test Cases",
        description: "Manual scenarios supporting end-to-end coverage"
      }
    ],
    links: [
      {
        label: "Automation Repository",
        href: "https://github.com/KristoPraveejiny/Sauce_demo-automation-testing-with-selenium.git",
        icon: Github,
        variant: "primary"
      },
      {
        label: "Manual Testing Repository",
        href: "https://github.com/KristoPraveejiny/manual-testing-saucedemo.git",
        icon: Github,
        variant: "outline"
      }
    ]
  },
  {
    role: "Full Stack Developer & QA Testing Practice",
    title: "Annam Integrated Farm Management System",
    description:
      "Developed an integrated farm management web application using HTML, CSS, JavaScript, PHP, and MySQL.",
    overview:
      "Created manual test scenarios and test cases in Excel for Customer Signup, Provider Signup, Customer Login, Provider Login, and Customer Dashboard modules, and executed positive and negative test cases.",
    badges: ["HTML", "PHP", "MySQL"],
    techStack: [
      { name: "HTML", color: "bg-orange-500/15 text-orange-200 border-orange-300/35" },
      { name: "CSS", color: "bg-sky-500/15 text-sky-200 border-sky-300/35" },
      { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-200 border-yellow-300/35" },
      { name: "PHP", color: "bg-indigo-500/15 text-indigo-200 border-indigo-300/35" },
      { name: "MySQL", color: "bg-blue-500/15 text-blue-200 border-blue-300/35" },
      { name: "Excel", color: "bg-green-500/15 text-green-200 border-green-300/35" }
    ],
    features: [
      {
        icon: Users,
        title: "Customer & Provider Signup",
        description: "Dual registration flows with validation"
      },
      {
        icon: Shield,
        title: "Login Modules",
        description: "Secure authentication for Customer and Provider roles"
      },
      {
        icon: LayoutDashboard,
        title: "Customer Dashboard",
        description: "Dashboard for managing farm-related activities and services"
      },
      {
        icon: TestTube,
        title: "Manual Test Scenarios",
        description: "Comprehensive Excel-based test planning for each module"
      },
      {
        icon: CheckCircle,
        title: "Positive & Negative Testing",
        description: "Valid and invalid test cases for robust coverage"
      },
      {
        icon: Bug,
        title: "Defect Documentation",
        description: "Execution results and defects captured for resolution"
      }
    ],
    links: [
      {
        label: "Development Repository",
        href: "https://github.com/KristoPraveejiny/Innovista-final.git",
        icon: Github,
        variant: "primary"
      },
      {
        label: "Testing Repository",
        href: "https://github.com/KristoPraveejiny/Manual_testing_Innovista.git",
        icon: Github,
        variant: "outline"
      }
    ]
  }
]

function ProjectActionButton({ link }: { link: ProjectLink }) {
  const buttonClasses =
    link.variant === "primary"
      ? "gap-2 neon-button bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
      : "gap-2 neon-button"

  if (link.href) {
    return (
      <Button asChild size="sm" className={buttonClasses}>
        <Link href={link.href} target="_blank" rel="noopener noreferrer">
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      </Button>
    )
  }

  return (
    <Button size="sm" variant="outline" className={buttonClasses} disabled>
      <link.icon className="h-4 w-4" />
      {link.label}
    </Button>
  )
}

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <Card
      className="overflow-hidden card-hover rounded-2xl transition-all duration-700 neon-panel neon-border mt-10"
      style={{
        transitionDelay: `${200 + index * 120}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)"
      }}
    >
      {project.featured ? (
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-6 py-3 border-b border-primary/20">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Featured Project</span>
          </div>
        </div>
      ) : null}

      <CardHeader className="pb-4 pt-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 neon-chip">
            {project.role}
          </Badge>
          {project.badges.map((badge) => (
            <Badge key={badge} variant="outline" className="neon-chip">
              {badge}
            </Badge>
          ))}
        </div>

        <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
        <CardDescription className="text-base md:text-lg">{project.description}</CardDescription>

        <div className="flex flex-wrap gap-3 mt-4">
          {project.links.map((link) => (
            <ProjectActionButton key={link.label} link={link} />
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-8 pb-8">
        <div className="p-5 rounded-xl bg-secondary/40 border border-primary/20">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Project Overview
          </h4>
          <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Technical Implementation
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech.name} variant="outline" className={`${tech.color} border font-medium px-3 py-1 neon-chip`}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Key Features
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, featureIndex) => (
              <div
                key={feature.title}
                className={`group p-5 rounded-xl neon-panel neon-border hover:border-primary/45 transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${400 + index * 120 + featureIndex * 80}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h5 className="font-medium mb-1.5">{feature.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 section-divider relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 neon-chip">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest and most impactful testing and development work
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
