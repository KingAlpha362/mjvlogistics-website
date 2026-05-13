import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A versatile scroll reveal component using GSAP.
 * Can animate a single element or stagger its children.
 */
export function Reveal({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0, 
  stagger = 0,
  duration = 0.8,
  triggerStart = 'top 88%'
}) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    if (direction === 'up') y = 30;
    else if (direction === 'down') y = -30;
    else if (direction === 'left') x = 30;
    else if (direction === 'right') x = -30;

    const targets = stagger > 0 ? Array.from(el.children) : [el];

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          once: true,
        },
      }
    );

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [direction, delay, stagger, duration, triggerStart]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
