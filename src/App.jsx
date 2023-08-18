import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";

export const SenderContext = createContext();

function App() {
  const [handlestate, setHandlestate] = useState("");
  // const [sender, SetSender] = useState(handlestate);


const handleStateChange = () => {
  setHandlestate()
}

  const capitalizeSender = () => {
    SetSender([0].toUpperCase() + SetSender.slice(1));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='contact'
          element={
            // <SenderContext.Provider value={{ sender, capitalizeSender }}>
              <Contact handlestate={handleStateChange} />
              // <ThankYou />
            // </SenderContext.Provider>
          }
        />
        <Route path='thanks' element={<ThankYou handlestate={handlestate} />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
