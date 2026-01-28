import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkProjectsSection } from "@/components/work-projects-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SiteTour } from "@/components/site-tour"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <SiteTour />
    </main>
  )
}
