"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { Sparkles } from "lucide-react"

export function ComingSoon() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground opacity-0 transition-all duration-1000 [&.animate-in]:opacity-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles
          className="absolute top-20 left-10 w-6 h-6 animate-pulse opacity-30"
          style={{ animationDelay: "0s" }}
        />
        <Sparkles
          className="absolute top-40 right-20 w-8 h-8 animate-pulse opacity-30"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute bottom-32 left-1/4 w-7 h-7 animate-pulse opacity-30"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute bottom-20 right-1/3 w-5 h-5 animate-pulse opacity-30"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-balance">
              We're Cooking Up Something Special
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Join the waitlist and be the first to ditch recipe chaos. Plus, you'll get early access before everyone
              else starts bragging about their new cooking app.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card text-foreground border-2 border-primary-foreground/20 focus:border-primary-foreground/40 h-12 placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="h-12 px-8 whitespace-nowrap bg-card hover:bg-card/90 text-foreground font-semibold"
            >
              Count Me In!
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/70">
            Zero spam. Zero BS. Just one email when we launch (and maybe a meme or two).
          </p>
        </div>
      </div>
    </section>
  )
}
