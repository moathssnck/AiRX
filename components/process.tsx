const translations = {
  en: {
    our_process: "Our Process",
    process_desc: "A proven methodology designed to deliver results",
    step1: "Discovery & Analysis",
    step1_desc: "We analyze your data, business goals, and operational challenges",
    step2: "Model Development",
    step2_desc: "Build and train custom AI models tailored to your needs",
    step3: "Integration & Testing",
    step3_desc: "Seamlessly integrate with your systems and validate performance",
    step4: "Deployment & Support",
    step4_desc: "Launch your solution and provide ongoing optimization",
  },
  ar: {
    our_process: "عمليتنا",
    process_desc: "منهجية مثبتة مصممة لتحقيق النتائج",
    step1: "الاكتشاف والتحليل",
    step1_desc: "نحلل بياناتك وأهداف عملك والتحديات التشغيلية",
    step2: "تطوير النموذج",
    step2_desc: "بناء وتدريب نماذج ذكاء اصطناعي مخصصة لاحتياجاتك",
    step3: "التكامل والاختبار",
    step3_desc: "التكامل السلس مع أنظمتك والتحقق من الأداء",
    step4: "النشر والدعم",
    step4_desc: "إطلاق حلك وتقديم التحسين المستمر",
  },
}

export default function Process({ language }: { language: "en" | "ar" }) {
  const t = translations[language]

  const steps = [
    { num: "01", title: t.step1, desc: t.step1_desc },
    { num: "02", title: t.step2, desc: t.step2_desc },
    { num: "03", title: t.step3, desc: t.step3_desc },
    { num: "04", title: t.step4, desc: t.step4_desc },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.our_process}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.process_desc}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="p-6 bg-background border border-border rounded-lg hover:border-accent/50 transition-all h-full">
                <div className="text-4xl font-bold text-accent/20 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
