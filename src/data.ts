export const BRAND = {
  name: 'OdontoMed',
  city: 'Bogotá',
  country: 'Colombia',
  tagline: 'Combinamos ciencia avanzada con un toque artístico.',
}

export const WHATSAPP = {
  numberIntl: '573001234567',
  display: '+57 300 123 4567',
}

export const waLink = (message?: string) =>
  `https://wa.me/${WHATSAPP.numberIntl}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`

export const DEFAULT_WA_MESSAGE =
  'Hola OdontoMed, quisiera agendar una cita. ¿Me pueden brindar más información?'

export interface Location {
  id: string
  name: string
  address: string
  phone: string
  phoneHref: string
  hours: { days: string; time: string }[]
  mapsUrl: string
}

export const LOCATIONS: Location[] = [
  {
    id: 'chapinero',
    name: 'Chapinero',
    address: 'Cra. 13 #54-10, Chapinero, Bogotá',
    phone: '(601) 743 2100',
    phoneHref: 'tel:+576017432100',
    hours: [
      { days: 'Lun–Vie', time: '8:00 am – 6:00 pm' },
      { days: 'Sábado', time: '8:00 am – 2:00 pm' },
    ],
    mapsUrl: 'https://maps.google.com/?q=Cra.+13+%2354-10,+Bogotá',
  },
  {
    id: 'chico',
    name: 'Chicó',
    address: 'Calle 100 #13-21, Chicó, Bogotá',
    phone: '(601) 257 9600',
    phoneHref: 'tel:+576012579600',
    hours: [
      { days: 'Lun–Vie', time: '8:00 am – 6:00 pm' },
      { days: 'Sábado', time: '8:00 am – 2:00 pm' },
    ],
    mapsUrl: 'https://maps.google.com/?q=Calle+100+%2313-21,+Bogotá',
  },
  {
    id: 'usaquen',
    name: 'Usaquén',
    address: 'Calle 119 #7-14, Usaquén, Bogotá',
    phone: '(601) 629 3800',
    phoneHref: 'tel:+576016293800',
    hours: [
      { days: 'Lun–Vie', time: '8:30 am – 5:30 pm' },
      { days: 'Sábado', time: '9:00 am – 1:00 pm' },
    ],
    mapsUrl: 'https://maps.google.com/?q=Calle+119+%237-14,+Bogotá',
  },
]

export interface Service {
  id: string
  name: string
  headline: string
  description: string
  image: string
  solutions: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'estetica',
    name: 'Odontología Estética',
    headline: 'Odontología\nEstética',
    description:
      'Desde el blanqueamiento y las carillas hasta el diseño de sonrisa completo, usamos las técnicas más avanzadas para crear resultados naturales y deslumbrantes.',
    image: '/images/servicio-estetica.jpg',
    solutions: [
      'Diseño de sonrisa',
      'Carillas de porcelana',
      'Blanqueamiento dental',
      'Bonding y contorneado estético',
    ],
  },
  {
    id: 'restaurativa',
    name: 'Odontología Restaurativa',
    headline: 'Odontología\nRestaurativa',
    description:
      'Tratamientos restauradores de expertos para reconstruir, proteger y devolver la función a tus dientes, dándote confianza tanto en función como en apariencia.',
    image: '/images/servicio-restaurativa.jpg',
    solutions: [
      'Restauración de implantes',
      'Coronas y puentes',
      'Rehabilitación oral completa',
      'Resinas del color del diente',
    ],
  },
  {
    id: 'preventiva',
    name: 'Cuidado Preventivo',
    headline: 'Cuidado\nPreventivo',
    description:
      'Prevención proactiva con limpiezas, diagnóstico digital y acompañamiento continuo para mantener tu sonrisa sana durante todo el año.',
    image: '/images/servicio-preventiva.jpg',
    solutions: [
      'Limpiezas y profilaxis',
      'Sellantes y flúor',
      'Chequeos y diagnóstico digital',
      'Salud de encías y periodoncia',
    ],
  },
  {
    id: 'mas-alla',
    name: 'Más allá de la Sonrisa',
    headline: 'Más allá de\nla Sonrisa',
    description:
      'Atención experta en estética facial y salud del sueño, con tratamientos personalizados para tu comodidad, confianza y bienestar.',
    image: '/images/servicio-mas-alla.jpg',
    solutions: [
      'Neurotoxinas (estética y alivio ATM)',
      'Rellenos dérmicos',
      'Férulas nocturnas personalizadas',
      'Terapia con aparatos para la apnea del sueño',
    ],
  },
]

