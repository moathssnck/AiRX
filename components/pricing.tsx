const translations = {
  en: {
    pricing: "Pricing Plans",
    flexible_pricing: "Flexible pricing for every business size",
    starter: "Starter",
    starter_desc: "Perfect for small projects",
    starter_price: "$5K",
    starter_feature1: "Up to 1M data points",
    starter_feature2: "Model training & testing",
    starter_feature3: "Basic support",
    professional: "Professional",
    professional_desc: "For growing teams",
    professional_price: "$15K",
    professional_feature1: "Up to 10M data points",
    professional_feature2: "Advanced model optimization",
    professional_feature3: "Priority support",
    professional_feature4: "Custom integrations",
    enterprise: "Enterprise",
    enterprise_desc: "Custom solutions",
    enterprise_price: "Custom",
    enterprise_feature1: "Unlimited data points",
    enterprise_feature2: "Dedicated team",
    enterprise_feature3: "24/7 support",
    enterprise_feature4: "SLA guarantees",
    choose_plan: "Choose Plan",
  },
  ar: {
    pricing: "خطط التسعير",
    flexible_pricing: "تسعير مرن لكل حجم عمل",
    starter: "البدء",
    starter_desc: "مثالي للمشاريع الصغيرة",
    starter_price: "$5K",
    starter_feature1: "ما يصل إلى 1M نقطة بيانات",
    starter_feature2: "تدريب واختبار النموذج",
    starter_feature3: "الدعم الأساسي",
    professional: "احترافي",
    professional_desc: "للفريق المتنامي",
    professional_price: "$15K",
    professional_feature1: "ما يصل إلى 10M نقطة بيانات",
    professional_feature2: "تحسين نموذج متقدم",
    professional_feature3: "دعم أولوية",
    professional_feature4: "تكاملات مخصصة",
    enterprise: "المؤسسات",
    enterprise_desc: "حلول مخصصة",
    enterprise_price: "مخصص",
    enterprise_feature1: "نقاط بيانات غير محدودة",
    enterprise_feature2: "فريق مخصص",
    enterprise_feature3: "دعم 24/7",
    enterprise_feature4: "ضمانات SLA",
    choose_plan: "اختر خطة",
  },
}

export default function Pricing({ language }: { language: "en" | "ar" }) {
  const t = translations[language]

  const plans = [
    {
      name: t.starter,
      desc: t.starter_desc,
      price: t.starter_price,
      features: [t.starter_feature1, t.starter_feature2, t.starter_feature3],
      popular: false,
    },
    {
      name: t.professional,
      desc: t.professional_desc,
      price: t.professional_price,
      features: [t.professional_feature1, t.professional_feature2, t.professional_feature3, t.professional_feature4],
      popular: true,
    },
    {
      name: t.enterprise,
      desc: t.enterprise_desc,
      price: t.enterprise_price,
      features: [t.enterprise_feature1, t.enterprise_feature2, t.enterprise_feature3, t.enterprise_feature4],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.pricing}</h2>
          <p className="text-lg text-muted-foreground">{t.flexible_pricing}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border transition-all ${
                plan.popular
                  ? "border-accent bg-background shadow-lg shadow-accent/20 transform scale-105"
                  : "border-border bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 bg-teal-600/50 text-white text-xs  rounded-full">
                  {language === "en" ? "Most Popular" : "الأكثر شهرة"}
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== t.enterprise_price && <span className="text-muted-foreground text-sm">/project</span>}
              </div>
              <button
                className={`w-full py-2 rounded-full font-medium mb-8 transition-all ${
                  plan.popular
                    ? "bg-teal-600 text-white hover:opacity-90"
                    : "bg-card border border-border text-foreground hover:border-teal-500"
                }`}
              >
                {t.choose_plan}
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="text-teal-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
