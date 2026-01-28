"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work & Projects", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 glass border-b border-border/50"
            : "py-6 bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative"
            >
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                SE
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                      activeSection === item.href.replace("#", "")
                        ? "text-primary-foreground bg-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">

                  {
                    (mounted) &&
                    (
                      <>
                        <Sun
                          className={
                            cn(
                              "absolute inset-0 w-5 h-5 text-foreground transition-all duration-500",
                              (theme === "dark") ? ("rotate-0 scale-100 opacity-100") : ("-rotate-90 scale-0 opacity-0")
                            )
                          }
                        />

                        <Moon
                          className={
                            cn(
                              "absolute inset-0 w-5 h-5 text-foreground transition-all duration-500",
                              (theme === "light") ? ("rotate-0 scale-100 opacity-100") : ("rotate-90 scale-0 opacity-0")
                            )
                          }
                        />
                      </>
                    )
                  }
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full bg-secondary hover:bg-primary/10 border border-border transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>

              {/* CTA Button - Desktop */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                {"Let's Talk"}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav className={cn(
          "absolute top-20 left-4 right-4 p-6 bg-card rounded-2xl border border-border shadow-2xl transition-all duration-500",
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        )}>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary-foreground bg-primary"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToSection("#contact")}
            className="w-full mt-4 px-5 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all duration-300"
          >
            {"Let's Talk"}
          </button>
        </nav>
      </div>
    </>
  )
};