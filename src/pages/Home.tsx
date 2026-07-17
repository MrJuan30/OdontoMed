import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Technology from '../sections/Technology'
import Team from '../sections/Team'
import Stats from '../sections/Stats'
import Testimonials from '../sections/Testimonials'
import Cta from '../sections/Cta'
import Footer from '../sections/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import '../App.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F1EC]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Technology />
        <Team />
        <Stats />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
