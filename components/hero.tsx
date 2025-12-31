"use client"

import { Button } from "@/components/ui/button"
import { ChefHat, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            setTimeout(() => setIsFloating(true), 500)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/50 opacity-0 transition-all duration-1000 [&.animate-in]:opacity-100"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles
          className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/20 animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <Sparkles
          className="absolute top-1/3 right-1/4 w-6 h-6 text-accent/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute bottom-1/4 left-1/3 w-7 h-7 text-secondary/20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center space-y-12 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border-2 border-primary/30 text-primary text-sm font-medium animate-bounce-slow">
            <ChefHat className={`w-4 h-4 transition-transform duration-700 ${isFloating ? "animate-bounce" : ""}`} />
            <span>Coming Soon (We Promise!)</span>
          </div>

          {/* Title and Phone Row */}
          <div className="relative w-full flex items-center justify-start">
            {/* Title - Lower z-index */}
            <div className="relative z-0 flex flex-col items-center md:items-start text-center md:text-left space-y-8 max-w-3xl md:ml-8 lg:ml-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-balance pt-12 md:pt-20">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Stop Burning Dinner.
                </span>{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Start Vibing in the Kitchen.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed px-4 md:px-0">
                Finally, a cooking app that doesn't judge you for adding extra garlic. Save recipes from anywhere, get a
                friendly AI chef buddy who actually talks to you, and stop scrolling past that step while your hands are
                covered in flour.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-base px-8 group bg-primary hover:bg-primary/90 text-primary-foreground">
                  I Want This Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-card/50 hover:bg-card border-border hover:border-primary/50"
                >
                  Show Me More
                </Button>
              </div>
            </div>

            {/* Phone Mockup - Higher z-index, overlays the title */}
            <div className={`absolute right-0 md:right-[5%] lg:right-[8%] top-0 z-20 transition-opacity duration-1000 ${isFloating ? "opacity-100" : "opacity-0"} hidden md:block`}>
              <img
                src="/modern-mobile-app-interface-showing-recipe-with-co.png"
                alt="InstaDish App"
                className="w-[280px] lg:w-[340px] xl:w-[400px] drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Mobile Phone - shown only on mobile */}
          <div className="w-full md:hidden">
            <div className="flex justify-center">
              <img
                src="/modern-mobile-app-interface-showing-recipe-with-co.png"
                alt="InstaDish App"
                className="w-[210px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
