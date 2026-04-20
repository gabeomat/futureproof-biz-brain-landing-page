import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/.netlify/functions/consulting-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please email me directly at aicoachbox@gabrielomat.com",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full bg-cream-soft border border-ink/20 px-4 py-3.5 text-[15px] rounded-[0.75rem] font-medium focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral placeholder:text-ink/40 transition";

  const labelClasses =
    "block text-[11px] font-semibold uppercase tracking-[0.24em] mb-2 text-ink-soft";

  return (
    <motion.section
      className="on-cream bg-cream-deep rounded-[2rem] md:rounded-[3rem] px-6 md:px-12 py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <span className="eyebrow mb-5 text-ink-soft">
          <span className="rule-coral" aria-hidden />
          The Inquiry
        </span>
        <h2 className="display-sans text-4xl md:text-5xl leading-[0.95] mb-4">
          Let&rsquo;s <em>talk.</em>
        </h2>
        <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-10 max-w-xl">
          Tell me a bit about your organization and what you&rsquo;re looking
          to accomplish with AI. I&rsquo;ll follow up within 48 hours. You can
          also email me directly at{" "}
          <a
            href="mailto:aicoachbox@gabrielomat.com"
            className="text-anchor font-semibold underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors"
          >
            aicoachbox@gabrielomat.com
          </a>
          .
        </p>

        {submitted ? (
          <div className="on-anchor bg-anchor text-cream rounded-[1.5rem] p-10 text-center">
            <span className="eyebrow text-cream/80 mb-4 justify-center">
              <span className="rule-coral" aria-hidden />
              Received
            </span>
            <h3 className="display-sans text-3xl mb-3 mt-2">
              Thank <em>you.</em>
            </h3>
            <p className="text-[15px] text-cream/80 leading-relaxed">
              I&rsquo;ve received your inquiry and will be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="hidden" aria-hidden="true">
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClasses}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="First and last name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className={labelClasses}>Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company or organization name"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="teamSize" className={labelClasses}>Team Size</label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={form.teamSize}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231F3D3A%22%20stroke-width%3D%222.5%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_14px_center] bg-no-repeat`}
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="200+">200+ people</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                What are you looking to accomplish with AI?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your goals, current challenges, or what prompted you to reach out."
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {error && (
              <p className="text-sm font-semibold text-[color:var(--color-destructive)]">
                {error}
              </p>
            )}

            <div className="pt-2">
              <CTAButton type="submit" variant="primary">
                {submitting ? "Sending…" : "Send Inquiry"}
              </CTAButton>
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
}
