"use client"

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
          Simple, Beautiful Websites for <span className="text-primary">Small Businesses</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Hi! I'm Alex, a freelance web developer who creates clean, user-friendly websites that help your business
          shine online. No complicated jargon, just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={scrollToContact} className="font-medium">
            Get Your Website Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.getElementById("work")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            View My Work
          </Button>
        </div>

        {/* TODO: Add a hero image or illustration here */}
        <div className="mt-12 bg-muted rounded-lg p-8 text-muted-foreground">
          <p className="text-sm">📝 TODO: Add hero image or illustration showcasing website examples</p>
        </div>
      </div>
    </section>
  )
}
