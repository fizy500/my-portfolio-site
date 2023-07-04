// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./components/Header";
// import Home from "./components/Home";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Home /> */}
      <Skills />
      <Articles />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
