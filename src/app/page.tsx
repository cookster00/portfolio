import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import ServicesSection from "./components/services-section"
import WorkSection from "./components/work-section"
import ProcessSection from "./components/process-section"
import AboutSection from "./components/about-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
