import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { PageContainer } from '../layout/PageContainer';

export function Hero() {
  const root = useRef(null);
  const badge = useRef(null);
  const title = useRef(null);
  const lead = useRef(null);
  const cta = useRef(null);
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
      className="relative min-h-[min(90vh,52rem)] bg-mesh-courier pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <PageContainer className="flex flex-col items-center text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center relative z-10">
          <p
            ref={badge}
            className="mb-6 inline-flex rounded-full border border-brand/20 bg-brand-light/90 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-brand shadow-sm backdrop-blur-sm text-center"
          >
            Courier &amp; express network
          </p>
          <h1
            ref={title}
            className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight text-courier-ink"
          >
            Your parcel arrives on{' '}
            <span className="text-brand">time — every time</span>
          </h1>
          <p
            ref={lead}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-courier-muted md:text-xl"
          >
            Overnight, dawn and same-day courier across South Africa. Trackable
            handoffs, courteous drivers, and rates built for growing businesses.
          </p>
          <div ref={cta} className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand w-full sm:w-auto"
            >
              Book a courier
            </a>
            <div className="flex items-center gap-3 md:gap-4 text-sm text-courier-muted flex-wrap justify-center">
              <a href="#services" className="font-semibold text-brand underline-offset-4 hover:underline">
                Service guide
              </a>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <a
                href="https://wa.me/27821234567"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline-offset-4 hover:underline"
              >
                WhatsApp dispatch
              </a>
            </div>
          </div>
        </div>

        <div ref={media} className="relative mt-12 md:mt-16 w-full max-w-5xl mx-auto">
          <div className="absolute -inset-4 md:-inset-6 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-tr from-brand/15 via-transparent to-blue-600/10 blur-2xl md:blur-3xl opacity-80"></div>
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-slate-100 shadow-[0_20px_80px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group">
            <img
              src="images-mjv/vehicle-fleet-1.jpg"
              alt="MJV courier vehicle on delivery"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              width={1000}
              height={562}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>

            {/* Premium decorative badge over the image */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 rounded-xl md:rounded-2xl bg-white/95 px-4 py-3 md:px-6 md:py-4 shadow-2xl backdrop-blur-md flex items-center gap-3 md:gap-4">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-brand/10">
                <img src="flaticons/delivery-service.png" alt="Delivery Service" className="h-6 w-6 md:h-7 md:w-7 object-contain" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-courier-ink md:text-base">National Fleet</p>
                <p className="text-[10px] md:text-xs text-courier-muted font-medium uppercase tracking-wider">Ready for dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
