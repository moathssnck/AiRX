const translations = {
  en: {
    title: "Ready to Transform Your Business?",
    description:
      "Let's discuss how our custom AI solutions can address your unique challenges and unlock new opportunities for growth.",
    consultation: "Schedule Consultation",
    case_studies: "View Case Studies",
    no_card: "No credit card required. Response within 24 hours.",
  },
  ar: {
    title: "هل أنت مستعد لتحويل عملك؟",
    description:
      "دعنا نناقش كيف يمكن لحلول الذكاء الاصطناعي المخصصة الخاصة بنا معالجة التحديات الفريدة الخاصة بك وفتح فرص نمو جديدة.",
    consultation: "جدولة استشارة",
    case_studies: "عرض دراسات الحالة",
    no_card: "لا توجد بطاقة ائتمان مطلوبة. الرد خلال 24 ساعة.",
  },
}

export default function CTA({ language }: { language: "en" | "ar" }) {
  const t = translations[language]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{t.title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{t.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-accent text-emerald-500-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
            {t.consultation}
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-full font-semibold hover:bg-card transition-colors">
            {t.case_studies}
          </button>
        </div>

        <p className="text-muted-foreground text-sm mt-8">{t.no_card}</p>
      </div>
    </section>
  )
}
