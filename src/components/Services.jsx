import { useState } from "react";
import {
  FileText,
  ShieldCheck,
  Building2,
  MapPin,
  Briefcase,
  BookOpen,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const services = [
  {
    icon: FileText,
    title: "Return Filing",
    subtitle: "GST · ITR · TDS · FSSAI",
    description:
      "Expert-led filing across all tax types. Stay 100% compliant with zero stress — we handle everything from data collection to submission.",
    tags: ["GST Filing", "ITR Filing", "TDS Return", "FSSAI"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/10 text-blue-500",
    border: "hover:border-blue-400/40",
  },
  {
    icon: ShieldCheck,
    title: "Notice Resolution",
    subtitle: "Income Tax · GST · Prof. Tax",
    description:
      "Received a tax notice? Our experts draft and file precise replies within 48 hours — protecting you from penalties and legal complications.",
    tags: ["IT Notice", "GST Notice", "Scrutiny", "Appeals"],
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-amber-500/10 text-amber-500",
    border: "hover:border-amber-400/40",
  },
  {
    icon: Building2,
    title: "Registrations",
    subtitle: "Company · GST · Trademark · MSME",
    description:
      "From company incorporation to trademark protection — complete registration services handled end-to-end with full legal compliance.",
    tags: ["Pvt Ltd", "LLP", "Trademark", "MSME"],
    gradient: "from-teal-500/10 to-emerald-500/10",
    iconBg: "bg-teal-500/10 text-teal-500",
    border: "hover:border-teal-400/40",
  },
  {
    icon: MapPin,
    title: "Virtual Office",
    subtitle: "GST · MCA · Pan-India",
    description:
      "Professional business address for registrations, courier handling, and compliance — instant setup across 50+ cities in India.",
    tags: ["GST Address", "MCA Filing", "50+ Cities", "Instant"],
    gradient: "from-purple-500/10 to-violet-500/10",
    iconBg: "bg-purple-500/10 text-purple-500",
    border: "hover:border-purple-400/40",
  },
  {
    icon: Briefcase,
    title: "Consultancy",
    subtitle: "Tax · Business · Startup",
    description:
      "Strategic tax planning, business structuring, and startup guidance. Our CAs double as growth advisors — not just number crunchers.",
    tags: ["Tax Planning", "Startup", "Legal Drafting", "Advisory"],
    gradient: "from-rose-500/10 to-pink-500/10",
    iconBg: "bg-rose-500/10 text-rose-500",
    border: "hover:border-rose-400/40",
  },
  {
    icon: BookOpen,
    title: "Virtual Accounting",
    subtitle: "Cloud-Based · Real-Time",
    description:
      "Outsource your entire bookkeeping to us. Real-time cloud dashboards, monthly reconciliation, and zero data loss — always audit-ready.",
    tags: ["Bookkeeping", "Cloud Reports", "Reconciliation", "Payroll"],
    gradient: "from-green-500/10 to-lime-500/10",
    iconBg: "bg-green-500/10 text-green-500",
    border: "hover:border-green-400/40",
  },
  {
    icon: CreditCard,
    title: "Loan Assistance",
    subtitle: "Business · Home · Personal",
    description:
      "Get the best loan offers matched to your profile. We handle documentation, eligibility checks, and liaise directly with lenders for fast approval.",
    tags: ["Business Loan", "Home Loan", "Gold Loan", "Education"],
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconBg: "bg-indigo-500/10 text-indigo-500",
    border: "hover:border-indigo-400/40",
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    subtitle: "Wealth · Investments · Advisory",
    description:
      "SEBI-registered advisors craft tax-efficient investment strategies aligned to your goals — mutual funds, ELSS, SIPs, and beyond.",
    tags: ["Mutual Funds", "ELSS", "SIP", "Wealth Mgmt"],
    gradient: "from-yellow-500/10 to-amber-500/10",
    iconBg: "bg-yellow-500/10 text-yellow-600",
    border: "hover:border-yellow-400/40",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="py-28 bg-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(#0A1628 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 border border-gold/25 px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              What We Offer
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-5 leading-tight">
              Everything Your Business
              <br />
              <span className="text-gold">Needs to Stay Compliant</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              8 powerful service verticals. One dedicated expert. Zero
              confusion.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = active === i;

            return (
              <ScrollReveal key={service.title} delay={0.1 + (i % 4) * 0.1}>
                <TiltCard className="h-full">
                  <div
                    onClick={() => setActive(isActive ? null : i)}
                    className={`
                      relative bg-white rounded-2xl p-6 border cursor-pointer
                      transition-all duration-500 group overflow-hidden h-full
                      ${
                        isActive
                          ? "border-gold shadow-2xl shadow-gold/15"
                          : `border-gray-100 ${service.border} hover:shadow-xl hover:shadow-lg`
                      }
                    `}
                  >
                    {/* Gradient bg on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />

                    {/* Active top line */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-t-2xl" />
                    )}

                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}
                      >
                        <Icon size={22} />
                      </div>
                      <h3 className="font-semibold text-navy text-base leading-snug mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium mb-3">
                        {service.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300 ${isActive ? "text-gold" : "text-gray-400 group-hover:text-navy"}`}
                      >
                        {isActive ? "Show less" : "Learn more"}
                        <ArrowUpRight
                          size={13}
                          className={`transition-transform duration-300 ${isActive ? "rotate-180" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`}
                        />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm mb-5">
              Not sure which service you need?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg shadow-navy/20 hover:shadow-navy/30 hover:-translate-y-0.5"
            >
              Talk to an Expert — It's Free
              <ArrowUpRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
