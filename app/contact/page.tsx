'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: 'Merchant Banking',
  message: '',
};

type Step = 'form' | 'review' | 'success' | 'error';

export default function ContactPage() {
  const [step, setStep] = useState<Step>('form');
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validateForm() {
    if (!data.name.trim()) {
      setErrorMsg('Name is required');
      return false;
    }
    if (!data.email.includes('@')) {
      setErrorMsg('Enter a valid email');
      return false;
    }
    if (data.phone.trim().length < 10) {
      setErrorMsg('Enter valid phone number');
      return false;
    }
    return true;
  }

  function handleReview(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setErrorMsg('');
    setResult('');
    setStep('review');
  }

  async function handleConfirm() {
    if (!validateForm()) return;

    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone.trim(),
          service: data.service,
          message: data.message.trim(),
        }),
      });

      const json = await response.json();
      setResult(response.ok ? 'Success!' : 'Error');

      if (!response.ok || !json.success) {
        throw new Error(json.message || 'Submission failed.');
      }

      setStep('success');
    } catch (err) {
      setResult('Error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStep('error');
    } finally {
      setSubmitting(false);
    }
  }

  function renderForm() {
    return (
      <form
        onSubmit={handleReview}
        className="space-y-5"
        aria-labelledby="contact-form-heading"
        aria-describedby={errorMsg ? 'contact-form-feedback' : undefined}
      >
        <div>
          <h2 id="contact-form-heading" className="heading-md">
            Send a Message
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Share your details and we&apos;ll get back to you with the right solution.
          </p>
        </div>

        <div>
          <label htmlFor="contact-name" className="field-label">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            className="input-shell"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            className="input-shell"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="field-label">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            className="input-shell"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            autoComplete="tel"
            required
          />
          <p className="mt-2 text-xs text-slate-500">Include country code if outside India.</p>
        </div>

        <div>
          <label htmlFor="contact-service" className="field-label">
            Service Area
          </label>
          <select
            id="contact-service"
            className="input-shell"
            name="service"
            value={data.service}
            onChange={handleChange}
          >
            <option>Merchant Banking</option>
            <option>Debt Advisory</option>
            <option>Stock Broking</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="field-label">
            Message
          </label>
          <textarea
            id="contact-message"
            className="input-shell min-h-[180px]"
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder="Tell us what you need"
          />
        </div>

        {errorMsg && (
          <p id="contact-form-feedback" className="text-sm text-red-600" role="alert">
            {errorMsg}
          </p>
        )}

        <button className="btn-primary w-full !py-3.5 sm:w-auto" type="submit">
          Review & Submit
        </button>

        {result && <p className="mt-2 text-sm text-slate-700">{result}</p>}
      </form>
    );
  }

  function renderReview() {
    return (
      <div className="space-y-4">
        <h3 className="heading-md">Review Your Details</h3>

        <div className="divide-y divide-line rounded-2xl border border-line bg-paper px-5">
          {[
            { label: 'Name', value: data.name },
            { label: 'Email', value: data.email },
            { label: 'Phone', value: data.phone },
            { label: 'Service', value: data.service },
            { label: 'Message', value: data.message }
          ].map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-start sm:gap-4"
            >
              <span className="w-24 shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-aqua-700">
                {row.label}
              </span>
              <span className="text-[0.95rem] leading-relaxed text-ink">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={() => setStep('form')} className="btn-secondary">
            Edit
          </button>

          <button type="button" onClick={handleConfirm} className="btn-primary" disabled={submitting}>
            {submitting ? 'Sending...' : 'Confirm & Send'}
          </button>
        </div>
      </div>
    );
  }

  function renderSuccess() {
    return (
      <div className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5" role="alert">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
          ✓
        </span>
        <h3 className="text-base font-bold text-emerald-800">Message Sent Successfully</h3>
        <button
          type="button"
          onClick={() => {
            setData(initialData);
            setResult('');
            setStep('form');
          }}
          className="btn bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Send Again
        </button>
      </div>
    );
  }

  function renderError() {
    return (
      <div className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-5" role="alert">
        <p className="text-sm font-semibold text-red-700">{errorMsg}</p>
        <button
          type="button"
          onClick={() => {
            setResult('');
            setStep('form');
          }}
          className="btn bg-red-600 text-white hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <PageHero kicker="Get In Touch" title="Contact Us" subtitle="Send us a message" />

        <section className="section bg-paper">
          <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
              <span aria-hidden className="block h-1 w-12 rounded-full bg-accent" />
              <h2 className="heading-lg mt-5">Building Trust Through Every Conversation</h2>
              <p className="lede mt-5">
                Our team is ready to discuss your financial objectives and craft tailored solutions.
              </p>
            </div>

            <div className="card relative overflow-hidden p-6 md:p-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aqua via-aqua-600 to-accent"
              />
              <div aria-live="polite" aria-atomic="true" role="status" className="sr-only">
                {step === 'success' && 'Message sent successfully. Thank you for contacting us.'}
                {step === 'error' && errorMsg}
                {submitting && 'Sending your message. Please wait.'}
              </div>
              {step === 'form' && renderForm()}
              {step === 'review' && renderReview()}
              {step === 'success' && renderSuccess()}
              {step === 'error' && renderError()}
            </div>
          </div>
        </section>

        <ScrollReveal />
      </main>

      <SiteFooter />
    </>
  );
}
