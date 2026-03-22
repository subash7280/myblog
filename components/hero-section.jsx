"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height
      setMousePosition({ x, y })
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blob */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-morph"
          style={{
            top: `${20 + mousePosition.y * 10}%`,
            left: `${10 + mousePosition.x * 10}%`,
            transition: "top 0.3s ease-out, left 0.3s ease-out",
          }}
        />
        {/* Secondary blob */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-morph animation-delay-400"
          style={{
            bottom: `${10 + (1 - mousePosition.y) * 15}%`,
            right: `${5 + (1 - mousePosition.x) * 15}%`,
            transition: "bottom 0.3s ease-out, right 0.3s ease-out",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for new projects</span>
          </div>

          {/* Name */}
          <h1
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="text-foreground">{"Hi, I'm "}</span>
            <span className="text-gradient">Subash Eswaramoorthi</span>
          </h1>

          {/* Title with typing effect style */}
          <div
            className={cn(
              "text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 transition-all duration-700 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="text-foreground font-semibold">Software Developer</span>
            <span className="mx-3 text-primary">|</span>
            <span>Building Digital Experiences</span>
          </div>

          {/* Description */}
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10 transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            I craft beautiful, functional, and accessible web experiences.
            Passionate about turning complex problems into simple, elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {"Get in Touch"}
                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => {
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-4 font-semibold text-foreground border-2 border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div
            className={cn(
              "flex items-center justify-center gap-4 transition-all duration-700 delay-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {[
              { icon: Github, href: "https://github.com/subash7280", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/subash-eswaramoorthi", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/subash.eswaramoorthi/?igshid=NzZhOTFlYzFmZQ%3D%3D", label: "Instagram" },
              { icon: Mail, href: "mailto:subasheswaramoorthi143@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-4 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce-subtle" />
          </div>
        </button>
      </div>
    </section>
  )
}
