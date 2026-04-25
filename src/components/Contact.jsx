import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 97848 18899",
    sub: "Mon–Sat, 9am–7pm IST",
    href: "tel:+919784818899",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "support@taxsafar.com",
    sub: "We reply within 2 hours",
    href: "mailto:support@taxsafar.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Jaipur, Rajasthan",
    sub: "Pan-India virtual services",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 7:00 PM IST",
    href: "#",
  },
];

const services = [
  "Return Filing (GST/ITR/TDS)",
  "Notice Resolution",
  "Company Registration",
  "Virtual Office",
  "Loan Assistance",
  "Financial Planning",
  "Virtual Accounting",
  "Other / Not Sure",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(#0A1628 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/8 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-navy/5 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 border border-gold/25 px-4 py-1.5 rounded-full tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Get In Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Let's Solve Your
            <br />
            <span className="text-gold">Tax Problems Together</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Book a free consultation. Our experts will reach out within 2 hours
            — no commitment, no fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/8 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-gold group-hover:text-navy transition-colors duration-300"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-navy">{value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919784818899"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white text-sm font-semibold w-full py-4 rounded-2xl hover:bg-[#20c05c] transition-colors duration-300 shadow-lg shadow-green-500/20 mt-2"
            >
              <MessageSquare size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-navy/5 p-8 md:p-10">
              {submitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-5">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    We'll Be In Touch!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. One of our experts will contact
                    you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="text-sm font-semibold text-gold hover:text-navy transition-colors"
                  >
                    Submit another request →
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy mb-1">
                      Book Free Consultation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Fill in your details and we'll call you back.
                    </p>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gold focus:bg-white transition-all duration-200 text-navy placeholder-gray-300"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gold focus:bg-white transition-all duration-200 text-navy placeholder-gray-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@yourcompany.com"
                      className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gold focus:bg-white transition-all duration-200 text-navy placeholder-gray-300"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gold focus:bg-white transition-all duration-200 text-navy appearance-none cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us briefly about your requirement..."
                      className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gold focus:bg-white transition-all duration-200 text-navy placeholder-gray-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-navy text-white text-sm font-semibold py-4 rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg shadow-navy/20 hover:shadow-navy/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Request Free Callback
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 Your information is 100% secure. We never share your
                    data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
