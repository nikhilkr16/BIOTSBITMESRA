import ContactForm from '../components/Contact'
import EventsSection from '../components/EventSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Map from '../components/MapEmbed'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <EventsSection />
      <Testimonials />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
