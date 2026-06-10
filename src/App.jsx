import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'

// React Router keeps the scroll position across route changes; reset it
// unless we're navigating to an in-page anchor
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const openWaitlist = () => setWaitlistOpen(true)

  return (
    <BrowserRouter>
      <ScrollToTop />
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
