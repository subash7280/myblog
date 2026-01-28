"use client"

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/subash7280", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/subash-eswaramoorthi-49018927a", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/subash.eswaramoorthi/?igshid=NzZhOTFlYzFmZQ%3D%3D", label: "Instagram" },
  { icon: Mail, href: "mailto:subasheswaramoorthi143@gmail.com", label: "Email" },
]

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="group p-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Subash Eswaramoorthi<span className="text-primary">.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creative developer passionate about building beautiful,
                functional, and accessible digital experiences.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="mailto:subasheswaramoorthi143@gmail.com" className="hover:text-primary transition-colors">
                    subasheswaramoorthi143@gmail.com
                  </a>
                </li>

                {/* <li>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </li> */}

                <li>Tiruppur, India</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by{" "}
              <span className="text-foreground font-medium">Subash Eswaramoorthi</span>
            </p>

            <p>
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
