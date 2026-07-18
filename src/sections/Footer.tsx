import { useState } from 'react'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { LOCATIONS, SERVICES, WHATSAPP, waLink, DEFAULT_WA_MESSAGE } from '../data'

export default function Footer() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = [
      'Hola OdontoMed, vengo del formulario de paciente de la página web.',
      name && `Nombre: ${name}`,
      phone && `Teléfono: ${phone}`,
      message && `Mensaje: ${message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(text), '_blank')
  }

  const inputCls =
    'w-full rounded-full border border-white/12 bg-transparent px-6 py-4 text-sm text-[#F3F1EC] placeholder:text-[#F3F1EC]/35 outline-none focus:border-[#25D366]/70 transition-colors'

  return (
    <footer id="contacto" className="bg-[#101014] pt-24 pb-10 text-[#F3F1EC] scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Izquierda */}
          <Reveal>
            <Logo dark />
            <h2 className="font-display mt-10 font-light leading-[1.05] tracking-tight text-[clamp(2rem,4vw,3.6rem)]">
              ¿Listo para agendar o solo tienes <em>preguntas</em>?
            </h2>
            <p className="mt-6 max-w-md text-[#F3F1EC]/60 leading-relaxed">
              Estamos aquí para ti. Escríbenos y te responderemos por WhatsApp lo antes posible.
            </p>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-[#25D366] hover:text-[#1fbd5a] transition-colors"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">{WHATSAPP.display}</span>
            </a>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={120}>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" className={inputCls} />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" className={inputCls} />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensaje"
                rows={4}
                className={`${inputCls} rounded-[1.5rem] resize-none`}
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 text-sm font-semibold text-[#062d16] transition-all hover:bg-[#1fbd5a]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </Reveal>
        </div>

        {/* Enlaces + sedes */}
        <div className="mt-24 grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#F3F1EC]/40">Servicios</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#servicios" className="text-lg font-semibold hover:text-[#25D366] transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#F3F1EC]/40">Nuestra clínica</p>
            <ul className="mt-5 space-y-3">
              {[
                ['Inicio', '#inicio'],
                ['Tecnología', '#tecnologia'],
                ['Equipo', '#equipo'],
                ['Contacto', '#contacto'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-lg font-semibold hover:text-[#25D366] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[#F3F1EC]/40">Ubicación</p>
            <div className="mt-5">
              <div className="border-l border-white/15 pl-5">
                <a
                  href={LOCATIONS[0].mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold underline underline-offset-4 hover:text-[#25D366] transition-colors block"
                >
                  {LOCATIONS[0].address}
                </a>
                <a href={LOCATIONS[0].phoneHref} className="mt-3 block text-base font-bold hover:text-[#25D366] transition-colors">
                  {LOCATIONS[0].phone}
                </a>
                <div className="mt-3 space-y-1">
                  {LOCATIONS[0].hours.map((h) => (
                    <p key={h.days} className="text-xs text-[#F3F1EC]/45">
                      <span className="inline-block w-16">{h.days}</span>
                      {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#F3F1EC]/40 md:flex-row">
          <p>Copyright © 2026 OdontoMed — Bogotá, Colombia</p>
          <p className="flex gap-5">
            <a href="#inicio" className="hover:text-[#F3F1EC]/80 transition-colors">Política de privacidad</a>
            <a href="#inicio" className="hover:text-[#F3F1EC]/80 transition-colors">Términos y condiciones</a>
          </p>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#25D366] hover:text-[#1fbd5a] transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp directo
          </a>
        </div>
      </div>
    </footer>
  )
}
