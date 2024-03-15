/* eslint-disable @typescript-eslint/no-unused-vars */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "./App.css";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Desc from "./sections/Desc";
import Name from "./sections/Name";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const LocomotiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: LocomotiveRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <main
        data-scroll
        ref={LocomotiveRef}
        className="min-h-screen select-none bg-[var(--background)] text-[var(--text-color)] overflow-hidden transition-all duration-500"
      >
        <div className="h-screen">
          <Name />
          <Marquee />
        </div>
        <Desc />
      </main>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
