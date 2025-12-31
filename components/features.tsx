"use client"

import { Bookmark, ShoppingCart, Mic, ChefHat } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    icon: Bookmark,
    title: "Save from Literally Anywhere",
    description:
      "Paste a link, screenshot a recipe, or just tell us what Grandma made. Our AI is basically a mind reader (but for recipes).",
  },
  {
    icon: ShoppingCart,
    title: "Forget the Forgotten Ingredient",
    description:
      "Smart shopping lists that sync everywhere. Never again will you return home without the ONE thing you needed.",
  },
  {
    icon: Mic,
    title: "Hands-Free = Life-Free",
    description: "Voice narration that reads steps to you. Because scrolling with garlic fingers is a nightmare.",
  },
  {
    icon: ChefHat,
    title: "Your Recipe Hoard",
    description: "All your favorite recipes in one place. No more searching through bookmarks from 2019.",
  },
]

export function Features() {
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

    const cards = sectionRef.current?.querySelectorAll(".feature-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-balance">
            Everything You Need (and None of What You Don't)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            InstaDish makes cooking easier, way more fun, and significantly less stressful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group p-6 rounded-xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
