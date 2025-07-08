
import "./App.css";
import Analytics from "./components/Analytics";
import Featured from "./components/Featured";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="flex flex-col px-30 items-center justify-center bg-bg-page ">
      <Navbar />
      <Hero />
      <Featured />
      <Analytics />

    </div>
  )
}

export default App
