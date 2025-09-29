import "./App.css";

import { About } from "./About";
import { Stacks } from "./Stacks";
import { Reviews } from "./Reviews";
import ContactMe from "./ContactMe";
import { Hero } from "./Hero";
import { TextsSection } from "./TextsSection";

function App() {
  return (
    <div className=" text-slate-200">
      {/* Hero Section */}
      <Hero />

      {/* Texts  */}
      <TextsSection />

      {/* About Section */}
      <About />

      {/* Stacks */}
      <Stacks />

      {/* Reviews */}
      <Reviews />

      {/* Contact Me */}
      <ContactMe />
      {/* <div className="h-screen"></div> */}
    </div>
  );
}

export default App;
