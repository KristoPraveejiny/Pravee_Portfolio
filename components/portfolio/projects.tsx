"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MessageSquare, LayoutDashboard, FileText, Briefcase, Star, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Users,
    title: "Multi-role System",
    description: "Customer, Provider & Admin roles with secure role-based access control"
  },
  {
    icon: FileText,
    title: "Quotation Management",
    description: "Streamlined service booking and quotation request handling"
  },
  {
    icon: Calendar,
    title: "Live Project Tracking",
    description: "Real-time dashboard to monitor ongoing project progress"
  },
  {
    icon: MessageSquare,
    title: "Reviews & Testimonials",
    description: "Customer feedback and rating system for service providers"
  },
  {
    icon: Briefcase,
    title: "Portfolio Showcase",
    description: "Service providers can display their work and past projects"
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panel",
    description: "Comprehensive dashboard for managing users and services"
  }
]

const techStack = [
  { name: "PHP", color: "bg-indigo-500/15 text-indigo-200 border-indigo-300/35" },
  { name: "MySQL", color: "bg-blue-500/15 text-blue-200 border-blue-300/35" },
  { name: "HTML", color: "bg-orange-500/15 text-orange-200 border-orange-300/35" },
  { name: "CSS", color: "bg-sky-500/15 text-sky-200 border-sky-300/35" },
  { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-200 border-yellow-300/35" },
  { name: "XAMPP", color: "bg-amber-500/15 text-amber-200 border-amber-300/35" }
]

const financeFeatures = [
  {
    icon: LayoutDashboard,
    title: "Role-Based Access",
    description: "Secure login flows for Admin, User, and Investor roles with tailored dashboards"
  },
  {
    icon: Calendar,
    title: "Income & Expense Tracking",
    description: "Real-time entry management for income, expenses, and categorized financial records"
  },
  {
    icon: MessageSquare,
    title: "AI Insights",
    description: "Predictive analysis for future income and expenses using machine learning models"
  },
  {
    icon: FileText,
    title: "Financial Reports",
    description: "Profit margins, expense breakdowns, and summary views for better decision-making"
  },
  {
    icon: Users,
    title: "Secure Multi-User System",
    description: "Structured access control designed for multiple user types in one platform"
  },
  {
    icon: Briefcase,
    title: "Responsive Dashboard",
    description: "Modern dark-themed UI with charts and analytics optimized for all devices"
  }
]

const financeTechStack = [
  { name: "HTML", color: "bg-orange-500/15 text-orange-200 border-orange-300/35" },
  { name: "CSS", color: "bg-sky-500/15 text-sky-200 border-sky-300/35" },
  { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-200 border-yellow-300/35" },
  { name: "PHP", color: "bg-indigo-500/15 text-indigo-200 border-indigo-300/35" },
  { name: "MySQL", color: "bg-blue-500/15 text-blue-200 border-blue-300/35" },
  { name: "Python (ML)", color: "bg-emerald-500/15 text-emerald-200 border-emerald-300/35" }
]

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
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 px-6 section-divider relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 neon-chip">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest and most impactful development work
          </p>
        </div>

        <Card 
          className={`overflow-hidden card-hover rounded-2xl transition-all duration-700 delay-200 neon-panel neon-border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Featured Badge */}
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-6 py-3 border-b border-primary/20">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Featured Project</span>
            </div>
          </div>

          <CardHeader className="pb-4 pt-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 neon-chip">
                Full-Stack
              </Badge>
              <Badge variant="outline" className="neon-chip">
                Web Platform
              </Badge>
              <Badge variant="outline" className="neon-chip">
                Service Management
              </Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl">
              Innovista
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Interior Design, Painting & Restoration Service Platform
            </CardDescription>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <Button asChild size="sm" className="gap-2 neon-button bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400">
                <Link href="https://github.com/KristoPraveejiny/Innovista-final.git" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 pb-8">
            {/* Project Overview */}
            <div className="p-5 rounded-xl bg-secondary/40 border border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Project Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Innovista is a full-stack web application designed to connect customers with trusted 
                interior designers and service providers. The platform allows users to request quotations, 
                book services, track project progress, and manage all service-related activities in one place. 
                Built with a modular PHP structure and secure database access using PDO.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Technical Implementation
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge 
                    key={tech.name} 
                    variant="outline"
                    className={`${tech.color} border font-medium px-3 py-1 neon-chip`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Key Features
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`group p-5 rounded-xl neon-panel neon-border hover:border-primary/45 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
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

        <Card
          className={`overflow-hidden card-hover rounded-2xl transition-all duration-700 delay-300 neon-panel neon-border mt-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-6 py-3 border-b border-primary/20">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Featured Project</span>
            </div>
          </div>

          <CardHeader className="pb-4 pt-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 neon-chip">
                Full-Stack
              </Badge>
              <Badge variant="outline" className="neon-chip">
                Analytics Platform
              </Badge>
              <Badge variant="outline" className="neon-chip">
                AI-Powered Finance
              </Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl">
              Smart Finance Monitoring Dashboard
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Smart financial management system with analytics, predictions, and interactive dashboards
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 pb-8">
            <div className="p-5 rounded-xl bg-secondary/40 border border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Project Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                The Smart Finance Monitoring Dashboard is a full-stack financial management system designed
                to help users track expenses, analyze income, and receive AI-powered financial insights.
                It combines secure multi-user access, structured financial records, real-time analytics,
                and predictive forecasting to support better money decisions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Technical Implementation
              </h4>
              <div className="flex flex-wrap gap-2">
                {financeTechStack.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    className={`${tech.color} border font-medium px-3 py-1 neon-chip`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Key Features
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {financeFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`group p-5 rounded-xl neon-panel neon-border hover:border-primary/45 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
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
      </div>
    </section>
  )
}
