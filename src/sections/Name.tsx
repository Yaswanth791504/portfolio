import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Svg2 from "../svgs/Svg2";
import Svg1 from "../svgs/svg1";

const Name = () => {
  const timeLine = gsap.timeline();
  const timeLine2 = gsap.timeline();
  const timeLine3 = gsap.timeline();
  const rotateTimeLine = gsap.timeline();
  const handleHover = useRef(null);

  useEffect(() => {
    timeLine
      .to(".value1y", {
        scaleY: 1,
        delay: 0.5,
        opacity: 1,
      })
      .to(".value1a", {
        y: 0,
      })
      .to(".svg2", {
        x: 0,
        rotate: 360,
      })
      .to(
        ".value1s",
        {
          y: 0,
        },
        "-=0.5"
      )
      .to(".value1h", {
        x: 0,
      })

      .to(".value1w, .valueRotate", {
        x: 0,
      })
      .to(".valueRotate", {
        rotate: 180,
        duration: 1,
      })
      .to(".valueRotate", {
        y: 300,
      })
      .to(
        ".value2a",
        {
          y: 0,
        },
        "-=0"
      )

      .to(
        ".value1a",
        {
          scaleX: -1,
        },
        "-=1"
      )
      .to(".value1a", {
        scaleX: 1,
      });
    timeLine2
      .to(".value1one", {
        opacity: 1,
        delay: 1,
      })
      .to(".value1one", {
        y: "-100%",
        delay: 1,
      })
      .to(".value1n", {
        y: 0,
      });
    timeLine3
      .to(".value2two", {
        opacity: 1,
        delay: 1,
      })
      .to(".value2two", {
        y: "-100%",
        delay: 1,
        repeat: 1,
      })
      .to(".value1t", {
        y: 0,
      });
    rotateTimeLine.to(".svg2", {
      rotate: 90,
      duration: 1,
      repeat: -1,
    });

    handleHover.current.addEventListener("mouseenter", () => {
      gsap.to(".scaleClass", {
        scale: 0.9,
      });
    });

    handleHover.current.addEventListener("mouseleave", () => {
      gsap.to(".scaleClass", {
        scale: 1,
      });
    });
  }, [timeLine, timeLine2, timeLine3, rotateTimeLine]);

  return (
    <div className="min-h-fit font-mori w-[100vw] py-20 px-10 pt-[110px] flex justify-center select-none">
      <div
        ref={handleHover}
        className="scaleClass font-lighter-class text-[15vw] overflow-hidden font-[500] flex relative tracking-tight"
      >
        <div className=" flex items-start justify-center overflow-hidden">
          <motion.h1
            initial={{ scaleY: -1, opacity: 0 }}
            className="value1y h-[5vm]"
          >
            y
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden">
          <Svg2 />
          <motion.h1
            initial={{ y: "-200%" }}
            className="flex items-start justify-center value1a h-[5vm] text-[red]"
          >
            a
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden">
          <motion.h1 initial={{ y: "200%" }} className="value1s h-[5vm]">
            s
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden">
          <motion.h1 initial={{ x: "-105%" }} className="value1w h-[5vm]">
            w
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden relative">
          <Svg1 />
          <motion.h1 initial={{ y: "200%" }} className="value2a h-[5vm]">
            a
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden relative">
          <motion.h1
            initial={{ opacity: 0 }}
            className="value1one h-30 absolute top-[0] z-0 h-[5vm] text-[var(--use-red)]"
          >
            2
          </motion.h1>
          <motion.h1 initial={{ y: "100%" }} className="value1n h-[5vm]">
            n
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden relative">
          <motion.h1
            initial={{ opacity: 0 }}
            className="value2two h-30 absolute top-[0] z-0 h-[5vm] text-[var(--use-red)]"
          >
            1
          </motion.h1>
          <motion.h1 initial={{ y: "100%" }} className="value1t h-[2vm]">
            t
          </motion.h1>
        </div>
        <div className="flex items-start justify-center overflow-hidden">
          <motion.h1 initial={{ x: "105%" }} className="value1h h-[5vm]">
            h
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Name;
