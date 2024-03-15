import gsap from "gsap";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    gsap.to(".child", {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: ".parentScroll",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="h-screen parentScroll py-32 flex items-center justify-center">
      <div className="child border-2 border-white-100 w-full h-full flex items-center gap-10 whitespace-nowrap">
        {Array.from({ length: 50 }).map((_, index) => {
          return <div key={index}> Hello World </div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
