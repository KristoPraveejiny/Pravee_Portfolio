import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <>
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="gradient-blur w-72 h-72 bg-primary/20 -bottom-36 -right-36 absolute" />
        <div className="max-w-2xl mx-auto relative z-10">
          <Card className="text-center rounded-2xl neon-panel neon-border shadow-[0_18px_48px_-26px_rgba(37,99,235,0.9)]">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Let&apos;s Work Together</CardTitle>
              <CardDescription className="text-base">
                I&apos;m currently open to new opportunities and collaborations. 
                Feel free to reach out!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:kristopraveejiny@gmail.com"
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-primary-foreground hover:from-blue-500 hover:to-blue-400 hover:scale-105 text-sm font-medium transition-all neon-button"
                >
                  <Mail className="h-4 w-4" />
                  kristopraveejiny@gmail.com
                </a>
                <a 
                  href="tel:+94762087811"
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 py-2 rounded-full border border-primary/35 bg-primary/5 hover:bg-primary/15 hover:text-blue-100 hover:scale-105 text-sm font-medium transition-all neon-button"
                >
                  <Phone className="h-4 w-4" />
                  +94 76 208 7811
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Button variant="outline" size="icon" asChild className="border-primary/35 bg-primary/5 hover:bg-primary/15 neon-button">
                  <a 
                    href="https://github.com/KristoPraveejiny" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-primary/35 bg-primary/5 hover:bg-primary/15 neon-button">
                  <a 
                    href="https://www.linkedin.com/in/kristo-praveejiny-sabaratnam-080b32258" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-primary/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold">Sabaratnam Kristo Praveejiny</p>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & QA Enthusiast
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
