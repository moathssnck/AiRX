"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import CaseStudies from "@/components/case-studies"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  return (
    <main className="w-full" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Process language={language} />
      <Benefits language={language} />
      <Testimonials language={language} />
      <CaseStudies language={language} />
      <Pricing language={language} />
      <CTA language={language} />
      <Footer language={language} />
    </main>
  )
}
