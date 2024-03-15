import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
import { useTheme } from "../context/themeContext";

const Navbar = () => {
  const { theme, setTheme } = useTheme() as {
    theme: string;
    setTheme: (theme: string) => void;
  };

  const setThemeForPage = () => {
    setTheme(theme === "light" ? "dark" : "light");
    gsap.to(".rotateSvg", {
      transform: `${theme === "light" ? "rotate(90deg)" : "rotate(0)"}`,
    });
  };

  useEffect(() => {
    gsap.to(".myName", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".myName",
        scroller: "body",
        start: "top -95%",
        scrub: true,
      },
    });
  }, []);

  return (
    <nav
      data-scroll
      className="flex fixed h-30 z-[1000] py-4 px-[5vw] w-full  items-start justify-between bg-[var(--background)] text-[var(--text-color)]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        className="relative myName cursor-pointer"
      >
        <h1 className="font-hand text-[6vh]">Yaswanth</h1>
        <h1 className="absolute font-mori text-[1.5vh] tracking-[.5em] right-0 bottom-[0.2em] ">
          mallisetti
        </h1>
      </motion.div>
      <motion.div
        data-scroll
        initial={{ y: "-250%" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center z-50 items-center gap-3 bg-[var(--navbar-bg)] rounded-lg px-4 drop-shadow-md "
      >
        <button onClick={setThemeForPage} className="rotateSvg h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            width="50"
          >
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <circle cx="12" cy="7.5" r="0.5" fill="currentColor" />
            <circle cx="12" cy="16.5" r="0.5" fill="currentColor" />
            <circle cx="7.5" cy="12" r="0.5" fill="currentColor" />
            <circle cx="16.5" cy="12" r="0.5" fill="currentColor" />
            <circle cx="9" cy="9" r="0.5" fill="currentColor" />
            <circle cx="15" cy="15" r="0.5" fill="currentColor" />
            <circle cx="9" cy="15" r="0.5" fill="currentColor" />
            <circle cx="15" cy="9" r="0.5" fill="currentColor" />
          </svg>
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
