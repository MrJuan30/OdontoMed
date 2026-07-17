import Reveal from '../components/Reveal'
import { TEAM, waLink } from '../data'

export default function Team() {
  return (
    <section id="equipo" className="bg-[#101014] py-28 md:py-40 text-[#F3F1EC] scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="font-display font-light leading-[0.98] tracking-tight text-[clamp(2.6rem,6vw,5.6rem)]">
              Equipo <em>de expertos</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-[#F3F1EC]/60">
              Profesionales expertos que brindan atención de calidad con tecnología avanzada.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {TEAM.map((doc, i) => (
            <Reveal key={doc.name} delay={i * 120}>
              <div className="group">
                <div className="overflow-hidden rounded-[1.8rem]">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{doc.name}</h3>
                <p className="mt-1 text-sm text-[#F3F1EC]/45">{doc.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#F3F1EC]/70">{doc.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-24 flex flex-col items-center gap-8 text-center">
            <p className="font-display max-w-3xl font-light leading-tight text-[clamp(1.8rem,3.6vw,3.2rem)]">
              Nuestro equipo está dedicado a brindar la <em>mejor atención</em>
            </p>
            <a
              href={waLink('Hola OdontoMed, quisiera agendar una cita con su equipo de especialistas.')}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#F3F1EC] px-8 py-4 text-sm font-semibold text-[#101014] transition-all hover:scale-[1.03]"
            >
              Agenda con un especialista
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
