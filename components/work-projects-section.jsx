"use client"

import { Drawer } from "vaul";
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  Rocket,
  Calendar,
  MapPin,
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  TrendingUp
} from "lucide-react"

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "SPAN Technology Services Private Limited",
    companyUrl: "https://spantechnologyservices.com/",
    location: "Coimbatore, India",
    period: "January 2024 - Present",
    description:
      "Worked on fintech platforms using Next.js and Node.js, building onboarding flows, REST APIs, and role-based access systems while integrating Kafka, Redis, and third-party financial APIs.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "JWT",
      "REST APIs",
      "AWS",
    ],
    color: "#f97316",
    isCurrent: true,
  },
  {
    title: "Junior Software Engineer Trainee",
    company: "SPAN Technology Services Private Limited",
    companyUrl: "https://spantechnologyservices.com/",
    location: "Coimbatore, India",
    period: "June 2023 - December 2023",
    description:
      "Built SSR pages with Next.js, developed reusable frontend components, and optimized backend queries to improve SEO visibility and API response times.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "JavaScript"],
    color: "#3b82f6",
    isCurrent: false,
  },
];

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Personal portfolio built with React and Node.js featuring project showcases and EmailJS-based contact handling.",
    technologies: ["React.js", "Node.js", "EmailJS"],
    github: "https://github.com/subash7280/myblog",
    live: "https://subash-portfolio-v01.vercel.app",
    featured: true,
  },
  {
    title: "Node-Talk (Real-Time Chat App)",
    description:
      "Real-time chat application built using WebSockets with MongoDB-backed APIs for user management and message persistence.",
    technologies: ["React.js", "Node.js", "MongoDB", "WebSockets"],
    github: "#",
    live: "https://node-talk-1rhb.onrender.com",
    featured: true,
  },
  {
    title: "Redux vs Zustand",
    description:
      "Comparison project demonstrating state management differences between Redux and Zustand using identical Todo applications.",
    technologies: ["React.js", "Redux", "Zustand"],
    github: "https://github.com/subash7280/REDUX-vs-ZUSTAND",
    live: "https://redux-vs-zustand.vercel.app",
    featured: false,
  },
  {
    title: "is-weekend-today (NPM Package)",
    description:
      "JavaScript utility package that checks whether a given date falls on a weekend.",
    technologies: ["JavaScript", "NPM"],
    github: "https://github.com/subash7280/is-weekend-today",
    live: "https://www.npmjs.com/package/is-weekend-today",
    featured: false,
  },
  {
    title: "smart-array-difference (NPM Package)",
    description:
      "JavaScript utility for detecting added, removed, and modified elements between two arrays.",
    technologies: ["JavaScript", "NPM"],
    github: "https://github.com/subash7280/smart-array-difference",
    live: "https://www.npmjs.com/package/smart-array-difference",
    featured: false,
  },
];

