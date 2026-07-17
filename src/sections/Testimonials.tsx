import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6500)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <section id="testimonios" className="bg-[#F3F1EC] py-28 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0E6E5C]">Testimonios</p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote
            key={index}
            className="font-display mt-10 font-light leading-[1.25] tracking-tight text-[clamp(1.5rem,3.2vw,2.6rem)] text-[#101014]"
          >
            “{t.quote}”
          </blockquote>
        </Reveal>

        <Reveal delay={180}>
          <div key={`author-${index}`} className="mt-10 flex items-center justify-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-[#101014]">{t.name}</p>
              <p className="text-xs text-[#101014]/50">{t.location}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-[#101014]' : 'w-2 bg-[#101014]/25 hover:bg-[#101014]/45'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
