"use client"

import { useEffect, useRef } from "react"
import { Smartphone, Volume2, Sparkles, Sun } from "lucide-react"

const experiences = [
  {
    icon: Smartphone,
    title: "Step-by-Step (No PhD Required)",
    description:
      "Large, actually-readable instructions that guide you through each step. No more squinting at tiny text.",
  },
  {
    icon: Volume2,
    title: "Hands-Free Voice Magic",
    description:
      "Listen to each step while your hands stay busy. It's like having Gordon Ramsay in your pocket (minus the yelling).",
  },
  {
    icon: Sparkles,
    title: "Your New Best Friend",
    description:
      "A friendly animated chef who cheers you on, celebrates your wins, and never judges your knife skills.",
  },
  {
    icon: Sun,
    title: "Brightness Go Brrr",
    description:
      "Screen stays extra bright so you can see it from across the kitchen. No more accidental screen timeouts mid-stir.",
  },
]

export function CookingExperience() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background opacity-0 transition-all duration-1000 [&.animate-in]:opacity-100"
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 bg-card hover:shadow-primary/30 transition-shadow duration-500 hover:scale-105 transition-transform">
              <img
                src="/mobile-phone-showing-cooking-app-with-animated-che.png"
                alt="Cooking Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-balance">
                It's Like Having a Friend Who Actually Knows How to Cook
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                When you're ready to cook, InstaDish becomes your hype person, guide, and kitchen timer all rolled into
                one adorable animated chef.
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
