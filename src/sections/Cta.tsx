import Reveal from '../components/Reveal'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { waLink, DEFAULT_WA_MESSAGE } from '../data'

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#101014]">
      <div className="absolute inset-0">
        <img src="/images/cta.jpg" alt="Sonrisa perfecta" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101014]/85 via-[#101014]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-center px-5 py-28 md:px-10 text-[#F3F1EC]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F3F1EC]/60">
            Odontología estética premium
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-6 max-w-4xl font-light leading-[1.0] tracking-tight text-[clamp(2.8rem,7vw,6.5rem)] text-balance">
            Dando vida a tu <em>sonrisa perfecta</em>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 max-w-md text-lg text-[#F3F1EC]/80">
            ¿Listo para transformar tu sonrisa? Agenda tu valoración hoy mismo.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-base font-semibold text-[#062d16] transition-all hover:scale-[1.03] hover:bg-[#1fbd5a]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agenda por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
