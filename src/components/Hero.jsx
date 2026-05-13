import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { PageContainer } from '../layout/PageContainer';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

export function Hero() {
  const root = useRef(null);
  const badge = useRef(null);
  const title = useRef(null);
  const lead = useRef(null);
  const cta = useRef(null);
  const trust = useRef(null);
  const media = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      badge.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45 },
      0
    )
      .fromTo(
        title.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.08
      )
      .fromTo(
        lead.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55 },
        0.2
      )
      .fromTo(
        cta.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.32
      )
      .fromTo(
        trust.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.4
      )
      .fromTo(
        media.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        0.25
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-[min(90vh,52rem)] overflow-hidden bg-[#F9FAFB] pb-16 pt-32 md:pb-24 md:pt-40"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Diagonal Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")` }}></div>
        {/* Red Gradient Accent */}
        <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[120px]"></div>
      </div>

      <PageContainer className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center text-left">
        <div className="flex flex-col items-start">
          <p
            ref={badge}
            className="mb-6 inline-flex rounded-full border border-brand/20 bg-brand-light/80 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-brand shadow-sm backdrop-blur-sm"
          >
            Premium Logistics Network
          </p>
          <h1
            ref={title}
            className="font-display text-4xl font-extrabold leading-[1.2] tracking-tighter text-courier-ink sm:text-6xl md:leading-[1.05] lg:text-6xl xl:text-7xl"
          >
            Your parcel arrives <br className="hidden sm:block" />
            <span className="mt-3 block text-brand sm:-mt-1">on time every time</span>
          </h1>
          <p
            ref={lead}
            className="mt-8 max-w-xl text-lg leading-relaxed text-courier-muted md:text-xl"
          >
            Overnight, dawn and same-day courier across South Africa. Trackable
            handoffs, courteous drivers, and rates built for growing businesses.
          </p>
          
          <div ref={cta} className="mt-8 flex flex-col items-start justify-start gap-4 sm:flex-row sm:gap-6 w-full">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand w-full md:px-8 md:py-4 sm:w-auto"
            >
              Book a Courier
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/27821234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-600/20 bg-white/50 px-6 py-3 text-base font-bold text-emerald-700 transition-all hover:bg-emerald-50 hover:border-emerald-600/40 w-full md:px-8 md:py-4 sm:w-auto shadow-sm"
            >
              <MessageCircle className="h-5 w-5 fill-emerald-600/10" />
              WhatsApp us
            </a>
          </div>

          {/* Trust Signals */}
          <div ref={trust} className="mt-12 flex flex-col items-start gap-4 border-t border-slate-200/60 pt-10 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-base font-bold text-courier-ink">4.9/5</span>
            </div>
            <div className="hidden h-6 w-px bg-slate-300 sm:block"></div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-courier-muted/80">Trusted by 500+ businesses</span>
              <div className="hidden sm:flex gap-3 opacity-40 grayscale scale-90 origin-left">
                <div className="h-5 w-14 rounded bg-slate-300"></div>
                <div className="h-5 w-16 rounded bg-slate-300"></div>
                <div className="h-5 w-12 rounded bg-slate-300"></div>
              </div>
            </div>
          </div>
        </div>

        <div ref={media} className="relative w-full">
          {/* Decorative glow */}
          <div className="absolute -inset-4 md:-inset-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-tr from-brand/20 via-transparent to-blue-600/10 blur-2xl md:blur-[80px] opacity-70"></div>
          
          <div 
            className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-slate-100 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.2)] ring-1 ring-black/5 group"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 94%)' }}
          >
            <div className="aspect-[4/5] sm:aspect-video lg:aspect-[4/5] xl:aspect-square w-full will-change-transform">
              <img
                src="images-mjv/vehicle-fleet-1.jpg"
                alt="MJV courier vehicle on delivery"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.08]"
                width={800}
                height={1000}
                fetchpriority="high"
                loading="eager"
              />
              
              {/* Dark Overlay with Red Bleed */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-transparent to-black/60 mix-blend-multiply opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-6 md:bottom-10 md:left-8 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-md flex items-center gap-4 border border-white/20 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <img src="flaticons/delivery-service.png" alt="Delivery Service" className="h-7 w-7 object-contain" />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-courier-ink">National Fleet</p>
                  <p className="text-[10px] text-brand font-bold uppercase tracking-widest">Ready for dispatch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
