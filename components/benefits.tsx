export default function Benefits({ language }: { language: "en" | "ar" }) {
  const translations = {
    en: {
      faster: "10x",
      faster_label: "Faster deployment with custom models",
      accuracy: "99%",
      accuracy_label: "Accuracy in specialized AI tasks",
      cost: "50%",
      cost_label: "Cost reduction vs generic solutions",
      support: "24/7",
      support_label: "Dedicated support and monitoring",
      why_choose: "Why Choose Custom AI?",
      feature1: "Models trained on your proprietary data",
      feature2: "Seamless integration with existing systems",
      feature3: "Continuous learning and improvement",
      feature4: "Complete transparency and control",
      feature5: "Scalable architecture for growth",
    },
    ar: {
      faster: "10x",
      faster_label: "نشر أسرع مع النماذج المخصصة",
      accuracy: "99%",
      accuracy_label: "الدقة في مهام الذكاء الاصطناعي المتخصصة",
      cost: "50%",
      cost_label: "تقليل التكاليف مقابل الحلول العامة",
      support: "24/7",
      support_label: "دعم مخصص ومراقبة مستمرة",
      why_choose: "لماذا تختار الذكاء الاصطناعي المخصص؟",
      feature1: "نماذج مدربة على بيانات ملكيتك",
      feature2: "تكامل سلس مع الأنظمة الموجودة",
      feature3: "التعلم المستمر والتحسين",
      feature4: "شفافية كاملة والتحكم",
      feature5: "معمارية قابلة للتوسع للنمو",
    },
  }

  const t = translations[language]

  const benefits = [
    { metric: t.faster, label: t.faster_label },
    { metric: t.accuracy, label: t.accuracy_label },
    { metric: t.cost, label: t.cost_label },
    { metric: t.support, label: t.support_label },
  ]

  const features = [t.feature1, t.feature2, t.feature3, t.feature4, t.feature5]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg bg-card/50 border border-border/50">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{benefit.metric}</div>
              <p className="text-muted-foreground text-sm">{benefit.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">{t.why_choose}</h3>
            <ul className="space-y-4">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-emerald-500/20 rounded-xl h-96 flex items-center justify-center border border-accent/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <p className="text-muted-foreground">
                {language === "en" ? "Advanced AI Model" : "نموذج ذكاء اصطناعي متقدم"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