export interface TechItem {
  name: string
  image: string
}

export const TECHNOLOGY: TechItem[] = [
  { name: 'Escáner digital iTero', image: '/images/tech-scanner.jpg' },
  { name: 'Láser dental', image: '/images/tech-consultorio.jpg' },
  { name: 'Cámara intraoral', image: '/images/servicio-preventiva.jpg' },
  { name: 'Radiografía digital', image: '/images/tech-xray.jpg' },
  { name: 'Restauraciones CAD/CAM', image: '/images/tech-clinica.jpg' },
  { name: 'Tomografía 3D', image: '/images/tech-xray.jpg' },
]

export interface Doctor {
  name: string
  role: string
  bio: string
  image: string
}

export const TEAM: Doctor[] = [
  {
    name: 'Dr. Andrés Restrepo',
    role: 'Socio fundador',
    bio: 'Experto en odontología estética e implantes, reconocido por su precisión, empatía y sentido artístico. Crea sonrisas naturales con carillas avanzadas, implantes y rehabilitaciones completas.',
    image: '/images/equipo-1.jpg',
  },
  {
    name: 'Dra. Catalina Méndez',
    role: 'Socia',
    bio: 'Prostodoncista con más de 20 años de experiencia en restauraciones complejas y transformaciones de sonrisa. Combina maestría técnica con una visión estética excepcional.',
    image: '/images/equipo-2.jpg',
  },
  {
    name: 'Dr. Sebastián Torres',
    role: 'Socio',
    bio: 'Reconocido experto en odontología restauradora y cosmética avanzada. Fusiona innovación y arte para crear sonrisas funcionales, duraderas y naturalmente hermosas.',
    image: '/images/equipo-3.jpg',
  },
]

export interface Stat {
  value: string
  label: string
  tone: 'light' | 'mid' | 'dark'
}

export const STATS: Stat[] = [
  { value: '20', label: 'años de servicio', tone: 'dark' },
  { value: '8K', label: 'carillas colocadas', tone: 'light' },
  { value: '1.5K', label: 'horas de educación continua', tone: 'dark' },
  { value: '3', label: 'sedes en Bogotá', tone: 'mid' },
  { value: '12K+', label: 'pacientes satisfechos', tone: 'light' },
  { value: '15K', label: 'coronas colocadas', tone: 'light' },
]

export interface Testimonial {
  quote: string
  name: string
  location: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'El equipo es increíble, como siempre. Todos son amables y te hacen sentir bienvenido. El Dr. Restrepo se toma el tiempo de escuchar y brindar un servicio excepcional. La clínica se siente como casa.',
    name: 'María Fernanda Gómez',
    location: 'Sede Chapinero',
    avatar: '/images/avatar-1.jpg',
  },
  {
    quote:
      'Me hice el diseño de sonrisa y el resultado superó mis expectativas. Atención de primer nivel, tecnología impresionante y una calidez humana que no se encuentra en otra parte de Bogotá.',
    name: 'Camila Rodríguez',
    location: 'Sede Chicó',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote:
      'Desde la primera cita todo fue claro y sin dolor. La Dra. Méndez me explicó cada paso de mi rehabilitación. Hoy sonrío con total confianza. Recomiendo OdontoMed de ojos cerrados.',
    name: 'Jorge Andrés Peña',
    location: 'Sede Usaquén',
    avatar: '/images/avatar-3.jpg',
  },
]

export const MENU_LINKS = [
  { label: 'Formulario de paciente', href: '#contacto' },
  { label: 'Preguntas frecuentes', href: '#testimonios' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
]
