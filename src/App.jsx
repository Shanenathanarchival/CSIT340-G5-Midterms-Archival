import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {



  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;