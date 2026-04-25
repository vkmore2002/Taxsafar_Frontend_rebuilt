import { useState } from "react";
import { Search, ArrowRight, Star, Users, Award, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const popularSearches = [
  "Return Filing",
  "GST Registration",
  "Financial Planning",
  "Virtual Office",
];

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section className="bg-navy relative overflow-hidden min-h-[620px] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-light/60 blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Trusted by 10,000+ businesses across India
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Business, <span className="text-gold">Simplified.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              Tech-driven tax & compliance consultancy. From GST filings to
              company incorporation — expert help at every step, faster than you
              expect.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white rounded-xl p-1.5 flex items-center gap-3 shadow-2xl shadow-gold/10 max-w-lg">
              <Search size={18} className="text-gray-400 ml-3 shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services — GST, ITR, Trademark..."
                className="flex-1 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400 py-2"
              />
              <button className="bg-gold hover:bg-gold-light text-navy text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shrink-0">
                Search
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/40 text-xs">Popular:</span>
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  className="text-xs text-white/60 hover:text-gold border border-white/10 hover:border-gold/40 px-3 py-1.5 rounded-full transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right — Stats Cards */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[
            {
              icon: Users,
              value: "10,000+",
              label: "Happy Clients",
              sub: "Businesses & individuals",
            },
            {
              icon: Star,
              value: "4.78★",
              label: "Average Rating",
              sub: "From verified reviews",
            },
            {
              icon: Award,
              value: "50+",
              label: "Expert CAs",
              sub: "Certified professionals",
            },
            {
              icon: Clock,
              value: "24hr",
              label: "Turnaround Time",
              sub: "On most filings",
            },
          ].map(({ icon: Icon, value, label, sub }, i) => (
            <ScrollReveal key={label} delay={0.3 + i * 0.1} direction="up">
              <div
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/30 transition-all duration-300 group ${i % 2 !== 0 ? "mt-6" : ""}`}
              >
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                  <Icon size={18} className="text-gold" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">
                  {value}
                </div>
                <div className="text-sm font-medium text-white/80">{label}</div>
                <div className="text-xs text-white/40 mt-1">{sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
            fill="#FAF7F0"
          />
        </svg>
      </div>
    </section>
  );
}
