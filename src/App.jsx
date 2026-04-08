import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const openWaitlist = () => setWaitlistOpen(true)

  return (
    <BrowserRouter>
      <Navbar onOpenWaitlist={openWaitlist} />
      <Routes>
        <Route path="/" element={<LandingPage onOpenWaitlist={openWaitlist} />} />
        <Route path="/about" element={<AboutPage onOpenWaitlist={openWaitlist} />} />
      </Routes>
      <Footer onOpenWaitlist={openWaitlist} />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </BrowserRouter>
  )
}
