import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sunny Side Café",
    description:
      "A warm, inviting website for a local coffee shop featuring their menu, location, and online ordering.",
    image: "/coffee-shop-homepage.png",
    tags: ["Restaurant", "Menu", "Online Ordering"],
    // TODO: Add real project URL
    url: "#",
  },
  {
    title: "Green Thumb Landscaping",
    description: "Professional landscaping company website showcasing services and beautiful project galleries.",
    image: "/landscaping-business-website.png",
    tags: ["Service Business", "Gallery", "Contact Forms"],
    // TODO: Add real project URL
    url: "#",
  },
  {
    title: "Bella's Boutique",
    description: "Elegant online presence for a local fashion boutique with product showcases and store information.",
    image: "/fashion-boutique-website.png",
    tags: ["Retail", "Product Showcase", "Store Locator"],
    // TODO: Add real project URL
    url: "#",
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Recent Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some websites I've created for small businesses like yours. Each one is designed to help them
            connect with their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} website screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading font-semibold text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Project
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              📝 TODO: Replace with real project screenshots and add live project links
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
