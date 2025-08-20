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
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
          Build Your Perfect Website
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          I create clean, professional websites and automations to help small businesses thrive online.
        </p>

        {/* Illustration */}
        <div className="p-4">
          <img
            src="/hero-illustration.svg"
            alt="Illustration showing website and dashboard examples"
            className="mx-auto max-w-md md:max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}
