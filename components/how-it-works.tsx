"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Save Your Recipe",
    description:
      "Paste a link, copy text, or type it in. Our AI extracts ingredients, steps, and cooking times automatically.",
  },
  {
    number: "02",
    title: "Organize & Plan",
    description: "Add recipes to collections, create shopping lists, and plan your meals for the week.",
  },
  {
    number: "03",
    title: "Start Cooking",
    description:
      "Enter cooking mode and let your animated chef buddy guide you through each step with voice and visuals.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".step-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From saving recipes to cooking with confidence—InstaDish makes it simple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card relative opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl md:text-7xl font-serif font-bold text-primary/10 mb-4">{step.number}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
