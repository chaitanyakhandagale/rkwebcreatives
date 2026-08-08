"use client";
import { useState } from "react";
import type { IconType } from "react-icons";
import { FiMapPin, FiMail, FiClock, FiArrowRight, FiCheckCircle, FiGlobe } from "react-icons/fi";
import { sendEmail } from "../actions/sendEmail";

/* ─── Data ────────────────────────────────────────────────────────────────── */
const CONTACT_CARDS = [
  {
    icon: FiMapPin,
    label: "Location",
    title: "Remote-first Studio",
    lines: ["Pune, Maharashtra", "Available worldwide"],
  },
  {
    icon: FiMail,
    label: "Email",
    title: "hello@rkwebcreatives.com",
    lines: ["hello@rkwebcreatives.com", "Response within 24 hrs"],
  },
  {
    icon: FiGlobe,
    label: "Website",
    title: "rkwebcreatives.com",
    lines: ["Portfolio & case studies", "Live project demos"],
  },
  {
    icon: FiClock,
    label: "Availability",
    title: "Mon – Fri, 9 AM – 7 PM",
    lines: ["IST (UTC +5:30)", "Async-friendly for global clients"],
  },
];

const STATS = [
  { value: "40+", label: "Projects delivered" },
  { value: "3+", label: "Years of experience" },
  { value: "98%", label: "Client satisfaction rate" },
  { value: "<24h", label: "Average response time" },
];

/* ─── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-bg pt-28 pb-24">
      {/* Same ambient grid as home hero */}
      <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-70 mask-[radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Eyebrow — same style as home */}
        <span className="inline-flex items-center gap-2 rounded-sm border border-brand-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Get in Touch
        </span>

        <h1 className="mt-6 font-display text-4xl leading-[1.08] text-brand-ink sm:text-5xl lg:text-[3.4rem]">
          Let&apos;s build something
          <br />
          <span className="text-brand-primary">great together.</span>
        </h1>

        <p className="mt-6 max-w-md font-body text-base leading-relaxed text-brand-muted">
          Have a project in mind? Tell us what you&apos;re building — we&apos;ll
          tell you what it takes, and get it shipped.
        </p>

        {/* Stats row — same style as home hero */}
    

        {/* Breadcrumb */}
        <div className="mt-8 flex items-center gap-2 font-mono text-xs tracking-wider text-brand-muted">
          <span>Home</span>
          <span>/</span>
          <span className="text-brand-primary">Contact</span>
        </div>
      </div>
    </section>
  );
}

/* ─── ContactCard ─────────────────────────────────────────────────────────── */
function ContactCard({ icon: Icon, label, title, lines }: { icon: IconType; label: string; title: string; lines: string[] }) {
  return (
    <div className="bg-brand-surface hover:bg-brand-surfaceAlt transition-colors duration-300 p-8 cursor-default border-b border-r border-brand-border group">
      <div className="w-10 h-10 flex items-center justify-center mb-5 rounded-sm bg-brand-primary/10 group-hover:bg-brand-primary transition-colors duration-300">
        <Icon size={18} className="text-brand-primary group-hover:text-brand-surface transition-colors" strokeWidth={1.5} />
      </div>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-primary/60 mb-2">
        {label}
      </div>
      <div className="font-display text-sm font-semibold text-brand-ink mb-1.5">
        {title}
      </div>
      {lines.map((l, i) => (
        <div key={i} className="font-body text-[13px] font-light text-brand-muted leading-relaxed">
          {l}
        </div>
      ))}
    </div>
  );
}

/* ─── FormField ───────────────────────────────────────────────────────────── */
function FormField({ label, id, name, type = "text", placeholder, required, as, options, rows, value, onChange }: any) {
  const inputCls =
    "bg-transparent border-0 border-b border-brand-border py-3 font-body text-sm font-light text-brand-ink placeholder:text-brand-muted/50 outline-none w-full focus:border-brand-primary transition-colors duration-200";
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[11px] tracking-[0.15em] uppercase text-brand-muted font-medium">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={id} name={name || id} rows={rows || 5} placeholder={placeholder} required={required} value={value || ""} onChange={onChange} className={`${inputCls} resize-none`} />
      ) : as === "select" ? (
        <select id={id} name={name || id} className={`${inputCls} cursor-pointer`} value={value || ""} onChange={onChange}>
          <option value="" disabled>Select a service</option>
          {options.map((o: any) => (<option key={o} value={o}>{o}</option>))}
        </select>
      ) : (
        <input id={id} name={name || id} type={type} placeholder={placeholder} required={required} value={value || ""} onChange={onChange} className={inputCls} />
      )}
    </div>
  );
}

