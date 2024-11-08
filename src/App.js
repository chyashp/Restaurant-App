import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu"
import Footer from "./components/Footer";
import "./App.css";
import Testimonials from "./components/Testimonials";
import OurStory from "./components/OurStory";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Menu/>
      <OurStory/>
      <Testimonials/>
      <Footer/>
    </Router>
  );
}

export default App;
