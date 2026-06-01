import PasswordGate from './components/PasswordGate.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ConnectedLines from './components/ConnectedLines.jsx'

export default function App() {
  return (
    <PasswordGate>
      <ConnectedLines />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </PasswordGate>
  )
}
