import { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const [status, setStatus] = useState('idle');
  const reveal = useScrollReveal();

  function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      e.target.reset();
      window.setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  }

  return (
    <section id="contact" className="bg-mesh-courier py-16 sm:py-20 md:py-28">
      <PageContainer>
        <div
          ref={reveal}
          className="flex flex-col overflow-hidden rounded-2xl border border-white/50 shadow-lift backdrop-blur-xl md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.05fr)]"
        >
          <div className="relative h-56 sm:h-64 md:h-auto md:min-h-[min(100%,420px)]">
            <img
              src="/images-mjv/vehicle-fleet-8.png"
              alt="MJV courier vehicle"
              className="h-full w-full object-cover opacity-95 md:min-h-[320px]"
              width={480}
              height={640}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-brand/25" aria-hidden="true" />
          </div>

          <div className="glass-dark space-y-6 p-6 sm:p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-white">Dispatch desk</h2>
            <p className="text-white/85">
              Call or WhatsApp for urgent courier slots. Use the form for structured quotes.
            </p>
            <ul className="space-y-5 text-white">
              <li className="flex gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                  📞
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                    General line
                  </p>
                  <p className="font-semibold">0861 MJVLOG (658564)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                  📠
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Fax</p>
                  <p className="font-semibold">086 605 3498</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                  💬
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/27821234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-white/50 underline-offset-2 hover:text-white"
                  >
                    Message courier desk
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-200/80 bg-white/90 p-6 sm:p-8 backdrop-blur-xl md:border-l md:border-t-0">
            <header className="mb-6 border-b border-slate-200 pb-5">
              <h3 className="font-display text-xl font-bold text-courier-ink md:text-2xl">
                Book a courier
              </h3>
              <p id="form-hint" className="mt-2 text-sm text-courier-muted">
                We reply in business hours. Add collection / delivery suburbs and your time window.
              </p>
            </header>
            <form onSubmit={onSubmit} className="space-y-6" aria-describedby="form-hint">
              <fieldset className="space-y-4 border-0 p-0">
                <legend className="mb-2 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-courier-muted">
                  Your details
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-courier-ink">
                    Full name
                    <input
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Thabo Molefe"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-courier-ink">
                    Phone <span className="font-normal text-courier-muted">(optional)</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="082 000 0000"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                    />
                  </label>
                </div>
                <label className="block text-sm font-semibold text-courier-ink">
                  Work email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.co.za"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-base outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                  />
                </label>
              </fieldset>
              <fieldset className="space-y-3 border-0 p-0">
                <legend className="mb-1 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-courier-muted">
                  Shipment brief
                </legend>
                <label className="block text-sm font-semibold text-courier-ink">
                  What should we collect?
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Suburbs, time window (overnight / same day), parcels or pallets, special handling."
                    className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-base leading-relaxed outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                  />
                </label>
                <p className="text-xs text-courier-muted">
                  More detail = faster routing to the right courier planner.
                </p>
              </fieldset>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full rounded-md py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-brand-dark disabled:cursor-wait disabled:opacity-80 ${
                  status === 'sent' ? 'bg-emerald-700 hover:bg-emerald-700' : 'bg-brand'
                }`}
              >
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && 'Request sent — we’ll be in touch'}
                {status === 'idle' && 'Send courier request'}
              </button>
            </form>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
