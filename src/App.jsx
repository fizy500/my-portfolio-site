import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='resume' element={<Resume />} />
        <Route path='skills' element={<Skills />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
