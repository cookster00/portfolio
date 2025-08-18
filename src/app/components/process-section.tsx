import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { MessageCircle, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Let's Chat",
    description: "We'll have a friendly conversation about your business, goals, and what you need from your website.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design & Plan",
    description: "I'll create a design that reflects your brand and plan out all the features your website needs.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build & Test",
    description: "I'll build your website, making sure it works perfectly on all devices and loads quickly.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "Your website goes live! I'll help you get started and provide ongoing support when you need it.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">How We'll Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your website built doesn't have to be complicated. Here's my simple, straightforward process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center relative">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit relative">
                  <step.icon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <CardTitle className="font-heading font-semibold text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              📝 TODO: Add timeline information and typical project duration
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
