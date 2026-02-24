import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; // import your footer
import LandingPage from "./Components/LandingPage";
import LP from "./Components/LandingPage part2";
import Landpag from "./Components/LandingPage Part3";
import Lapage from "./Components/Landingpagepaart4";
import LandingP from "./Components/LandingPagepart5";
import AkoyaLuxuryLaundry from "./Components/Footer";
import ServicesPage from "./Pages/Services"; // renamed to avoid conflict
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Visionandmission from "./Pages/Visionandmission"

const Home = () => {
  return (
    <>
      <LandingPage />
      <LP />
      <Landpag />
      <Lapage />
      <LandingP />
      <AkoyaLuxuryLaundry />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar appears on every page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision-mission" element={<Visionandmission />} />
      </Routes>
      <Footer/>


     {/* Footer appears on every page */}
    </BrowserRouter>
  );
};

export default App;