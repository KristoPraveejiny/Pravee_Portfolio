import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"

const languages = [
  {
    name: "English",
    level: "Fluent",
    proficiency: 90
  },
  {
    name: "Tamil",
    level: "Native / Fluent",
    proficiency: 100
  },
  {
    name: "Sinhala",
    level: "Intermediate / Conversational",
    proficiency: 60
  }
]

export function Languages() {
  return (
    <section id="languages" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 neon-chip">
            Communication
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Languages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Languages I speak and communicate in
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <Card key={lang.name} className="text-center card-hover rounded-2xl neon-panel neon-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{lang.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{lang.level}</p>
                <div className="h-2 bg-secondary/80 rounded-full overflow-hidden border border-primary/15">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-1000 shadow-[0_0_18px_rgba(59,130,246,0.65)]"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
