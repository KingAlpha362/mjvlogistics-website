import { PageContainer } from '../layout/PageContainer';
import { Reveal } from './ui/Reveal';

const values = [
  { title: 'Integrity', text: 'Doing what is right even when no one is watching.', icon: 'flaticons/delivery-man.png' },
  { title: 'Speed', text: 'Time-definite courier slots you can plan around.', icon: 'flaticons/express-delivery.png' },
  { title: 'Care', text: 'Parcels handled like they matter — because they do.', icon: 'flaticons/package-delivery.png' },
  { title: 'Clarity', text: 'Straight answers on cut-offs, routes, and pricing.', icon: 'flaticons/delivery-status.png' },
];

export function Values() {
  return (
    <div className="relative z-10 -mt-10 pb-4 md:-mt-12">
      <PageContainer>
        <Reveal
          stagger={0.1}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {values.map((v) => (
            <article
              key={v.title}
              className="glass-panel-strong rounded-xl border-b-4 border-brand p-6 flex flex-col items-center text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 shadow-sm">
                 <img src={v.icon} alt={v.title} className="h-8 w-8 object-contain" />
              </div>
              <h3 className="font-display text-lg font-bold text-courier-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-courier-muted">{v.text}</p>
            </article>
          ))}
        </Reveal>
      </PageContainer>
    </div>
  );
}
