import { PageContainer } from '../layout/PageContainer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Phone } from 'lucide-react';

export function FooterCTA() {
  const reveal = useScrollReveal();

  return (
    <section ref={reveal} className="bg-brand py-16 sm:py-20 md:py-24 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")` }}></div>
      </div>
      
      <PageContainer className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
            Ready to ship?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Experience South Africa's most reliable courier network. Real-time tracking, courteous drivers, and on-time delivery guaranteed.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 w-full">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-base font-bold text-brand shadow-2xl transition-all hover:-translate-y-1 hover:bg-slate-50 w-full sm:w-auto"
            >
              Book a Courier
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:0861658564"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 w-full sm:w-auto backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
          
          <p className="mt-8 text-sm font-medium text-white/70 uppercase tracking-[0.2em]">
            Dispatching nationwide 24/7
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
