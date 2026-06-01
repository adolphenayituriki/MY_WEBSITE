import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PasswordGate from './components/PasswordGate.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import ConnectedLines from './components/ConnectedLines.jsx'
import AdminIcon from './components/AdminIcon.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={
          <PasswordGate>
            <ConnectedLines />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Navbar />
              <HomePage />
              <Footer />
              <AdminIcon />
            </div>
          </PasswordGate>
        } />
      </Routes>
    </BrowserRouter>
  )
}
