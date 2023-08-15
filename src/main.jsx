import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Projects />
    <Skills />
    <Contact />
      {/* <About />
      <Testimonials />
      <Contact />  */}
  </React.StrictMode>
);
