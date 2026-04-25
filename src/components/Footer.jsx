import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  "Return Filing (GST/ITR/TDS)",
  "Assessment & Notice Resolution",
  "Registrations & Compliance",
  "Virtual Office Facilities",
  "Consultancy & Compliances",
  "Virtual Accounting",
  "Loan Assistance",
  "Financial Planning",
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog & Resources", href: "#" },
  { label: "Partner With Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { label: "IG", title: "Instagram", href: "#" },
  { label: "X", title: "Twitter / X", href: "#" },
  { label: "LI", title: "LinkedIn", href: "#" },
  { label: "YT", title: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ── CTA Banner ── */}
        <div className="border-b border-white/8 py-16">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Simplify
                <br />
                Your Compliance?
              </h3>
              <p className="text-white/50 text-base max-w-md">
                Join 10,000+ businesses who trust TaxSafar for expert,
                tech-driven tax & compliance solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy text-sm font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-gold/20"
              >
                Get Started Free
                <ArrowUpRight size={16} />
              </a>
              <a
                href="tel:+919784818899"
                className="flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 text-white text-sm font-semibold px-7 py-3.5 rounded-xl border border-white/15 hover:border-white/25 transition-all duration-300"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <a
              href="/"
              className="font-display text-3xl font-bold text-white tracking-tight inline-block"
            >
              Tax<span className="text-gold">Safar</span>
            </a>
            <p className="text-white/45 text-sm leading-relaxed">
              India's most trusted tech-driven tax & compliance consultancy.
              Simplifying business finance for 10,000+ clients nationwide.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <a
                href="tel:+919784818899"
                className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors group"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold/15 transition-colors shrink-0">
                  <Phone size={13} className="text-gold" />
                </div>
                +91 97848 18899
              </a>
              <a
                href="mailto:support@taxsafar.com"
                className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors group"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold/15 transition-colors shrink-0">
                  <Mail size={13} className="text-gold" />
                </div>
                support@taxsafar.com
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={13} className="text-gold" />
                </div>
                Jaipur, Rajasthan, India
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-9 h-9 bg-white/5 hover:bg-gold/20 border border-white/8 hover:border-gold/40 rounded-xl flex items-center justify-center text-white/50 hover:text-gold transition-all duration-300 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-5">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-gold transition-colors shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-5">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/45 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-gold transition-colors shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-5">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest">
              Stay Updated
            </h4>
            <p className="text-white/45 text-sm leading-relaxed">
              Get tax tips, compliance deadlines & regulatory updates straight
              to your inbox.
            </p>
            <div className="space-y-2.5">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl outline-none focus:border-gold/50 text-white placeholder-white/25 transition-all duration-200"
              />
              <button className="w-full bg-gold hover:bg-gold-light text-navy text-sm font-semibold py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-gold/20">
                Subscribe
              </button>
            </div>

            {/* Trust badges */}
            <div className="pt-2 space-y-2">
              {[
                "ICAI Certified Partners",
                "ISO 27001 Compliant",
                "Zero Hidden Charges",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0" />
                  <span className="text-xs text-white/35 font-medium">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} TaxSafar. All rights reserved. Built
            with ❤️ for Indian businesses.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 hover:text-gold text-xs transition-colors duration-200"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
