import { PageContainer } from '../layout/PageContainer';
import { Reveal } from './ui/Reveal';

const services = [
  {
    title: 'Express courier',
    icon: 'flaticons/express-delivery.png',
    img: 'images-mjv/vehicle-fleet-2.jpg',
    alt: 'Courier van for express deliveries',
    description: 'When time is of the essence, our express network ensures your parcels reach their destination without delay. Perfect for urgent documents, medical supplies, and critical freight.',
    items: ['Overnight by 10:30 (major centres)', 'Dawn delivery (before 09:00)', 'Same-day rush'],
  },
  {
    title: 'Linehaul & road',
    icon: 'flaticons/delivery-truck.png',
    img: 'images-mjv/vehicle-fleet-3.jpeg',
    alt: 'Road freight vehicle',
    description: 'Our extensive road freight network provides reliable and cost-effective transportation for larger consignments. We connect major hubs and reach outlying areas with consistent transit times.',
    items: ['Hub-to-hub overnight', 'Economic 2–3 day road', 'Outlying area specialists'],
  },
  {
    title: 'Dedicated loads',
    icon: 'flaticons/loading.png',
    img: 'images-mjv/vehicle-fleet-4.jpg',
    alt: 'Dedicated courier vehicle',
    description: 'For unique logistical challenges, we offer dedicated vehicle solutions. Whether you need a truck exclusively for your goods or require specialized handling, our fleet is at your disposal.',
    items: ['FMCG replenishment', 'Break-bulk handling', 'Full vehicle charter'],
  },
];

const AlternateImageMockup = ({ children, className = "" }) => {
    return (
        <div
            className={`w-full rounded-2xl bg-white p-1 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-slate-200 md:rounded-[1.5rem] md:p-1.5 lg:absolute lg:w-[125%] lg:max-w-none z-10 ${className}`}
        >
            <div className="w-full h-full rounded-xl bg-slate-50 p-1 shadow-inner md:rounded-2xl md:p-1.5">
                <div className="relative w-full h-full overflow-hidden rounded-lg ring-1 ring-slate-200/50 md:rounded-xl aspect-[4/3] lg:aspect-[16/10]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export function Services() {
  return (
    <section id="services" className="overflow-hidden bg-slate-50 py-16 sm:py-20 md:py-28">
      <PageContainer>
        <header className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand md:text-base">Features</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-courier-ink md:text-5xl">
              Courier <span className="text-brand">services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-courier-muted md:text-xl leading-relaxed">
              Built for retailers, clinics, and industrial shippers who need predictable cut-offs and proof of delivery.
            </p>
          </Reveal>
        </header>

        <div className="mx-auto flex w-full flex-col gap-16 md:gap-24 lg:gap-32">
          {services.map((s, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={s.title} className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24 items-center">
                <Reveal direction={isEven ? 'right' : 'left'} className={`max-w-xl flex-1 self-center flex flex-col items-center text-center lg:items-start lg:text-left ${isEven ? 'lg:order-last lg:pl-10' : 'lg:pr-10'}`}>
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-2xl text-brand shadow-sm ring-1 ring-brand/20">
                    <img src={s.icon} alt={s.title} className="h-8 w-8 object-contain" />
                  </span>
                  <h3 className="font-display text-3xl font-bold text-courier-ink md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-lg text-courier-muted md:text-xl leading-relaxed">
                    {s.description}
                  </p>
                  <ul className="mt-8 flex flex-col gap-5 pl-1 md:pl-2">
                    {s.items.map((li) => (
                      <li key={li} className="flex items-center gap-4 text-base md:text-lg text-courier-ink">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm ring-2 ring-brand-light">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="font-medium">{li}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal direction={isEven ? 'left' : 'right'} className="relative w-full flex-1 lg:h-[400px] xl:h-[440px]">
                  <AlternateImageMockup className={isEven ? "lg:right-0" : "lg:left-0"}>
                    <img
                        alt={s.alt}
                        src={s.img}
                        className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                        loading="lazy"
                    />
                  </AlternateImageMockup>
                </Reveal>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
