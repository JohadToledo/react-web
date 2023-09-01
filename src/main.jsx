import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
// import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Portfolio />
    {/* <Projects /> */}
    <Skills />
    <Contact />
    <Footer />
      {/*<About />
      <Testimonials />  */}
  </React.StrictMode>
);
