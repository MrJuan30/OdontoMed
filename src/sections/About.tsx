import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="nosotros" className="bg-[#F3F1EC] py-28 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0E6E5C]">Nuestro objetivo</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={120} className="lg:col-span-4">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/about.jpg"
                alt="Especialista OdontoMed"
                className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8 lg:pl-10">
            <Reveal>
              <h2 className="font-display font-light leading-[1.04] tracking-tight text-[clamp(2rem,4.6vw,4.3rem)] text-[#101014]">
                Brindar atención dental y estética de <em>clase mundial</em> a través de técnicas
                avanzadas, tratamientos personalizados y un nivel de servicio que hace sentir{' '}
                <em>valioso</em> a cada paciente.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#101014]/65">
                Con décadas de experiencia combinada y formación continua, nuestro equipo ofrece una
                atención basada en el conocimiento, la precisión y una dedicación inquebrantable a la
                excelencia.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href="#equipo"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#101014] px-8 py-4 text-sm font-semibold text-[#F3F1EC] transition-all hover:scale-[1.03]"
              >
                Conócenos
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
        </div>
      </div>
    </section>
  )
}
