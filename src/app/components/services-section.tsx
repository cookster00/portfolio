import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Globe, Smartphone, Zap, Palette } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Simple Websites",
    description:
      "Clean, professional websites that showcase your business perfectly. Perfect for restaurants, shops, and service providers.",
    // TODO: Add pricing range
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    description:
      "Your website will look great on phones, tablets, and computers. No more losing customers to poor mobile experience.",
    // TODO: Add mobile optimization details
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "Quick loading times and reliable hosting mean your customers can always find you when they need you most.",
    // TODO: Add performance metrics
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Your website will reflect your unique brand and personality. No cookie-cutter templates here!",
    // TODO: Add design process details
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">What I Can Do For You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in creating simple, effective websites that help small businesses connect with their customers
            online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading font-semibold text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">📝 TODO: Add pricing information and service packages</p>
          </div>
        </div>
      </div>
    </section>
  )
}
