"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering",
    specialization: "Computer Science / Related Engineering",
    institution: "Dr. N.G.P. Institute of Technology",
    period: "2019 - 2023",
    location: "Coimbatore, India",
    score: "81%",
    description:
      "Completed Bachelor’s degree with strong foundations in programming, software engineering concepts, and web application development.",
    icon: GraduationCap,
    highlights: [
      "Full-stack development fundamentals",
      "Data structures and programming concepts",
      "Web technologies and project-based learning",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Kongu Vellalar Matric Higher Secondary School",
    period: "2018 - 2019",
    location: "Tirupur, India",
    score: "68.8%",
    description:
      "Focused on core science subjects with emphasis on analytical thinking and problem-solving skills.",
    icon: BookOpen,
    highlights: ["Mathematics", "Computer Fundamentals", "Science"],
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Kongu Vellalar Matric Higher Secondary School",
    period: "2016 - 2017",
    location: "Tirupur, India",
    score: "93.4%",
    description:
      "Achieved strong academic performance with emphasis on foundational subjects and logical reasoning.",
    icon: BookOpen,
    highlights: ["High academic performance", "Strong fundamentals"],
  },
];

const certifications = [
  {
    name: "CRUD Operations in MongoDB",
    issuer: "MongoDB",
    year: "July, 2025",
    credential: "credly.com/badges/326c1fec-74b5-404a-b281-d77393e55959"
  },
  {
    name: "React Front To Back",
    issuer: "Udemy",
    year: "September, 2023",
    credential: "ude.my/UC-fff677b8-fd98-4667-ac7c-7f837f3ac674"
  },
  {
    name: "The Complete Node.js Developer Course (3rd Edition)",
    issuer: "Udemy",
    year: "August, 2023",
    credential: "ude.my/UC-73270402-2c67-495e-aec4-09137bc9a66a"
  },
  {
    name: "Modern JavaScript From The Beginning 2.0 – 2023 Revamp",
    issuer: "Udemy",
    year: "July, 2023",
    credential: "ude.my/UC-853a90a6-91c1-40cd-9bdf-9925352d8219"
  },
  {
    name: "S.O.L.I.D Principles Every Developer Must Know",
    issuer: "Scaler",
    year: "November, 2025",
    credential: "moonshot.scaler.com/s/sl/hdalaIhlkg"
  },
];

export function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Academic{" "}
              <span className="text-gradient">Background</span>
            </h2>
          </div>

          {/* Education Cards */}
          <div className="grid gap-6 mb-16">
            {
              education?.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <div
                    key={index}
                    className={cn(
                      "group relative transition-all duration-700",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Icon */}
                        <div className="shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h3>
                            <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                              {edu.period}
                            </span>
                          </div>

                          <p className="text-primary font-medium mb-3">{edu.institution}</p>
                          <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                          {/* Achievements */}
                          <div className="flex flex-wrap gap-2">
                            {
                              edu?.highlights?.map((achievement) => (
                                <span
                                  key={achievement}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
                                >
                                  <Trophy className="w-3.5 h-3.5" />
                                  {achievement}
                                </span>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>

          {/* Certifications */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {
                certifications?.map((cert, index) => (
                  <div
                    key={cert?.name}
                    className={cn(
                      "group p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 cursor-default",
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {
                        (cert?.credential)
                          ?
                          (
                            <a href={`https://${cert?.credential}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {cert?.name}
                            </a>
                          )
                          :
                          (
                            cert?.name
                          )
                      }
                    </p>

                    <p className="text-sm text-muted-foreground">{cert?.issuer}</p>

                    <p className="text-xs text-primary mt-2 font-mono">{cert?.year}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
