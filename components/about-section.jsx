"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Code2, Palette, Rocket, Heart } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable, scalable solutions" },
  { icon: Palette, label: "UI/UX Focus", description: "Creating beautiful, intuitive interfaces" },
  { icon: Rocket, label: "Performance", description: "Optimizing for speed and efficiency" },
  { icon: Heart, label: "Passion", description: "Loving what I do every single day" },
]

export function AboutSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className={cn(
              "relative transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6" />

                {/* Main image container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary border-2 border-border">
                  <div className="absolute inset-0 bg-primary/10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl font-bold text-muted-foreground/30">
                      {/* <img src={"my_image.jpg"} alt="SE" width={532} height={680} loading="lazy" /> */}
                      <img src={"IMG_3949.jpg"} alt="SE" width={532} height={680} loading="lazy" />
                    </span>
                  </div>

                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/90">
                    <p className="text-sm text-muted-foreground">Yeah, this is me</p>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -right-4 -bottom-4 p-4 bg-card rounded-xl border border-border shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">2.5+ Years</p>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={cn(
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {"Hello! I'm Subash Eswaramoorthi, a passionate developer who loves creating things that live on the internet."}
                  {" My journey in web development began in 2023 when I decided to try customizing themes"}
                  {" and discovered the joy of bringing ideas to life through code."}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {"Fast-forward to today, and I've had the privilege of working with startups,"}
                  {" agencies, and large corporations. My focus is on building accessible, inclusive"}
                  {" products and digital experiences that users love."}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {"When I'm not at the computer, you'll find me exploring new places,"}
                  {" reading about technology, or working on personal projects."}
                </p>
              </div>

              {/* Highlight cards */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className={cn(
                        "group p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
