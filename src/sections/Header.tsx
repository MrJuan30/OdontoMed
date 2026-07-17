import { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { LOCATIONS, MENU_LINKS, SERVICES, WHATSAPP, waLink, DEFAULT_WA_MESSAGE } from '../data'

/* ---------- Modal de reserva → WhatsApp ---------- */
function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sede, setSede] = useState(LOCATIONS[0].name)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  if (!open) return null

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = [
      'Hola OdontoMed, quisiera agendar una cita.',
      `Sede: ${sede}`,
      name && `Nombre: ${name}`,
      phone && `Teléfono: ${phone}`,
      message && `Mensaje: ${message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(text), '_blank')
    onClose()
  }

  const inputCls =
    'w-full rounded-full border border-white/15 bg-transparent px-6 py-4 text-sm text-[#F3F1EC] placeholder:text-[#F3F1EC]/40 outline-none focus:border-[#F3F1EC]/50 transition-colors'

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-[2rem] bg-[#14141a] p-8 md:p-10 text-[#F3F1EC] shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex items-center gap-3 text-[#25D366]">
          <WhatsAppIcon className="h-6 w-6" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em]">Agenda por WhatsApp</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
          ¿Listo para agendar o solo tienes preguntas?
        </h3>
        <p className="text-[#F3F1EC]/60 text-sm mt-3">
          Déjanos tus datos y continúa la conversación en WhatsApp {WHATSAPP.display}.
        </p>

        <form onSubmit={submit} className="mt-7 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#F3F1EC]/50 mb-3">Elige tu sede:</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {LOCATIONS.map((loc) => (
                <label key={loc.id} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="sede"
                    checked={sede === loc.name}
                    onChange={() => setSede(loc.name)}
                    className="accent-[#25D366] h-4 w-4"
                  />
                  {loc.name}
                </label>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" className={inputCls} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" className={inputCls} />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensaje"
            rows={3}
            className={`${inputCls} rounded-[1.5rem] resize-none`}
          />
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 text-sm font-semibold text-[#062d16] hover:bg-[#1fbd5a] transition-colors"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

/* ---------- Menú overlay ---------- */
function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[70] bg-[#101014] text-[#F3F1EC] overflow-y-auto">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col min-h-full">
        <div className="flex items-center justify-between">
          <Logo dark />
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
          >
            Cerrar
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>

        <nav className="mt-14 grid gap-12 md:grid-cols-2 flex-1">
          <div className="space-y-1">
            {MENU_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={onClose}
                className="group flex items-baseline gap-4 py-3 border-b border-white/10 hover:pl-4 transition-all"
              >
                <span className="font-display text-4xl md:text-5xl font-light group-hover:italic transition-all">
                  {l.label}
                </span>
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#F3F1EC]/45 mb-5">Servicios:</p>
            <div className="space-y-1">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#servicios"
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-3 border-b border-white/10 hover:pl-4 transition-all"
                >
                  <span className="font-display text-3xl md:text-4xl font-light group-hover:italic transition-all">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-[#062d16] hover:bg-[#1fbd5a] transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escríbenos: {WHATSAPP.display}
            </a>
          </div>
        </nav>

        <p className="text-[#F3F1EC]/40 text-xs mt-12">
          © 2026 OdontoMed — Bogotá, Colombia
        </p>
      </div>
    </div>
  )
}

/* ---------- Header ---------- */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [activePhone, setActivePhone] = useState(LOCATIONS[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = !scrolled && !menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? 'bg-[#F3F1EC]/90 backdrop-blur-md border-b border-[#101014]/8 text-[#101014]'
            : 'bg-transparent text-[#F3F1EC]'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10 py-4">
          <div className={light ? '[&_*]:!text-[#F3F1EC]' : ''}>
            <Logo dark={light} />
          </div>

          {/* Centro */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                light ? 'hover:bg-white/10' : 'hover:bg-[#101014]/5'
              }`}
            >
              Menú
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <div className="relative group">
              <button
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  light ? 'hover:bg-white/10' : 'hover:bg-[#101014]/5'
                }`}
              >
                Servicios
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-3">
                <div className="w-72 rounded-3xl bg-[#101014] p-3 text-[#F3F1EC] shadow-2xl">
                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href="#servicios"
                      className="block rounded-2xl px-5 py-3.5 text-sm hover:bg-white/10 transition-colors"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Derecha */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contacto"
              className={`flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                light ? 'hover:bg-white/10' : 'hover:bg-[#101014]/5'
              }`}
            >
              Formulario de paciente
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <div className="relative group">
              <button
                className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  light ? 'hover:bg-white/10' : 'hover:bg-[#101014]/5'
                }`}
              >
                {activePhone.phone}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute right-0 top-full pt-3">
                <div className="w-64 rounded-3xl bg-[#101014] p-3 text-[#F3F1EC] shadow-2xl">
                  {LOCATIONS.map((loc) => (
                    <a
                      key={loc.id}
                      href={loc.phoneHref}
                      onMouseEnter={() => setActivePhone(loc)}
                      className="block rounded-2xl px-5 py-3.5 hover:bg-white/10 transition-colors"
                    >
                      <span className="block text-sm font-semibold">{loc.phone}</span>
                      <span className="block text-xs text-[#F3F1EC]/50 mt-0.5">{loc.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className={`ml-2 flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03] ${
                light ? 'bg-[#F3F1EC] text-[#101014]' : 'bg-[#101014] text-[#F3F1EC]'
              }`}
            >
              Agenda tu cita
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Móvil */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                light ? 'bg-white/15 text-[#F3F1EC]' : 'bg-[#101014]/8 text-[#101014]'
              }`}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
