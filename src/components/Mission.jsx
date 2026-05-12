import { PageContainer } from '../layout/PageContainer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '14+', label: 'Key centres & routes nationwide' },
  { value: '3', label: 'Express, road & dedicated product lines' },
  { value: 'SA-wide', label: 'Same-day, dawn & overnight to major hubs' },
  { value: '100%', label: 'Agreed trading conditions — every booking' },
];

const testimonials = [
  {
    initials: 'SK',
    logo: 'NR',
    company: 'National retail',
    quote:
      '“Overnight into Johannesburg has been reliable week after week — it tightened our replenishment cycle.”',
    name: 'Sipho K.',
    role: 'Logistics coordinator',
  },
  {
    initials: 'LN',
    logo: 'FG',
    company: 'FMCG supply chain',
    quote:
      '“Clear communication and professional handling on full-load dedicated runs. We know what to expect on every booking.”',
    name: 'Lerato N.',
    role: 'Warehouse manager',
  },
  {
    initials: 'DM',
    logo: 'IN',
    company: 'Industrial distribution',
    quote:
      '“They respond quickly when we need an urgent same-day or dawn slot — that responsiveness matters to our operations team.”',
    name: 'David M.',
    role: 'Operations lead',
  },
];

export function Mission() {
  const revealA = useScrollReveal();
  const revealB = useScrollReveal();

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <PageContainer className="space-y-14">
        <div ref={revealA} className="relative h-[65vw] max-h-[450px] w-full max-w-4xl mx-auto my-8">
          <figure className="absolute left-0 top-0 w-[65%] h-[80%] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 ring-1 ring-black/5 transition-transform duration-700 hover:-translate-y-2 group">
            <img
              src="images-mjv/vehicle-fleet-5.jpg"
              alt="Courier fleet staged for distribution"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              width={640}
              height={420}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0"></div>
          </figure>
          <figure className="absolute right-0 bottom-0 w-[55%] h-[75%] overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-20 ring-[6px] ring-white transition-transform duration-700 hover:-translate-y-2 group bg-white">
            <img
              src="images-mjv/vehicle-fleet-6.jpg"
              alt="MJV courier truck on route"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              width={640}
              height={420}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="glass-panel rounded-xl border-b-4 border-brand p-5 text-center shadow-md"
            >
              <span className="font-display text-2xl font-extrabold text-brand md:text-3xl">
                {s.value}
              </span>
              <p className="mt-2 text-sm leading-snug text-courier-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div ref={revealB} className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Proof from the road
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm italic text-courier-muted">
            Swap monograms for approved client logos when you have sign-off.
          </p>
          <div className="mt-8 grid gap-6 text-left md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="glass-panel flex flex-col gap-4 rounded-2xl p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-brand-light bg-brand font-display text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-white font-display text-[10px] font-extrabold text-brand">
                      {t.logo}
                    </span>
                    <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-courier-muted">
                      {t.company}
                    </span>
                  </div>
                </div>
                <blockquote className="flex-1 text-base italic leading-relaxed text-courier-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-slate-200/80 pt-3 text-sm">
                  <cite className="not-italic font-bold text-courier-ink">{t.name}</cite>
                  <span className="mt-0.5 block text-courier-muted">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-brand/15 bg-brand-light/40 px-6 py-10 text-center shadow-inner backdrop-blur-sm md:px-10">
          <h2 className="font-display text-3xl font-extrabold text-brand md:text-4xl">
            Exceeding expectations
          </h2>
          <p className="mt-4 font-display text-xl font-medium italic text-courier-ink">
            “Treating each parcel as if it were our only delivery.”
          </p>
          <p className="mt-4 text-lg leading-relaxed text-courier-muted">
            Courier is a promise on two wheels or eighteen. We invest in safety, clear cut-offs, and
            people who represent your brand at the doorstep.
          </p>
          <p className="mt-8">
            <a
              href="#contact"
              className="inline-flex rounded-md bg-brand px-6 py-3 font-semibold text-white shadow-md transition hover:bg-brand-dark"
            >
              Speak to dispatch
            </a>
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
