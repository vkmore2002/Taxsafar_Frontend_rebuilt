import {
  CheckCircle2,
  Clock,
  Users,
  Trophy,
  Zap,
  Lock,
  HeartHandshake,
  Globe,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Clients",
    desc: "Businesses & individuals served",
  },
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Expert CAs",
    desc: "Certified & experienced professionals",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "hr",
    label: "Fast Turnaround",
    desc: "On most standard filings",
  },
  {
    icon: CheckCircle2,
    value: 99,
    suffix: "%",
    label: "Success Rate",
    desc: "On compliance & notice resolutions",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Tech-Driven Process",
    desc: "Our cloud-based platform ensures real-time updates, document management, and seamless communication between you and your assigned expert.",
  },
  {
    icon: Lock,
    title: "Transparent Pricing",
    desc: "No hidden charges. Fixed fee packages with clear scope of work — you know exactly what you're paying for before you begin.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Expert",
    desc: "Every client gets a dedicated CA who understands your business context and provides truly personalized guidance — not generic advice.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    desc: "Whether you're in Mumbai, Jaipur, or a Tier-3 city — our network of 50+ professionals covers every corner of India.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/3 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
          {stats.map(({ icon: Icon, value, suffix, label, desc }, i) => (
            <ScrollReveal key={label} delay={0.1 + i * 0.1}>
              <div className="group relative bg-cream rounded-2xl p-7 border border-gold/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div className="font-display text-4xl font-bold text-navy mb-1 tracking-tight">
                    <CountUp to={value} suffix={suffix} duration={2000} />
                  </div>
                  <div className="text-sm font-semibold text-navy/80 mb-1">
                    {label}
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed">
                    {desc}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Why Choose Us ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 border border-gold/25 px-4 py-1.5 rounded-full tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Why TaxSafar
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
                Expert Guidance.
                <br />
                <span className="text-gold">Zero Confusion.</span>
                <br />
                Real Results.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-500 text-lg leading-relaxed">
                We combine the expertise of seasoned chartered accountants with
                modern technology to deliver compliance solutions that are fast,
                reliable, and genuinely affordable — built for Indian businesses
                of every size.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-3">
                {[
                  "ICAI-registered CAs & compliance experts",
                  "100% digital — no office visits needed",
                  "Dedicated relationship manager for every client",
                  "Strict data privacy & confidentiality policy",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-gold" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg shadow-navy/20 hover:shadow-navy/30 hover:-translate-y-0.5 w-fit"
              >
                Get a Free Consultation
                <span className="text-gold">→</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right — Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={0.1 + i * 0.1}>
                <div className="group bg-cream rounded-2xl p-6 border border-gold/10 hover:border-gold/35 hover:shadow-lg hover:shadow-gold/8 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                    <Icon
                      size={18}
                      className="text-gold group-hover:text-navy transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-navy text-sm mb-2">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
