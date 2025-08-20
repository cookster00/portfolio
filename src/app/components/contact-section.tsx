"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Clock, ShieldCheck, Sparkles, Send } from "lucide-react";

function ContactSideCard() {
  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Contact & Info</CardTitle>
        <CardDescription>Prefer email or LinkedIn? I’ll get back to you soon.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Primary Actions */}
        <div className="space-y-2">
          <Button
            variant="default"
            className="w-full"
            aria-label="Send me an email"
          >
            <a
              href="mailto:n23c23@gmail.com"
              className="flex items-center justify-center w-full"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Email Me
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-full"
            aria-label="Connect with me on LinkedIn"
          >
            <a
              href="https://www.linkedin.com/in/nathan-cook-a73450254/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full"
            >
              <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>

        {/* Response Time & Privacy */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span>Typical reply: 24–48 hours</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span>Your info stays private</span>
          </div>
        </div>

        {/* What I Can Help With */}
        <div className="space-y-2">
          <p className="text-sm font-medium">What I can help with:</p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Simple websites (one-pager or small multi-page)</li>
            <li>Mobile-friendly redesigns</li>
            <li>Small automations & reports</li>
          </ul>
        </div>

      </CardContent>
    </Card>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"), // Honeypot
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus("success");
    e.currentTarget.reset(); // Reset the form
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Let's Start Your Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get your business online? Send me a message below or reach out via email or your favorite platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Form */}
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
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Me About Your Project</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I have a small restaurant and need a website to show our menu and location..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="mt-4 text-center" aria-live="polite">
                    {status === "success" && (
                      <p className="text-green-600">Thanks! I’ll reply soon.</p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Info Card */}
          <div className="lg:col-span-1">
            <ContactSideCard />
          </div>
        </div>
      </div>
    </section>
  );
}
