import { Zap, Workflow, Cpu, BarChart3 } from "lucide-react"

const translations = {
  en: {
    our_services: "Our Services",
    description: "Comprehensive AI solutions tailored to your unique business needs and objectives.",
    scenarios: "Scenario Generation",
    scenarios_desc:
      "Generate realistic scenarios and synthetic data to train and validate your AI models with precision.",
    process: "Process Flow Design",
    process_desc: "Design complex workflows and business processes optimized with intelligent automation.",
    automation: "Advanced Automation",
    automation_desc: "Implement cutting-edge automation solutions that streamline your operations at scale.",
    analytics: "Performance Analytics",
    analytics_desc: "Monitor, measure, and optimize your AI models with comprehensive analytics and insights.",
  },
  ar: {
    our_services: "خدماتنا",
    description: "حلول ذكاء اصطناعي شاملة مخصصة لاحتياجات عملك الفريدة.",
    scenarios: "توليد السيناريوهات",
    scenarios_desc: "توليد سيناريوهات واقعية وبيانات اصطناعية لتدريب والتحقق من صحة نماذج الذكاء الاصطناعي بدقة.",
    process: "تصميم تدفق العملية",
    process_desc: "تصميم سير العمل المعقدة وعمليات الأعمال المحسنة بالأتمتة الذكية.",
    automation: "الأتمتة المتقدمة",
    automation_desc: "تطبيق حلول أتمتة متطورة تبسط عملياتك على نطاق واسع.",
    analytics: "تحليل الأداء",
    analytics_desc: "مراقبة وقياس وتحسين نماذج الذكاء الاصطناعي الخاصة بك باستخدام التحليلات الشاملة.",
  },
}

const services = [
  { icon: Zap, key: "scenarios" },
  { icon: Workflow, key: "process" },
  { icon: Cpu, key: "automation" },
  { icon: BarChart3, key: "analytics" },
]

export default function Services({ language }: { language: "en" | "ar" }) {
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">{t.our_services}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 bg-card border border-border/30 rounded-2xl hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer"
            >
              <div className="mb-6 inline-block p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className={`text-xl font-bold text-foreground mb-3 ${isRTL ? "text-right" : ""}`}>
                {t[service.key as keyof typeof t]}
              </h3>
              <p className={`text-foreground/70 text-sm leading-relaxed ${isRTL ? "text-right" : ""}`}>
                {t[`${service.key}_desc` as keyof typeof t]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
