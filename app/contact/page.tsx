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
        <h3 className="text-lg font-bold">Review Your Details</h3>

        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Phone:</b> {data.phone}</p>
        <p><b>Service:</b> {data.service}</p>
        <p><b>Message:</b> {data.message}</p>

        <div className="flex gap-3">
          <button type="button" onClick={() => setStep('form')} className="btn-secondary">
            Edit
          </button>

          <button type="button" onClick={handleConfirm} className="btn-primary">
            {submitting ? 'Sending...' : 'Confirm & Send'}
          </button>
        </div>
      </div>
    );
  }

  function renderSuccess() {
    return (
      <div className="space-y-3 text-green-600" role="alert">
        <h3>Message Sent Successfully</h3>
        <button
          type="button"
          onClick={() => {
            setData(initialData);
            setResult('');
            setStep('form');
          }}
        >
          Send Again
        </button>
      </div>
    );
  }

  function renderError() {
    return (
      <div className="space-y-3 text-red-600" role="alert">
        <p>{errorMsg}</p>
        <button
          type="button"
          onClick={() => {
            setResult('');
            setStep('form');
          }}
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

        <div className="mx-auto mt-8 max-w-xl">
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
