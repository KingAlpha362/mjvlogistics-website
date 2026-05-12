import { useId } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const cities = [
  'Johannesburg',
  'Pretoria',
  'Cape Town',
  'Durban',
  'Port Elizabeth (Gqeberha)',
  'East London',
  'Bloemfontein',
  'Polokwane',
  'Nelspruit (Mbombela)',
  'George',
  'Kimberley',
  'Newcastle',
  'Richards Bay',
  'Port Shepstone',
];

export function Coverage() {
  const gid = useId().replace(/:/g, '');
  const reveal = useScrollReveal();

  return (
    <section
      ref={reveal}
      className="border-y border-slate-200/80 bg-gradient-to-b from-white via-brand-light/30 to-white py-20 md:py-24"
      aria-labelledby="coverage-heading"
    >
      <PageContainer className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2
            id="coverage-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-courier-ink md:text-4xl"
          >
            Courier <span className="text-brand">coverage map</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-courier-muted">
            Static view of major hubs we serve — no ticker, just the cities your consignments move
            between.
          </p>
          <ul
            className="mt-8 grid max-w-lg grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"
            aria-label="Service locations"
          >
            {cities.map((c) => (
              <li
                key={c}
                className="relative pl-4 text-sm font-semibold text-courier-ink before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel-strong mx-auto w-full max-w-lg rounded-2xl p-5 shadow-lift">
          <div className="relative w-full aspect-[4/3] mx-auto">
            <img 
              src="images-mjv/south-african-map.png" 
              alt="Map of South Africa" 
              className="w-full h-full object-contain"
            />
            {/* Blue dots representing active locations (illustrative positioning) */}
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[35%] left-[68%] animate-[pulse_2s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[85%] left-[25%] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[60%] left-[82%] animate-[pulse_2s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[83%] left-[55%] animate-[pulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[77%] left-[65%] animate-[pulse_2.2s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[52%] left-[55%] animate-[pulse_2.7s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[22%] left-[70%] animate-[pulse_2.4s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[32%] left-[82%] animate-[pulse_2.9s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[50%] left-[45%] animate-[pulse_2.1s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[86%] left-[68%] animate-[pulse_2.6s_ease-in-out_infinite]"></div>
            <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-blue-600/20 shadow-[0_0_10px_rgba(37,99,235,0.8)] top-[70%] left-[75%] animate-[pulse_2.3s_ease-in-out_infinite]"></div>
          </div>
          <p className="mt-2 text-center text-xs text-courier-muted">
            Pins are illustrative of network presence.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
