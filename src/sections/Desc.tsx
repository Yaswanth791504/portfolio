import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Desc = () => {
  const mouseComapnion = useRef(null);

  useEffect(() => {
    if (mouseComapnion.current) {
      (mouseComapnion.current as HTMLElement).addEventListener(
        "mousemove",
        (e) => {
          const { clientX, clientY } = e;
          const mouseX = (clientX / window.innerWidth) * 100;
          const mouseY = (clientY / window.innerHeight) * 100;

          gsap.to(".bunAnimate", {
            x: (mouseX - 50) / 5,
            y: (mouseY - 50) / 5,
            duration: 0.3,
            ease: "power1.out",
          });
        }
      );
    }
  });

  useEffect(() => {
    gsap.to(".desc, .bunAnimate", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".desc",
        scroller: "body",
        start: "top 60%",
        end: "end 20%",
        scrub: 5,
      },
    });
  }, []);

  return (
    <div
      ref={mouseComapnion}
      className="h-screen relative mouseComapnion flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        className="desc text-[3vw] min-h-32 w-[70%] text-center leading-tight"
      >
        I'm a <br /> passionate
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="firstText fullStackName inline text-[var(--use-red)] font-semibold py-1 mx-2"
        >
          Full Stack Developer
        </motion.h1>
        with a love for crafting seamless, innovative digital experiences. With
        over of experience in the tech industry, I've honed my skills to bridge
        the gap between sophisticated backend logic and intuitive frontend
        design and backend workspace.
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        className="absolute bottom-[10vh] right-[20vw] bunAnimate  transform rotate-45"
      >
        <img
          src="https://gsap.com/tf-assets/worm-e8f0c8f6.png"
          style={{
            height: "20vh",
            transform: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            visibility: "inherit",
          }}
        ></img>
      </motion.div>
    </div>
  );
};

export default Desc;
