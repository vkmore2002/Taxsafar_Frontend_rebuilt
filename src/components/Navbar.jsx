import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const services = [
  "Return Filing (GST, ITR, TDS, FSSAI)",
  "Assessment & Notice Resolution",
  "Registrations & Compliance",
  "Virtual Office Facilities",
  "Consultancy & Compliances",
  "Virtual Accounting & Bookkeeping",
  "Loan Assistance & Documentation",
  "Financial Planning & Investment Advisory",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="bg-navy hidden md:flex items-center justify-between px-10 py-2 text-xs text-white/60">
        <div className="flex items-center gap-6">
          <a
            href="mailto:support@taxsafar.com"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Mail size={12} /> support@taxsafar.com
          </a>
          <a
            href="tel:+919784818899"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone size={12} /> +91 97848 18899
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/40">Mon–Sat 9am–7pm</span>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-gold transition-colors">
            Partner Login
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gold/20 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-navy/8" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-bold text-navy tracking-tight"
          >
            Tax<span className="text-gold">Safar</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gold-pale rounded-md transition-all"
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gold/10 rounded-md transition-all">
                Services{" "}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-200"
                />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl shadow-navy/10 p-2 hidden group-hover:block z-50">
                {services.map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="block px-3 py-2.5 text-sm text-gray-600 hover:bg-gold/10 hover:text-navy rounded-lg transition-all"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a
                href="#about"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gold/10 rounded-md transition-all"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gold/10 rounded-md transition-all"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-navy border border-navy/30 rounded-md hover:bg-navy hover:text-white transition-all"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-navy bg-gold rounded-md hover:bg-gold-light transition-all shadow-sm"
            >
              Register Free
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gold/20 px-6 pb-6 pt-4 space-y-3">
            <a
              href="#"
              className="block py-2 text-sm font-medium text-gray-700"
            >
              Home
            </a>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 w-full"
            >
              Services{" "}
              <ChevronDown
                size={14}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="block py-1.5 text-sm text-gray-500 hover:text-navy"
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#about"
              className="block py-2 text-sm font-medium text-gray-700"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block py-2 text-sm font-medium text-gray-700"
            >
              Contact
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="flex-1 text-center py-2 text-sm font-medium border border-navy/30 rounded-md text-navy"
              >
                Login
              </a>
              <a
                href="#"
                className="flex-1 text-center py-2 text-sm font-semibold bg-gold text-navy rounded-md"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
