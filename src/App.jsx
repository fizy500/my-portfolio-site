import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";
// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='portfolio' element={<Portfolio />} /> */}
        <Route path='contact' element={<Contact />} />
        <Route path='thanks' element={<ThankYou/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
