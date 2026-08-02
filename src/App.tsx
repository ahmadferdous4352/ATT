import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import EthicsPage from './pages/EthicsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0E0E0E] text-[#F2F2F2] overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ethics" element={<EthicsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
