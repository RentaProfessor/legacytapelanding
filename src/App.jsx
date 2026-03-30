import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import ProductDemo from './components/ProductDemo'
import Features from './components/Features'
import BookShowcase from './components/BookShowcase'
import Comparison from './components/Comparison'
import DualAudience from './components/DualAudience'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const openWaitlist = () => setWaitlistOpen(true)

  return (
    <>
      <Navbar onOpenWaitlist={openWaitlist} />
      <main>
        <Hero onOpenWaitlist={openWaitlist} />
        <Problem />
        <HowItWorks />
        <ProductDemo />
        <Features />
        <BookShowcase onOpenWaitlist={openWaitlist} />
        <Comparison />
        <DualAudience />
        <SocialProof />
        <Pricing onOpenWaitlist={openWaitlist} />
        <FAQ />
        <FinalCTA onOpenWaitlist={openWaitlist} />
      </main>
      <Footer onOpenWaitlist={openWaitlist} />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  )
}
