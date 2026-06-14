import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId } from '../lib/scroll'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import ProductDemo from '../components/ProductDemo'
import Features from '../components/Features'
import BookShowcase from '../components/BookShowcase'
import Comparison from '../components/Comparison'
import DualAudience from '../components/DualAudience'
import FAQ from '../components/FAQ'
import Pricing from '../components/Pricing'
import FinalCTA from '../components/FinalCTA'

export default function LandingPage({ onOpenWaitlist }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    requestAnimationFrame(() => scrollToId(id))
  }, [hash])

  return (
    <main>
      <Hero onOpenWaitlist={onOpenWaitlist} />
      <Problem />
      <HowItWorks />
      <ProductDemo />
      <Features />
      <BookShowcase onOpenWaitlist={onOpenWaitlist} />
      <Comparison />
      <DualAudience />
      <Pricing onOpenWaitlist={onOpenWaitlist} />
      <FAQ />
      <FinalCTA onOpenWaitlist={onOpenWaitlist} />
    </main>
  )
}
