import { useState, createContext, } from "react";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";
const SenderContext = createContext();

const ContextApi = () => {
  // const [StateData, setStateData] = useState("");
  const [sender, SetSender] = useState('');

  return (
    <SenderContext.Provider value={{ sender, SetSender }}>
      {/* <Contact />
      <ThankYou /> */}
    </SenderContext.Provider>
  );
};

export default ContextApi;
