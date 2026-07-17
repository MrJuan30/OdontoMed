import WhatsAppIcon from './WhatsAppIcon'
import { waLink, DEFAULT_WA_MESSAGE } from '../data'

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-[65] flex items-center gap-3"
    >
      <span className="hidden md:block translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-[#101014] px-5 py-3 text-sm font-medium text-[#F3F1EC] shadow-xl">
        Escríbenos por WhatsApp
      </span>
      <span className="wa-pulse flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
    </a>
  )
}