export function WorkProjectsSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("experience")
  const [hoveredExp, setHoveredExp] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [openProjects, setOpenProjects] = useState(false);
  const [mounted, setMounted] = useState(false);

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


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Experience & Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Where I{"'"}ve <span className="text-gradient">Worked</span> & Built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the projects that define my craft
            </p>
          </div>

          {/* Mobile Tab Switcher */}
          <div className={cn(
            "flex lg:hidden justify-center mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="inline-flex p-1.5 bg-secondary rounded-full">
              <button
                onClick={() => setActiveTab("experience")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                  activeTab === "experience"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Briefcase className="w-4 h-4" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                  activeTab === "projects"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Rocket className="w-4 h-4" />
                Projects
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Work Experience Column */}
            <div
              id="projects"
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
                activeTab !== "experience" && "hidden lg:block"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Work Experience</h3>
                  <p className="text-sm text-muted-foreground">{experiences.length} positions</p>
                </div>
              </div>

              {/* Experience Cards */}
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group relative transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                    onMouseEnter={() => setHoveredExp(index)}
                    onMouseLeave={() => setHoveredExp(null)}
                  >
                    {/* Card */}
                    <div className={cn(
                      "relative p-5 bg-card rounded-2xl border transition-all duration-500",
                      hoveredExp === index
                        ? "border-primary/50 shadow-xl shadow-primary/10 -translate-y-1"
                        : "border-border hover:border-primary/30"
                    )}>
                      {/* Accent line */}
                      <div
                        className={cn(
                          "absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300",
                          hoveredExp === index ? "opacity-100" : "opacity-50"
                        )}
                        style={{ backgroundColor: exp.color }}
                      />

                      <div className="pl-4">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                {exp.title}
                              </h4>
                              {exp.isCurrent && (
                                <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                  Current
                                </span>
                              )}
                            </div>
                            <a
                              href={exp?.companyUrl}
                              target="_blank"
                              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                            >
                              {exp.company}
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                          <TrendingUp className={cn(
                            "w-5 h-5 transition-all duration-300",
                            hoveredExp === index ? "text-primary rotate-12" : "text-muted-foreground/30"
                          )} />
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Column */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
              activeTab !== "projects" && "hidden lg:block"
            )}
              style={{ transitionDelay: "300ms" }}
            >
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Featured Projects</h3>
                  <p className="text-sm text-muted-foreground">{projects?.length} projects</p>
                </div>
              </div>

              {/* Project Cards */}
              <div className="space-y-4">
                {
                  projects
                    ?.slice(0, 3)
                    ?.map((project, index) => (
                      <div
                        key={index}
                        className={cn(
                          "group relative transition-all duration-500",
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className={cn(
                          "relative p-5 bg-card rounded-2xl border transition-all duration-500",
                          hoveredProject === index
                            ? "border-primary/50 shadow-xl shadow-primary/10 -translate-y-1"
                            : "border-border hover:border-primary/30"
                        )}>
                          {/* Featured Badge */}
                          {project?.featured && (
                            <div className="absolute -top-2 -right-2">
                              <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full shadow-lg">
                                <Sparkles className="w-3 h-3" />
                                Featured
                              </span>
                            </div>
                          )}

                          {/* Project Number */}
                          <div className={cn(
                            "absolute top-4 right-4 text-5xl font-black transition-all duration-300",
                            hoveredProject === index
                              ? "text-primary/20"
                              : "text-muted/30"
                          )}>
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          {/* Content */}
                          <div className="relative">
                            <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {project?.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 pr-12">
                              {project?.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project?.technologies?.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                              <a
                                href={project?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Github className="w-4 h-4" />
                                Code
                              </a>
                              <a
                                href={project?.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                }
              </div>

              {projects?.length > 3 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setOpenProjects(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-full border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    View All Projects
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {
        (mounted) &&
        (
          <>
            <Drawer.Root open={openProjects} onOpenChange={setOpenProjects}>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />

                <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-3xl bg-background border-t max-h-[85vh] flex flex-col">
                  <div className="mx-auto mt-6 mb-4 h-1.5 w-12 rounded-full bg-muted" />
                  <Drawer.Title className="text-xl font-bold mb-4 px-6">
                    All Projects
                  </Drawer.Title>

                  {/* Scrollable container */}
                  <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-6">
                    {/* {projects.map((project, index) => (
                      <div key={index} className="p-4 border rounded-xl bg-card">
                        <h4 className="font-semibold mb-1">{project.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-0.5 text-xs bg-secondary rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 text-sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                        </div>
                      </div>
                    ))} */}

                    {
                      projects
                        ?.map((project, index) => (
                          <div
                            key={index}
                            className={cn(
                              "group relative transition-all duration-500",
                              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: `${400 + index * 100}ms` }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            <div className={cn(
                              "relative p-5 bg-card rounded-2xl border transition-all duration-500",
                              hoveredProject === index
                                ? "border-primary/50 shadow-xl shadow-primary/10 -translate-y-1"
                                : "border-border hover:border-primary/30"
                            )}>
                              {/* Featured Badge */}
                              {project?.featured && (
                                <div className="absolute -top-2 -right-2">
                                  <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full shadow-lg">
                                    <Sparkles className="w-3 h-3" />
                                    Featured
                                  </span>
                                </div>
                              )}

                              {/* Project Number */}
                              <div className={cn(
                                "absolute top-4 right-4 text-5xl font-black transition-all duration-300",
                                hoveredProject === index
                                  ? "text-primary/20"
                                  : "text-muted/30"
                              )}>
                                {String(index + 1).padStart(2, '0')}
                              </div>

                              {/* Content */}
                              <div className="relative">
                                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {project?.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4 pr-12">
                                  {project?.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project?.technologies?.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 rounded-md"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                  <a
                                    href={project?.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    <Github className="w-4 h-4" />
                                    Code
                                  </a>
                                  <a
                                    href={project?.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                    }
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </>
        )
      }
    </section>
  );
};