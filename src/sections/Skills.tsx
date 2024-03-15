import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const ParentScroll = useRef(null);
  const childScroll = useRef(null);

  useEffect(() => {
    gsap.to(childScroll.current, {
      scale: 1.3,
      scrollTrigger: {
        trigger: ParentScroll.current,
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });
  }, [childScroll, ParentScroll]);

  return (
    <div
      ref={ParentScroll}
      id="scrollparent"
      className="parentScroll h-screen py-[15vh] px-2 relative"
    >
      {/* <div className="childScroll flex h-32 flex-row gap-10 items-center whitespace-nowrap">
        {Array.from({ length: 30 }).map((_, index) => {
          return (
            <span className="spans" key={index}>
              Hello world!
            </span>
          );
        })}
      </div> */}
      <div
        ref={childScroll}
        className="h-20 boxxx w-20 rounded-md bg-sky-100"
      ></div>
    </div>
  );
};

export default Skills;
