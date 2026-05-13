import { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { Reveal } from './ui/Reveal';

export function Contact() {
  const [status, setStatus] = useState('idle');

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
    <section id="contact" className="bg-[#F9FAFB] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 L60 0 M-10 10 L10 -10 M50 70 L70 50' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")` }}></div>

      <PageContainer>
        <Reveal
          className="relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] md:grid md:grid-cols-[1fr_1.2fr]"
        >
          {/* Image Section - Showing the two vans */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-slate-100">
            <img
              src="images-mjv/vehicle-fleet-8.png"
              alt="MJV courier vans"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              width={800}
              height={1000}
            />
            
            {/* Branding Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-display text-lg font-bold tracking-tight">Reliable Fleet</p>
              <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mt-1">Ready for South Africa</p>
            </div>
          </div>

          {/* Form & Info Section */}
          <div className="flex flex-col bg-white">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-10">
                <h2 className="font-display text-4xl font-extrabold text-courier-ink tracking-tight">
                  Let's get moving
                </h2>
                <p className="mt-4 text-lg text-courier-muted max-w-md">
                  Fill in your details below and our dispatch desk will reach out with a custom quote.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-courier-ink uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Thabo Molefe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-4 text-base transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-courier-ink uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.co.za"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-4 text-base transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-courier-ink uppercase tracking-wider">
                    Shipment Brief
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your shipment (suburbs, size, urgency...)"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-4 text-base transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full rounded-full py-5 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 disabled:cursor-wait disabled:opacity-80 ${
                    status === 'sent' ? 'bg-emerald-600' : 'bg-brand hover:bg-brand-dark'
                  }`}
                >
                  {status === 'sending' && 'Processing Request...'}
                  {status === 'sent' && 'Request Sent Successfully!'}
                  {status === 'idle' && 'Send Courier Request'}
                </button>
              </form>

              {/* Direct Contacts */}
              <div className="mt-12 pt-10 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-bold text-courier-muted uppercase tracking-[0.2em] mb-2">Direct Line</p>
                  <a href="tel:0861658564" className="text-lg font-bold text-courier-ink hover:text-brand transition-colors">0861 MJVLOG (658564)</a>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-courier-muted uppercase tracking-[0.2em] mb-2">WhatsApp Desk</p>
                  <a href="https://wa.me/27821234567" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors">Message Courier Desk</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
