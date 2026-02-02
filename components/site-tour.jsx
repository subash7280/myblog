"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { X, ChevronRight, ChevronLeft, Sparkles, MousePointer, ArrowDown, Menu } from "lucide-react"

const tourSteps = [
  {
    id: "welcome",
    title: "Welcome to My Portfolio!",
    description: "Let me give you a quick tour of the site. This will only take a moment.",
    icon: Sparkles,
    target: null,
    position: "center"
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Use the navigation bar to jump to any section. On mobile, tap the menu icon to see all options.",
    icon: Menu,
    target: "header",
    position: "bottom"
  },
  {
    id: "scroll",
    title: "Scroll to Explore",
    description: "Scroll down to discover my about section, experience, projects, skills, and contact information.",
    icon: ArrowDown,
    target: null,
    position: "center"
  },
  {
    id: "interact",
    title: "Interactive Elements",
    description: "Hover over cards and buttons to see animations. Click on experience cards to expand details.",
    icon: MousePointer,
    target: null,
    position: "center"
  },
]

export function SiteTour() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hasSeenTour, setHasSeenTour] = useState(true)

  useEffect(() => {
    const seen = localStorage.getItem("portfolio-tour-seen")
    if (!seen && false) {
      setHasSeenTour(false)
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const closeTour = useCallback(() => {
    setIsOpen(false)
    localStorage.setItem("portfolio-tour-seen", "true")
    setHasSeenTour(true)
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      closeTour()
    }
  }, [currentStep, closeTour])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const restartTour = useCallback(() => {
    setCurrentStep(0)
    setIsOpen(true)
  }, [])

  if (hasSeenTour && !isOpen) {
    return (
      <button
        onClick={restartTour}
        className="fixed bottom-6 left-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
        aria-label="Start site tour"
      >
        <Sparkles className="w-5 h-5" />
        <span className="absolute left-full ml-3 px-3 py-1.5 text-sm font-medium bg-card text-foreground rounded-lg border border-border opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 shadow-lg">
          Take a Tour
        </span>
      </button>
    )
  }

  if (!isOpen) return null

  const step = tourSteps[currentStep]
  const Icon = step.icon

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closeTour}
      />

      {/* Tour Modal */}
      <div className={cn(
        "fixed z-[101] w-[90vw] max-w-md animate-in zoom-in-95 fade-in duration-300",
        step.position === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        step.position === "bottom" && "top-24 left-1/2 -translate-x-1/2"
      )}>
        <div className="bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative p-6 pb-4 border-b border-border bg-primary/10">
            <button
              onClick={closeTour}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              aria-label="Close tour"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground">
                  Step {currentStep + 1} of {tourSteps.length}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {step.description}
            </p>

            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {tourSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentStep 
                      ? "w-6 bg-primary" 
                      : index < currentStep 
                        ? "bg-primary/50" 
                        : "bg-border"
                  )}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  currentStep === 0 
                    ? "text-muted-foreground/50 cursor-not-allowed" 
                    : "text-foreground hover:bg-secondary"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={closeTour}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skip Tour
                </button>
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300"
                >
                  {currentStep === tourSteps.length - 1 ? "Get Started" : "Next"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pointer Arrow for targeted steps */}
        {step.position === "bottom" && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-card border-l border-t border-border rotate-45" />
        )}
      </div>
    </>
  )
}
