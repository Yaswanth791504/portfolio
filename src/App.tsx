/* eslint-disable @typescript-eslint/no-unused-vars */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Desc from "./sections/Desc";
import Name from "./sections/Name";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen select-none bg-[var(--background)] text-[var(--text-color)] overflow-hidden transition-all duration-500">
        <div className="h-screen">
          <Name />
          <Marquee />
        </div>
        <Desc />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
