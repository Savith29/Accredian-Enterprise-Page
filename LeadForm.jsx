"use client";

import { useState } from "react";
import Section from "./Section";

const TEAM_SIZES = ["1–20", "21–100", "101–500", "500+"];

const initialForm = {
  name: "",
  email: "",
  company: "",
  teamSize: TEAM_SIZES[0],
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <Section
      id="contact"
      tone="light"
      eyebrow="Get Started"
      title="Get a custom proposal for your team"
      description="Tell us a bit about your organization — a consultant will follow up within two business days."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-display text-2xl italic text-ink">
            &ldquo;Onboard three hundred managers, or three. The process is the same
            ledger, scaled.&rdquo;
          </p>
          <dl className="mt-8 space-y-4 text-sm text-ink/70">
            <div>
              <dt className="eyebrow text-seal-dark">Email</dt>
              <dd>partnerships@accredian-enterprise.example</dd>
            </div>
            <div>
              <dt className="eyebrow text-seal-dark">Response time</dt>
              <dd>Within 2 business days</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="name">
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="input"
                placeholder="Saviya Perera"
              />
            </Field>

            <Field label="Work email" htmlFor="email">
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="input"
                placeholder="you@company.com"
              />
            </Field>

            <Field label="Company" htmlFor="company">
              <input
                id="company"
                type="text"
                required
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="input"
                placeholder="Company name"
              />
            </Field>

            <Field label="Team size" htmlFor="teamSize">
              <select
                id="teamSize"
                value={form.teamSize}
                onChange={(e) => update("teamSize", e.target.value)}
                className="input"
              >
                {TEAM_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size} people
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="What do you want to solve for?" htmlFor="message" className="mt-5">
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="input resize-none"
              placeholder="e.g. Upskilling 40 backend engineers on applied ML in Q3"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 font-medium text-parchment transition-opacity hover:opacity-90 disabled:opacity-50 focus-ring"
          >
            {status === "loading" ? "Sending…" : "Request Proposal"}
          </button>

          {status === "success" && (
            <p role="status" className="mt-4 text-sm font-medium text-seal-dark">
              Thanks — your request has been logged. We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-600">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, htmlFor, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-ink/70">
        {label}
      </label>
      {children}
    </div>
  );
}
