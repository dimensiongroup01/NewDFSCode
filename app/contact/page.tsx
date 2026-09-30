'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
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
        className="space-y-6"
        aria-labelledby="contact-form-heading"
        aria-describedby={errorMsg ? 'contact-form-feedback' : undefined}
      >
        <div>
          <h2 id="contact-form-heading" className="text-2xl font-semibold text-[#10284a]">
            Send a Message
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Share your details and we&apos;ll get back to you with the right solution.
          </p>
        </div>

        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-800">
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
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-800">
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
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-slate-800">
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
          <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-slate-800">
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
          <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-800">
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

        <button className="btn-primary" type="submit">
          Review & Submit
        </button>

        {result && <p className="mt-2 text-sm text-slate-700">{result}</p>}
      </form>
    );
  }

  function renderReview() {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#10284a]">Review Your Details</h3>

        <div className="space-y-2.5 rounded-2xl border border-[#EDF2F7] bg-[#F8FAFC] p-4">
          {[
            { label: 'Name', value: data.name },
            { label: 'Email', value: data.email },
            { label: 'Phone', value: data.phone },
            { label: 'Service', value: data.service },
            { label: 'Message', value: data.message }
          ].map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-dashed border-slate-200 pb-2.5 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4"
            >
              <span className="w-24 shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-[#007A96]">
                {row.label}
              </span>
              <span className="text-sm leading-relaxed text-slate-700">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={() => setStep('form')} className="btn-secondary transition-all duration-300 hover:-translate-y-0.5">
            Edit
          </button>

          <button type="button" onClick={handleConfirm} className="btn-primary transition-all duration-300 hover:-translate-y-0.5">
            {submitting ? 'Sending...' : 'Confirm & Send'}
          </button>
        </div>
      </div>
    );
  }

  function renderSuccess() {
    return (
      <div className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5" role="alert">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-black text-white shadow-md">
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
          className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
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
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <SiteHeader />

      <main className="p-6">
        <PageHero kicker="Get In Touch" title="Contact Us" subtitle="Send us a message" />

        <div className="section-shell">
          <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_22px_54px_rgba(15,23,42,0.08)] md:p-8">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-[#00B4D8] to-[#FF6900]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#00B4D8]/10 blur-3xl"
            />
            <div aria-live="polite" aria-atomic="true" role="status" className="sr-only">
              {step === 'success' && 'Message sent successfully. Thank you for contacting us.'}
              {step === 'error' && errorMsg}
              {submitting && 'Sending your message. Please wait.'}
            </div>
            <div className="relative">
              {step === 'form' && renderForm()}
              {step === 'review' && renderReview()}
              {step === 'success' && renderSuccess()}
              {step === 'error' && renderError()}
            </div>
          </div>
        </div>

        <StoryChapter
          title="Building Trust Through Every Conversation"
          detail="Our team is ready to discuss your financial objectives and craft tailored solutions."
        />
        <ScrollReveal />
      </main>

      <SiteFooter />
    </>
  );
}
