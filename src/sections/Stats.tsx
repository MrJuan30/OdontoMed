import Reveal from '../components/Reveal'
import { STATS } from '../data'

const toneStyles: Record<string, string> = {
  light: 'bg-[#F3F1EC] text-[#101014]',
  mid: 'bg-[#B7BCC9] text-[#101014]',
  dark: 'bg-[#3A3B46] text-[#F3F1EC]',
}

const sizes = [
  'h-44 w-44 md:h-56 md:w-56',
  'h-40 w-40 md:h-52 md:w-52',
  'h-36 w-36 md:h-44 md:w-44',
  'h-32 w-32 md:h-40 md:w-40',
  'h-44 w-44 md:h-60 md:w-60',
  'h-40 w-40 md:h-56 md:w-56',
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#101014] pb-32 pt-4 text-[#F3F1EC]">
      {/* arco decorativo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/3 rounded-[100%] border border-white/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#F3F1EC]/45">
            ¿Por qué elegirnos?
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mx-auto mt-6 max-w-4xl text-center font-light leading-[1.02] tracking-tight text-[clamp(2.4rem,5.6vw,5rem)]">
            Estamos aquí para <em>realzar</em> tu sonrisa
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div
                className={`${sizes[i]} ${toneStyles[s.tone]} animate-drift flex flex-col items-center justify-center rounded-full text-center shadow-xl`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <span className="font-display text-4xl md:text-5xl font-light">{s.value}</span>
                <span className="mt-2 max-w-[9rem] text-[0.68rem] font-semibold uppercase tracking-[0.14em] opacity-70">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
