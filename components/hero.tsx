import { Github, Icon } from "lucide-react"

const translations = {
  en: {
    tagline: "Next-Generation AI Solutions",
    title: "Transform Your Business with Custom AI Models",
    description:
      "We specialize in building custom AI models using your unique data and insights. From scenario generation and process flow design to advanced automation, we deliver AI solutions that fit your specific goals.",
    start_project: "Start Your Project",
    watch_demo: "Watch Demo",
    trusted_by: "Trusted by leading global organizations",
  },
  ar: {
    tagline: "حلول الذكاء الاصطناعي من الجيل التالي",
    title: "حول عملك باستخدام نماذج الذكاء الاصطناعي المخصصة",
    description:
      "نحن متخصصون في بناء نماذج ذكاء اصطناعي مخصصة باستخدام بيانات ورؤاك الفريدة. من توليد السيناريوهات وتصميم تدفقات العمليات إلى الأتمتة المتقدمة، نقدم حلول ذكاء اصطناعي تناسب أهدافك المحددة.",
    start_project: "ابدأ مشروعك",
    watch_demo: "مشاهدة العرض التوضيحي",
    trusted_by: "موثوق به من قبل الشركات العالمية الرائدة",
  },
}
const trustedBy=[
  {id:1,icon:Github}
]
export default function Hero({ language }: { language: "en" | "ar" }) {
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-emerald-500 text-sm  uppercase inline-block px-4 py-2 bg-emerald-500/10 rounded-full">
            {t.tagline}
          </p>
        </div>

        <h1
          className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-balance text-center ${isRTL ? "text-center" : ""}`}
        >
          <span className="gradient-text">{t.title}</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-foreground/80 mb-10 leading-relaxed text-balance max-w-3xl mx-auto font-light ${isRTL ? "text-right mx-auto" : ""}`}
        >
          {t.description}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-gray-300 text-emerald-900  rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 group">
            {t.start_project}
          </button>
          <button className="px-8 py-3 border-2 border-emerald-500/30 text-foreground rounded-full font-semibold hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300">
            {t.watch_demo}
          </button>
        </div>

        <div className="mt-20 pt-16 border-t border-border/30">
          <p className="text-foreground/60 text-sm mb-10 font-medium">{t.trusted_by}</p>
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {trustedBy.map((item) => (
              <div key={item.id} className="h-10 bg-gradient-to-r from-emerald-500/20 to-accent-400/20 rounded-lg w-10 shimmer flex justify-center items-center"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
