
import "./App.css";
import Analytics from "./components/Analytics";
import CTA from "./components/CTA";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import PlatformAccess from "./components/PlatformAccess";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <div className="flex flex-col md:px-30 px-3 items-center justify-center bg-bg-page overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Featured />
      <Analytics />
      <PlatformAccess />
      <Testimonials />
      <CTA />
      <Footer />

    </div>
  )
}

export default App
