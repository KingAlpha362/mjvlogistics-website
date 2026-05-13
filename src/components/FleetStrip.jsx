import { PageContainer } from '../layout/PageContainer';
import { Reveal } from './ui/Reveal';

const imgs = [
  { src: 'images-mjv/vehicle-fleet-7.jpg', alt: 'Line-haul courier truck' },
  { src: 'images-mjv/vehicle-fleet-8.png', alt: 'Metro distribution vehicle' },
  { src: 'images-mjv/vehicle-fleet-9.png', alt: 'Express courier van' },
];

export function FleetStrip() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-14 md:py-16">
      <PageContainer>
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Courier fleet
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-1 max-w-md font-display text-2xl font-extrabold text-courier-ink md:text-3xl">
            Vehicles built for time-definite runs
          </h2>
        </Reveal>
        <Reveal
          stagger={0.15}
          delay={0.2}
          className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {imgs.map((im) => (
            <img
              key={im.src}
              src={im.src}
              alt={im.alt}
              className="h-44 w-[min(78vw,360px)] shrink-0 snap-start rounded-xl border border-white/60 object-cover shadow-md ring-1 ring-black/5"
              width={360}
              height={240}
              loading="lazy"
            />
          ))}
        </Reveal>
      </PageContainer>
    </section>
  );
}
