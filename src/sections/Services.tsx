import { useState } from 'react'
import Reveal from '../components/Reveal'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { SERVICES, waLink } from '../data'

export default function Services() {
  const [active, setActive] = useState(0)
  const service = SERVICES[active]

  return (
    <section id="servicios" className="bg-[#101014] py-28 md:py-40 text-[#F3F1EC] scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F3F1EC]/45">Servicios:</p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Columna izquierda: tabs + titular */}
          <div>
            <Reveal delay={80}>
              <div className="flex flex-col items-start gap-1">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`py-2 text-left text-sm font-medium tracking-wide transition-all ${
                      i === active
                        ? 'text-[#F3F1EC] translate-x-2'
                        : 'text-[#F3F1EC]/35 hover:text-[#F3F1EC]/70'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h2
                key={service.id}
                className="font-display mt-10 whitespace-pre-line font-light italic leading-[0.98] tracking-tight text-[clamp(2.8rem,6vw,5.8rem)]"
              >
                {service.headline}
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={waLink(`Hola OdontoMed, me interesa: ${service.name}. ¿Me pueden dar más información?`)}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#F3F1EC] px-8 py-4 text-sm font-semibold text-[#101014] transition-all hover:scale-[1.03]"
              >
                Saber más
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform group-hover:rotate-90"
                >
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            </Reveal>
          </div>

          {/* Columna derecha: soluciones */}
          <div>
            <Reveal delay={100}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F3F1EC]/45">
                Nuestras soluciones:
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#F3F1EC]/80">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex flex-col gap-8 sm:flex-row">
                <div className="w-full max-w-[240px] shrink-0 overflow-hidden rounded-2xl">
                  <img
                    key={service.image}
                    src={service.image}
                    alt={service.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <ul className="flex-1 divide-y divide-white/10 border-y border-white/10">
                  {service.solutions.map((sol) => (
                    <li key={sol}>
                      <a
                        href={waLink(`Hola OdontoMed, me interesa: ${sol} (${service.name}).`)}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-4 text-sm font-medium text-[#F3F1EC]/85 transition-colors hover:text-[#F3F1EC]"
                      >
                        {sol}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="shrink-0 opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={waLink(`Hola OdontoMed, quisiera agendar una valoración de ${service.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-[#25D366] hover:text-[#1fbd5a] transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar valoración por WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
