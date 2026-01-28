"use client"

import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { cn } from "@/lib/utils"
import { toast } from 'react-toastify';
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"

export function ContactSection() {
  const form = useRef(null)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
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

  const validateEmail = (from_name) => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex?.test(from_name);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const { name: your_name, email: from_name, message } = formState;
    let hasError = false;

    if (!your_name && !from_name && !message) {
      hasError = true;
    }
    else {
      if (!your_name) {
        hasError = true;
      }
      else if (your_name?.length < 5) {
        hasError = true;
      }
      else if (!from_name) {
        hasError = true;
      }
      else if (!validateEmail(from_name)) {
        hasError = true;
      }
      else if (!message) {
        hasError = true;
      }
      else if (message?.length < 10) {
        hasError = true;
      };
    };

    if (!hasError) {
      try {
        const response = await emailjs.sendForm(
          'service_nfrbso7',
          'template_iibs2w9',
          form?.current,
          'aDTigHfI0x66h_Nve'
        );
        console.log('response :>> ', response);

        if (response?.status === 200) {
          e?.target?.reset();
        };
      }
      catch (error) {
        console.error("Error:", error);
      };
    };

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setIsSubmitted(false), 4000);
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "subasheswaramoorthi143", href: "mailto:subasheswaramoorthi143@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9XXXXXXXX6", href: "tel:+1234567890" },
    { icon: MapPin, label: "Location", value: "Tiruppur, India", href: "#" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {"Let's Work"}{" "}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? Feel free to reach out.
              {"I'm"} always open to discussing new opportunities and ideas.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            {
              (false) &&
              (
                <div className={cn(
                  "lg:col-span-2 space-y-6 transition-all duration-700 delay-200",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                )}>
                  {/* Quick contact cards */}
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500",
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                        style={{ transitionDelay: `${300 + index * 100}ms` }}
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    )
                  })}

                  {/* Message bubble decoration */}
                  <div className={cn(
                    "hidden lg:block mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <MessageSquare className="w-8 h-8 text-primary mb-3" />
                    <p className="text-foreground font-medium mb-1">Quick Response</p>
                    <p className="text-sm text-muted-foreground">
                      I typically respond within 24 hours. Looking forward to hearing from you!
                    </p>
                  </div>
                </div>
              )
            }

            {/* Contact Form */}
            {/* <div className={cn(
              "lg:col-span-5 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}> */}

            <div className={cn(
              "lg:col-span-3 lg:col-start-2 order-1 lg:order-2 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>

              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                ref={form}
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none",
                        focusedField === "name" || formState?.name
                          ? "-top-2.5 text-xs text-primary bg-card px-1"
                          : "top-3.5 text-muted-foreground"
                      )}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState?.name}
                      onChange={(e) => setFormState({ ...formState, name: e?.target?.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none",
                        focusedField === "email" || formState?.email
                          ? "-top-2.5 text-xs text-primary bg-card px-1"
                          : "top-3.5 text-muted-foreground"
                      )}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState?.email}
                      onChange={(e) => setFormState({ ...formState, email: e?.target?.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative mb-5">
                  <label
                    htmlFor="subject"
                    className={cn(
                      "absolute left-4 transition-all duration-300 pointer-events-none",
                      focusedField === "subject" || formState?.subject
                        ? "-top-2.5 text-xs text-primary bg-card px-1"
                        : "top-3.5 text-muted-foreground"
                    )}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState?.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e?.target?.value })}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  />
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <label
                    htmlFor="message"
                    className={cn(
                      "absolute left-4 transition-all duration-300 pointer-events-none",
                      focusedField === "message" || formState?.message
                        ? "-top-2.5 text-xs text-primary bg-card px-1"
                        : "top-3.5 text-muted-foreground"
                    )}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState?.message}
                    onChange={(e) => setFormState({ ...formState, message: e?.target?.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "group w-full flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-500",
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Message bubble decoration */}
              <div className={cn(
                "hidden lg:block mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
                style={{ transitionDelay: "600ms" }}
              >
                <MessageSquare className="w-8 h-8 text-primary mb-3" />
                <p className="text-foreground font-medium mb-1">Quick Response</p>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};