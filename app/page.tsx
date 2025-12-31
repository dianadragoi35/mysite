import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CookingExperience } from "@/components/cooking-experience"
import { HowItWorks } from "@/components/how-it-works"
import { ComingSoon } from "@/components/coming-soon"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CookingExperience />
      <HowItWorks />
      <ComingSoon />
      <Footer />
    </main>
  )
}
