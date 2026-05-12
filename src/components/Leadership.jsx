import { PageContainer } from '../layout/PageContainer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const leaders = [
  { initials: 'MV', name: 'Myan Veerappa', role: 'Managing Director' },
  { initials: 'PT', name: 'Priya Trikam', role: 'General Manager' },
  { initials: 'BV', name: 'Bianca Veerappa', role: 'Financial Director' },
];

export function Leadership() {
  const reveal = useScrollReveal();

  return (
    <section id="leadership" className="bg-slate-100/80 py-20 md:py-28">
      <PageContainer>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div
            ref={reveal}
            className="glass-panel overflow-hidden rounded-2xl shadow-lg lg:sticky lg:top-28"
          >
            <img
              src="images-mjv/vehicle-fleet-7.jpg"
              alt="MJV courier operations"
              className="aspect-[21/9] w-full object-cover lg:aspect-[4/5] lg:min-h-[360px]"
              width={560}
              height={700}
              loading="lazy"
            />
          </div>
          <div>
            <header className="mb-10">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-courier-ink md:text-4xl">
                Courier <span className="text-brand">leadership</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-courier-muted">
                Decisions are made by people who still care about cut-off times and POD quality.
              </p>
            </header>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {leaders.map((l) => (
                <article
                  key={l.name}
                  className="glass-panel rounded-xl p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-brand-light bg-brand font-display text-2xl font-bold text-white">
                    {l.initials}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-courier-ink">{l.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand">{l.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
