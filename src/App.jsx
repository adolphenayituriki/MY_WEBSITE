import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ConnectedLines from './components/ConnectedLines.jsx'

export default function App() {
  return (
    <>
      <ConnectedLines />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  )
}
