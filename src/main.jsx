import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Projects />
    <Skills />
    <Contact />
    {/* <About />
      <Testimonials />  */}
  </React.StrictMode>
);