/* ─── ContactForm ─────────────────────────────────────────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", message: "", consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const result = await sendEmail({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone || "Not provided",
        budget: formData.service || "Not specified",
        message: formData.message,
      });
      if (result.success) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "", consent: false });
      } else {
        alert(result.message || "Failed to send. Please try again.");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-9">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary mb-3">
          <span className="w-6 h-px bg-brand-primary" />
          Send a Message
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-ink leading-tight mb-3">
          Start your project
          <br />
          <span className="text-brand-primary">with us today.</span>
        </h2>
        <p className="font-body text-sm font-light text-brand-muted leading-relaxed">
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {submitted && (
        <div className="flex items-center gap-3 bg-brand-primary text-brand-surface px-5 py-3.5 mb-7 font-body text-[13px] font-light rounded-sm">
          <FiCheckCircle size={16} className="shrink-0" />
          Message received — we&apos;ll be in touch shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <FormField label="First Name" id="fname" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Rahul" required />
          <FormField label="Last Name" id="lname" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Sharma" required />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <FormField label="Email Address" id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="rahul@example.com" required />
          <FormField label="Phone" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9876 543 210" />
        </div>
        <FormField
          label="Service Needed"
          id="service"
          name="service"
          as="select"
          value={formData.service}
          onChange={handleChange}
          options={["WordPress Website Design", "React / Next.js Development", "Digital Marketing & SEO", "Static Website Hosting", "Technical Consultation", "Full Project (Design + Build)"]}
        />
        <FormField label="Your Message" id="message" name="message" as="textarea" value={formData.message} onChange={handleChange} placeholder="Tell us about your project — goals, timeline, any existing site…" required rows={5} />

        <div className="flex items-start gap-3">
          <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} required className="mt-0.5 cursor-pointer shrink-0 accent-brand-primary" />
          <label htmlFor="consent" className="font-body text-xs text-brand-muted leading-relaxed font-light">
            I agree to receive communications from RK Web Creatives regarding web development services, project updates, and company news. You may unsubscribe at any time.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-3 self-start rounded-sm bg-brand-primary px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-brand-surface transition-all duration-200 hover:bg-brand-primaryDark hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
          {!isSubmitting && <FiArrowRight size={14} />}
        </button>
      </form>
    </div>
  );
}

/* ─── StatsGrid ───────────────────────────────────────────────────────────── */
function StatsGrid() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-brand-border" />
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-primary whitespace-nowrap">
          Why RK Web Creatives
        </span>
        <div className="flex-1 h-px bg-brand-border" />
      </div>

      <div className="grid grid-cols-2 gap-px bg-brand-border border border-brand-border rounded-sm overflow-hidden">
        {STATS.map(({ value, label }) => (
          <div key={label} className="bg-brand-surface px-6 py-5 hover:bg-brand-surfaceAlt transition-colors duration-200">
            <div className="font-display text-3xl font-semibold text-brand-primary leading-none mb-1.5">
              {value}
            </div>
            <div className="font-body text-xs text-brand-muted font-light">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TechStrip ───────────────────────────────────────────────────────────── */
function TechStrip() {
  return (
    <div className="bg-brand-primary rounded-sm px-7 py-6 flex items-center gap-5">
      <div className="flex-1">
        <div className="font-display text-sm font-semibold text-brand-surface mb-0.5">
          Full-stack studio, one point of contact
        </div>
        <div className="font-body text-xs text-brand-surface/50 font-light">
          WordPress · React · Next.js · Node.js · SEO · Hosting
        </div>
      </div>
      <a
        href="#"
        className="font-mono text-[11px] tracking-[0.15em] uppercase text-brand-surface px-5 py-2.5 whitespace-nowrap border border-brand-surface/30 rounded-sm hover:bg-brand-surface/10 hover:border-brand-surface transition-all duration-200"
      >
        View Work
      </a>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <>
      <style>{`
        input:focus, textarea:focus, select:focus { border-bottom-color: rgb(var(--color-primary)) !important; }
      `}</style>

      <div className="min-h-screen bg-brand-bg text-brand-ink font-body">
        <Hero />

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-brand-surface border-b border-brand-border">
          {CONTACT_CARDS.map((c) => (<ContactCard key={c.label} {...c} />))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 md:px-14 py-20 items-start max-w-7xl mx-auto">
          <ContactForm />
          <div className="flex flex-col gap-8">
            <TechStrip />
            <StatsGrid />
          </div>
        </div>
      </div>
    </>
  );
}
