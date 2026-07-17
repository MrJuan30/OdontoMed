import { useState } from 'react'
import Reveal from '../components/Reveal'
import { TECHNOLOGY, waLink } from '../data'

const QUALITIES = ['Más rápida', 'Más inteligente', 'Sin dolor']

export default function Technology() {
  const [active, setActive] = useState(0)
  const current = TECHNOLOGY[active]

  return (
    <section id="tecnologia" className="bg-[#F3F1EC] py-28 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0E6E5C]">
            Odontología moderna: {QUALITIES.join(' · ')}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display mt-8 max-w-5xl font-light leading-[1.02] tracking-tight text-[clamp(2.4rem,5.4vw,5.2rem)] text-[#101014]">
            Odontología impulsada por <em>tecnología</em> para resultados excepcionales
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Imagen + contador */}
          <Reveal delay={120}>
            <div className="flex items-end gap-8">
              <span className="font-display text-6xl font-light text-[#101014]">
                {String(active + 1).padStart(2, '0')}
                <span className="text-xl text-[#101014]/40"> / {String(TECHNOLOGY.length).padStart(2, '0')}</span>
              </span>
              <div className="relative flex-1 overflow-hidden rounded-[2rem] bg-[#101014]">
                <img
                  key={current.image + active}
                  src={current.image}
                  alt={current.name}
                  className="aspect-[4/3] w-full object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </Reveal>

          {/* Lista */}
          <Reveal delay={180}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#101014]/40 mb-2">
              Tecnología
            </p>
            <ul className="divide-y divide-[#101014]/12 border-y border-[#101014]/12">
              {TECHNOLOGY.map((t, i) => (
                <li key={t.name}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`font-display text-[clamp(1.4rem,2.6vw,2.2rem)] font-light transition-all duration-300 ${
                        i === active ? 'text-[#101014] translate-x-2' : 'text-[#101014]/30'
                      }`}
                    >
                      {t.name}
                    </span>
                    <a
                      href={waLink(`Hola OdontoMed, quisiera conocer más sobre: ${t.name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`shrink-0 text-sm font-medium underline underline-offset-4 transition-opacity ${
                        i === active ? 'opacity-100' : 'opacity-30'
                      } hover:text-[#0E6E5C]`}
                    >
                      Saber más
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
