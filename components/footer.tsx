const translations = {
  en: {
    company: "Company",
    about: "About Us",
    blog: "Blog",
    careers: "Careers",
    solutions: "Solutions",
    custom_models: "Custom Models",
    automation: "Automation",
    analytics: "Analytics",
    resources: "Resources",
    documentation: "Documentation",
    support: "Support",
    contact: "Contact",
    connect: "Connect",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    github: "GitHub",
    copyright: "© 2025 AI Model Solutions. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
  },
  ar: {
    company: "الشركة",
    about: "من نحن",
    blog: "مدونة",
    careers: "الوظائف",
    solutions: "الحلول",
    custom_models: "النماذج المخصصة",
    automation: "الأتمتة",
    analytics: "التحليلات",
    resources: "الموارد",
    documentation: "التوثيق",
    support: "الدعم",
    contact: "اتصل",
    connect: "تواصل",
    twitter: "تويتر",
    linkedin: "لينكدإن",
    github: "جيت هب",
    copyright: "© 2025 حلول نماذج الذكاء الاصطناعي. جميع الحقوق محفوظة.",
    privacy: "الخصوصية",
    terms: "الشروط",
  },
}

export default function Footer({ language }: { language: "en" | "ar" }) {
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <footer className="bg-card/50 border-t border-border/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-4 gap-12 mb-12 ${isRTL ? "text-right" : ""}`}>
          <div>
            <h4 className="font-bold text-foreground mb-6">{t.company}</h4>
            <ul className="space-y-3">
              {[t.about, t.blog, t.careers].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-foreground/60 hover:text-emerald-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">{t.solutions}</h4>
            <ul className="space-y-3">
              {[t.custom_models, t.automation, t.analytics].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-foreground/60 hover:text-emerald-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">{t.resources}</h4>
            <ul className="space-y-3">
              {[t.documentation, t.support, t.contact].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-foreground/60 hover:text-emerald-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">{t.connect}</h4>
            <ul className="space-y-3">
              {[t.twitter, t.linkedin, t.github].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-foreground/60 hover:text-emerald-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}
        >
          <p className="text-foreground/60 text-sm">{t.copyright}</p>
          <div className={`flex gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            <a href="#" className="text-foreground/60 hover:text-emerald-500 text-sm transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="text-foreground/60 hover:text-emerald-500 text-sm transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
