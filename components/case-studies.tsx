const translations = {
  en: {
    case_studies: "Case Studies",
    success_stories: "Real results from real clients",
    case1_title: "Retail Analytics Platform",
    case1_result: "3x improvement",
    case1_desc: "Increased sales prediction accuracy",
    case2_title: "Manufacturing Automation",
    case2_result: "40% reduction",
    case2_desc: "In production downtime",
    case3_title: "Financial Risk Assessment",
    case3_result: "95% accuracy",
    case3_desc: "In fraud detection",
  },
  ar: {
    case_studies: "دراسات الحالة",
    success_stories: "نتائج حقيقية من عملاء حقيقيين",
    case1_title: "منصة تحليلات البيع بالتجزئة",
    case1_result: "تحسن 3x",
    case1_desc: "زيادة دقة التنبؤ بالمبيعات",
    case2_title: "أتمتة التصنيع",
    case2_result: "تقليل بنسبة 40%",
    case2_desc: "في فترات توقف الإنتاج",
    case3_title: "تقييم المخاطر المالية",
    case3_result: "دقة 95%",
    case3_desc: "في كشف الاحتيال",
  },
}

export default function CaseStudies({ language }: { language: "en" | "ar" }) {
  const t = translations[language]

  const cases = [
    { title: t.case1_title, result: t.case1_result, desc: t.case1_desc },
    { title: t.case2_title, result: t.case2_result, desc: t.case2_desc },
    { title: t.case3_title, result: t.case3_result, desc: t.case3_desc },
  ]

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.case_studies}</h2>
          <p className="text-lg text-muted-foreground">{t.success_stories}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="p-8 bg-gradient-to-br from-card to-background border border-border rounded-xl hover:border-accent/50 transition-all group cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {caseStudy.title}
              </h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-accent mb-2">{caseStudy.result}</p>
                <p className="text-muted-foreground">{caseStudy.desc}</p>
              </div>
              <a href="#" className="text-emerald-500 text-sm font-medium group-hover:underline">
                {language === "en" ? "Read Full Case Study →" : "اقرأ دراسة الحالة الكاملة →"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
