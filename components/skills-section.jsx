"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Code, Database, Wrench, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "bg-primary",
    skills: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "bg-chart-2",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
      "WebSockets",
      "Redis",
      "Apache Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "bg-chart-4",
    skills: [
      "Git / GitHub",
      "Postman",
      "Jest",
      "Sentry",
    ],
  },
];

const additionalSkills = [
  "System Design",
  "API Design",
  "Schema Design",
  "Microservices",
  "Event-Driven Architecture",
  "MVC Architecture",
  "AWS (Lambda, S3)",
  "Agile",
  "Debugging",
  "Performance Optimization",
  "Modular Design",
  "Scrum",
];

export function SkillsSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Skills &{" "}
              <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {
              skillCategories?.map((category = {}, categoryIndex = 0,) => {
                const Icon = category?.icon;

                return (
                  <div
                    key={category?.title}
                    className={cn(
                      "group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${200 + categoryIndex * 150}ms` }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                        category?.color
                      )}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category?.title}</h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {
                        category?.skills?.map(skill => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-sm rounded-full bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary transition"
                          >
                            {skill}
                          </span>
                        ))
                      }
                    </div>

                    {/* <div className="space-y-5">
                      {
                        category?.skills?.map((skill = {}, skillIndex = 0,) => (
                          <div key={skill?.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-foreground">
                                {skill?.name}
                              </span>

                              <span className="text-xs font-mono text-muted-foreground">
                                {skill?.level}%
                              </span>
                            </div>

                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className={cn(
                                  "h-full rounded-full transition-all duration-1000 ease-out",
                                  category?.color,
                                  isVisible ? "" : "w-0"
                                )}
                                style={{
                                  width: isVisible ? `${skill?.level}%` : "0%",
                                  transitionDelay: `${400 + categoryIndex * 150 + skillIndex * 100}ms`,
                                }}
                              />
                            </div>
                          </div>
                        ))
                      }
                    </div> */}
                  </div>
                )
              })}
          </div>

          {/* Additional Skills */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Also Familiar With</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {
                additionalSkills?.map((skill, index) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 text-sm font-medium text-foreground bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default",
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};