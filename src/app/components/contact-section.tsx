"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Let's Start Your Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get your business online? I'd love to hear about your project and discuss how I can help you
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                  Tell me about your business and what kind of website you're looking for.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Me About Your Project</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I have a small restaurant and need a website to show our menu and location..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-4 bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    📝 TODO: Connect form to email service or contact form handler
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-heading font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">alex@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-heading font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-heading font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">Portland, OR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3">Quick Response</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond to new inquiries within 24 hours. For urgent projects, feel free to call!
                </p>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm text-primary font-medium">💡 Free consultation calls available</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">📝 TODO: Update contact information with real details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
