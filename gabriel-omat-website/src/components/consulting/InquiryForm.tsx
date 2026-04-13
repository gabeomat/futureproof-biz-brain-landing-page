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
      setError("Something went wrong. Please email me directly at aicoachbox@gabrielomat.com");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full border-hard bg-white px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-none placeholder:text-foreground/40";

  return (
    <motion.section
      className="border-hard bg-white p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl mb-2 leading-tight">
          Let's Talk
        </h2>
        <p className="text-sm font-medium mb-8 leading-relaxed">
          Tell me a bit about your organization and what you're looking to
          accomplish with AI. I'll follow up within 48 hours. You can also
          email me directly at{" "}
          <a
            href="mailto:aicoachbox@gabrielomat.com"
            className="text-primary font-bold hover:underline"
          >
            aicoachbox@gabrielomat.com
          </a>.
        </p>

        {submitted ? (
          <div className="border-hard bg-muted p-8 text-center">
            <h3 className="font-editorial text-2xl mb-2">Thank You</h3>
            <p className="text-sm font-bold">
              I've received your inquiry and will be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase mb-2">
                  Your Name
                </label>
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
                <label htmlFor="email" className="block text-xs font-bold uppercase mb-2">
                  Email
                </label>
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

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase mb-2">
                  Organization
                </label>
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
                <label htmlFor="teamSize" className="block text-xs font-bold uppercase mb-2">
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={form.teamSize}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%232a2e30%22%20stroke-width%3D%222.5%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat`}
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
              <label htmlFor="message" className="block text-xs font-bold uppercase mb-2">
                What Are You Looking to Accomplish with AI?
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
              <p className="text-sm font-bold text-destructive">{error}</p>
            )}

            <CTAButton
              type="submit"
              variant="primary"
              className="text-sm px-8 py-3"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
            </CTAButton>
          </form>
        )}
      </div>
    </motion.section>
  );
}
