import Features from './Features'
import Navbar from './Navbar'
import About from './screens/About'
import Contact from './screens/Contact'
import Footer from './screens/Footer'
import Hero from './screens/Hero'
import Story from './screens/Story'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
    <Navbar />
     <Hero />
    <About />
    <Features />
    <Story />
    <Contact />
    <Footer />
    </main>
  )
}
export default App