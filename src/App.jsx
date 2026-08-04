import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import ConnectedLines from './components/ConnectedLines.jsx'
import AdminIcon from './components/AdminIcon.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={
          <>
            <ConnectedLines />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Navbar />
              <HomePage />
              <Footer />
              <AdminIcon />
            </div>
            <FloatingButtons />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}
