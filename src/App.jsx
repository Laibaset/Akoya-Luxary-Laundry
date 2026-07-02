import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import Swiperr from "./Components/Home/Swiperr";
import SignatureLines from "./Components/Home/SignatureLines";
import Landpag from "./Components/Home/Fragrance&Packaging"
import Lapage from "./Components/Home/Working";
import LandingP from "./Components/Home/AkoyaClub";
import ServicesPage from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Visionandmission from "./Pages/Visionandmission";
import Booking from "./Pages/Booking";
import ClientLogin from "./Pages/ClientLogin";
import CreateAccount from "./Pages/CreateAccount";
import Swiper from "swiper";

const Home = () => (
  <>
    <Swiperr />
    <SignatureLines />
    <Landpag />
    <Lapage />
    <LandingP />
  </>
);

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/vision-mission" element={<Layout><Visionandmission /></Layout>} />
          <Route path="/Booking" element={<Layout><Booking /></Layout>} />
          <Route path="/ClientLogin" element={<ClientLogin />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;