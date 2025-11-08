"use client"

import { useState } from "react"
import { Menu, X, Globe, ArrowRight } from "lucide-react"

const translations = {
  en: {
    services: "Services",
    why_us: "Why Us",
    contact: "Contact",
    get_started: "Get Started",
    process: "Process",
    testimonials: "Testimonials",
    case_studies: "Case Studies",
    pricing: "Pricing",
  },
  ar: {
    services: "الخدمات",
    why_us: "لماذا نحن",
    contact: "اتصل بنا",
    get_started: "ابدأ الآن",
    process: "العملية",
    testimonials: "الشهادات",
    case_studies: "دراسات الحالة",
    pricing: "التسعير",
  },
}

export default function Header({
  language,
  setLanguage,
}: { language: "en" | "ar"; setLanguage: (lang: "en" | "ar") => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/30 z-50">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <div className="text-2xl font-bold gradient-text">AiRX </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          <a href="#services" className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm font-medium">
            {t.services}
          </a>
          <a href="#process" className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm font-medium">
            {t.process}
          </a>
          <a href="#benefits" className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm font-medium">
            {t.why_us}
          </a>
          <a
            href="#testimonials"
            className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm font-medium"
          >
            {t.testimonials}
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm font-medium">
            {t.contact}
          </a>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 hover:bg-card/50 hover:border-emerald-500/30 transition-all"
          >
            <Globe size={16} />
            <span className="text-sm font-medium">{language === "en" ? "العربية" : "EN"}</span>
          </button>

          <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-otange-500 text-emerald-500-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2">
            {t.get_started}
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className={`md:hidden flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-2 px-2 py-1 rounded-full border border-border/30"
          >
            <Globe size={16} />
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border md:hidden">
            <div className={`flex flex-col gap-4 p-4 ${isRTL ? "text-right" : ""}`}>
              <a href="#services" className="text-foreground hover:text-emerald-500 text-sm font-medium">
                {t.services}
              </a>
              <a href="#process" className="text-foreground hover:text-emerald-500 text-sm font-medium">
                {t.process}
              </a>
              <a href="#benefits" className="text-foreground hover:text-emerald-500 text-sm font-medium">
                {t.why_us}
              </a>
              <a href="#testimonials" className="text-foreground hover:text-emerald-500 text-sm font-medium">
                {t.testimonials}
              </a>
              <a href="#contact" className="text-foreground hover:text-emerald-500 text-sm font-medium">
                {t.contact}
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-otange-500 text-emerald-500-foreground rounded-full font-medium w-full text-sm">
                {t.get_started}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
