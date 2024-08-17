import './App.css'
import About from './components/About/About'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar'
import Technology from './components/Technologies/Technology'

function App() {


  return (
    <main className='overflow-x-hidden  text-neutral-300 antialiased selection:to-blue-600 selection:text-blue-300 '>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        
        </div>

      </div>
      

      <div className='container mx-auto px-8 '>
      <Navbar />
      <HeroSection/>
      <About/>
      <Technology/>
      </div>

      

    </main>
  )
}

export default App
