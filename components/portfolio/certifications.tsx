import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "ISTQB Certified Tester",
    subtitle: "Foundation Level (CTFL; Core) v4.0",
    type: "Professional Certification",
    icon: Award,
    issuer: "International Software Testing Qualifications Board",
    issuedBy: "Sri Lanka Software Testing Board (SLSTB)",
    date: "January 25, 2026",
    certificateNumber: "SL-CTFL-2601-7225",
    description: "Internationally recognized certification demonstrating fundamental knowledge of software testing principles, methodologies, and best practices.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2010.03.04%20AM-UhBoX2ABedQONGcHNbd349BeBU2pGv.jpeg"
  },
  {
    title: "Introduction to Software Quality Assurance",
    subtitle: "Online Learning Programme",
    type: "Academic Certificate",
    icon: BookOpen,
    issuer: "Centre for Open & Distance Learning (CODL)",
    issuedBy: "Department of Computer Science & Engineering, University of Moratuwa",
    verificationCode: "LXtJLUxdsk",
    verificationUrl: "https://open.uom.lk/verify",
    description: "Comprehensive course covering software quality assurance fundamentals, testing techniques, and quality engineering practices.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2010.08.12%20AM-y3gqyLEoNNMht6W1Fs9RRloKBpFvfD.jpeg"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 section-divider">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 neon-chip">
            Professional Development
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Credentials and continuous learning achievements in Software Quality Assurance
          </p>
        </div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl card-hover neon-panel neon-border">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden bg-muted/40 border-r border-primary/20">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-3 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs neon-chip bg-primary/10 text-primary">
                      {cert.type}
                    </Badge>
                    <div className="p-2 rounded-full bg-primary/10">
                      <cert.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                  <CardDescription className="text-base font-medium mb-3">
                    {cert.subtitle}
                  </CardDescription>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2 text-sm mt-auto">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground min-w-24">Issuer:</span>
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground min-w-24">Issued by:</span>
                      <span>{cert.issuedBy}</span>
                    </div>
                    {cert.date && (
                      <div className="flex items-start gap-2">
                        <span className="text-muted-foreground min-w-24">Date:</span>
                        <span>{cert.date}</span>
                      </div>
                    )}
                    {cert.certificateNumber && (
                      <div className="flex items-start gap-2">
                        <span className="text-muted-foreground min-w-24">Certificate #:</span>
                        <span className="font-mono text-xs">{cert.certificateNumber}</span>
                      </div>
                    )}
                    {cert.verificationCode && (
                      <div className="flex items-start gap-2">
                        <span className="text-muted-foreground min-w-24">Verification:</span>
                        <span className="font-mono text-xs">{cert.verificationCode}</span>
                      </div>
                    )}
                  </div>
                  
                  {cert.verificationUrl && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <Button variant="outline" size="sm" asChild className="border-primary/35 bg-primary/5 hover:bg-primary/15 neon-button">
                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
