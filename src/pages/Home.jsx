import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Admissions from '../components/Admissions'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <Modal />
    </>
  )
}

export default Home
