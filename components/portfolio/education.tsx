import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const educationData = [
  {
    institution: "Uva Wellassa University of Sri Lanka",
    degree: "BSc (Hons) in Industrial Information Technology",
    type: "Bachelor's Degree",
    icon: GraduationCap,
    details: null
  },
  {
    institution: "MN/Murunkan Central College",
    degree: "Advanced Level (A/L) – Commerce Stream",
    type: "A/L",
    icon: Award,
    details: {
      results: "1A, 1B, 1C",
      zscore: "1.0459"
    }
  },
  {
    institution: "MN/Murunkan Central College",
    degree: "Ordinary Level (O/L)",
    type: "O/L",
    icon: Award,
    details: {
      results: "4A, 4B, 1C",
      zscore: null
    }
  }
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 neon-chip">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="relative overflow-hidden card-hover rounded-2xl neon-panel neon-border">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/50 rounded-l-full" />
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                    <edu.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs neon-chip bg-primary/10 text-primary">
                        {edu.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{edu.institution}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {edu.degree}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              {edu.details && (
                <CardContent className="pt-0 pl-16">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Results: </span>
                      <span className="font-medium">{edu.details.results}</span>
                    </div>
                    {edu.details.zscore && (
                      <div>
                        <span className="text-muted-foreground">Z-Score: </span>
                        <span className="font-medium">{edu.details.zscore}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
