import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Director, RS Exports Pvt. Ltd.",
    initials: "RS",
    rating: 5,
    text: "TaxSafar handled our company incorporation and GST registration in under a week. The dedicated CA was always reachable and guided us clearly through every step. Absolutely world-class service.",
    color: "bg-blue-100 text-blue-600",
    accent: "border-blue-200",
  },
  {
    name: "Priya Mehta",
    role: "Freelance Consultant, Mumbai",
    initials: "PM",
    rating: 5,
    text: "Filing my ITR used to be a nightmare. With TaxSafar it took just 2 days — they took care of everything and even flagged deductions I had missed. Worth every rupee.",
    color: "bg-rose-100 text-rose-600",
    accent: "border-rose-200",
  },
  {
    name: "Aniket Joshi",
    role: "Founder, CloudByte Technologies",
    initials: "AJ",
    rating: 5,
    text: "Received a GST notice and was completely stressed. TaxSafar's team drafted and filed the reply within 48 hours. The notice was resolved without any penalty. Truly remarkable.",
    color: "bg-teal-100 text-teal-600",
    accent: "border-teal-200",
  },
  {
    name: "Sunita Agarwal",
    role: "Owner, SA Enterprises",
    initials: "SA",
    rating: 5,
    text: "Their virtual accounting service transformed our bookkeeping. Monthly reconciliation reports are always on time and their cloud system is very easy to use for a non-finance person like me.",
    color: "bg-purple-100 text-purple-600",
    accent: "border-purple-200",
  },
  {
    name: "Deepak Verma",
    role: "Startup Founder, Jaipur",
    initials: "DV",
    rating: 5,
    text: "Got help with trademark registration and investor pitch deck compliance. The consultancy team knows startups well and the pricing was fully transparent with zero surprises.",
    color: "bg-amber-100 text-amber-600",
    accent: "border-amber-200",
  },
  {
    name: "Meena Pillai",
    role: "Doctor, Private Practice",
    initials: "MP",
    rating: 5,
    text: "Professional tax and advance tax handling done brilliantly. They also helped me plan investments to reduce my tax liability significantly this year. Highly recommended!",
    color: "bg-green-100 text-green-600",
    accent: "border-green-200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-navy relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 border border-gold/25 px-4 py-1.5 rounded-full tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Client Stories
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            10,000+ Businesses
            <br />
            <span className="text-gold">Trust TaxSafar</span>
          </h2>
          {/* Star rating summary */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} className="text-gold fill-gold" />
            ))}
            <span className="text-white/50 text-sm ml-2">
              4.78 average · 10,000+ verified reviews
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(
            ({ name, role, initials, rating, text, color, accent }, i) => (
              <div
                key={name}
                className={`
                group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7
                border border-white/10 hover:border-gold/40
                hover:bg-white/8 transition-all duration-500
                hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10
                ${i === 1 ? "lg:mt-6" : ""}
                ${i === 3 ? "lg:mt-6" : ""}
              `}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={40} className="text-gold" />
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white/85 transition-colors duration-300">
                  "{text}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/8 mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${color}`}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {name}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Bottom trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            "ICAI Certified Partners",
            "ISO 27001 Data Security",
            "10,000+ Filings Done",
            "Zero Hidden Charges",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-white/40 text-xs font-medium"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
