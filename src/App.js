import "./App.css"
import React from 'react';
import Hero from './components/Hero'; // Adjust path if necessary
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
//import Program from './components/Program/Program'; // Correct relative path

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
