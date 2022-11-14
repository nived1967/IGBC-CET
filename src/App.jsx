import React from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Events from "./components/Event";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Team from "./components/Team";
import './styles/styles.css';
import './styles/styles.scss';

function App() {
  return (
    <div class="bg">
      <LandingPage />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



// WEBPACK FOOTER //
// ./src/components/App.jsx