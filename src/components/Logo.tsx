interface LogoProps {
  dark?: boolean
}

export default function Logo({ dark = false }: LogoProps) {
  const stroke = dark ? '#F3F1EC' : '#101014'
  return (
    <a href="#inicio" className="flex items-center gap-3 group">
      <svg width="46" height="30" viewBox="0 0 46 30" fill="none" aria-hidden="true">
        <path
          d="M4 8c6.5 12 13 18 19 18S35.5 20 42 8"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15 4.5c1.8 3.4 4.8 5.3 8 5.3s6.2-1.9 8-5.3"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-medium tracking-tight ${
            dark ? 'text-[#F3F1EC]' : 'text-[#101014]'
          }`}
        >
          OdontoMed
        </span>
        <span
          className={`block text-[0.62rem] font-medium uppercase tracking-[0.28em] mt-1 ${
            dark ? 'text-[#F3F1EC]/60' : 'text-[#101014]/55'
          }`}
        >
          Bogotá · Colombia
        </span>
      </span>
    </a>
  )
}
