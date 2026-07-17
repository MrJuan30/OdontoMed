import WhatsAppIcon from '../components/WhatsAppIcon'
import { waLink, DEFAULT_WA_MESSAGE } from '../data'

const TAGS = ['Restauración de implantes', 'Estética avanzada', 'Odontología restaurativa', 'Diseño de sonrisa']

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#101014]">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Paciente sonriendo"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/35 to-[#101014]/45" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 md:px-10 pb-14 pt-32 text-[#F3F1EC]">
        <div className="mb-8 flex flex-wrap gap-3">
          {TAGS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/25 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="font-display font-light leading-[0.95] text-[clamp(3rem,9vw,8.5rem)] tracking-tight text-balance">
          Tu sonrisa, <em className="font-normal">realzada</em>
          <br />
          sin esfuerzo
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#F3F1EC]/55">En Bogotá:</p>
            <p className="mt-2 text-lg font-medium">Chapinero · Chicó · Usaquén</p>
            <p className="mt-4 max-w-md text-[#F3F1EC]/75 leading-relaxed">
              Diseñamos sonrisas tan saludables como hermosas.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-[#F3F1EC]/75 md:text-right">
              Combinamos ciencia avanzada con un toque artístico.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-[#062d16] transition-all hover:scale-[1.03] hover:bg-[#1fbd5a]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agenda por WhatsApp
              </a>
              <a
                href="#servicios"
                className="flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-[#F3F1EC] transition-all hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee inferior */}
      <div className="relative z-10 border-t border-white/10 bg-[#101014]/60 py-5 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee flex w-max gap-10">
          {[...TAGS, ...TAGS, ...TAGS, ...TAGS].map((t, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.22em] text-[#F3F1EC]/60">
              {t}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="opacity-60">
                <circle cx="5" cy="5" r="2.2" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
