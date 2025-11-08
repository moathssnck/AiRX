const translations = {
  en: {
    testimonials: "Client Testimonials",
    clients_trust: "Hear from companies that transformed their operations with our AI solutions",
    name1: "Sarah Johnson",
    title1: "CTO, TechCorp",
    quote1:
      "The custom AI solution transformed our operations. We saw immediate improvements in efficiency and accuracy.",
    name2: "Michael Chen",
    title2: "CEO, DataFlow Inc",
    quote2:
      "Their expertise in AI model development is unmatched. The team delivered on time and exceeded expectations.",
    name3: "Emma Williams",
    title3: "Director, FinTech Solutions",
    quote3: "Outstanding support and continuous optimization. Best investment we made for our business.",
  },
  ar: {
    testimonials: "شهادات العملاء",
    clients_trust: "اسمع من الشركات التي حولت عملياتها بحلول الذكاء الاصطناعي لدينا",
    name1: "سارة جونسون",
    title1: "مدير التكنولوجيا، TechCorp",
    quote1: "لقد حول حل الذكاء الاصطناعي المخصص عملياتنا. شهدنا تحسينات فورية في الكفاءة والدقة.",
    name2: "مايكل تشن",
    title2: "الرئيس التنفيذي، DataFlow Inc",
    quote2: "خبرتهم في تطوير نماذج الذكاء الاصطناعي لا تُضاهى. سلمت الفريق في الوقت المحدد وتجاوزت التوقعات.",
    name3: "إيما ويليامز",
    title3: "مديرة، حلول FinTech",
    quote3: "دعم متميز وتحسين مستمر. أفضل استثمار قمنا به لعملنا.",
  },
}

export default function Testimonials({ language }: { language: "en" | "ar" }) {
  const t = translations[language]
  const isRTL = language === "ar"

  const testimonials = [
    { name: t.name1, title: t.title1, quote: t.quote1 },
    { name: t.name2, title: t.title2, quote: t.quote2 },
    { name: t.name3, title: t.title3, quote: t.quote3 },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">{t.testimonials}</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">{t.clients_trust}</p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-background border border-border/30 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className={`text-foreground text-lg mb-6 leading-relaxed font-light ${isRTL ? "text-right" : ""}`}>
                "{testimonial.quote}"
              </p>
              <div className={isRTL ? "text-right" : ""}>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
