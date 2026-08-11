import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import Home1 from './pages/Home1.jsx'
import Home2 from './pages/Home2.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'


export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-navy-dark">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}