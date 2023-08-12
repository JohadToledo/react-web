import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
    {/* <App /> */}
    <Projects />
      {/* <About />
      <Skills />
      <Testimonials />
      <Contact />  */}
  </React.StrictMode>
);
