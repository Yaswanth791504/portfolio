import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const VideoComponent = ({
  name,
  link,
  invert,
}: {
  name: string;
  link: string;
  invert: boolean;
}) => {
  const videoEle = useRef<HTMLVideoElement | null>(null);
  const companion = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoEle.current) {
      videoEle.current.addEventListener("mousemove", (e) => {
        gsap.to(companion.current, {
          x: e.offsetX - 57.5,
          y: e.offsetY - 57.5,
          duration: 0.5,
        });
      });
      videoEle.current.addEventListener("mouseenter", () => {
        gsap.to(companion.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
        });
      });
      videoEle.current.addEventListener("mouseleave", () => {
        gsap.to(companion.current, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
        });
      });
    }
  }, []);

  return (
    <div className="h-full rounded-2xl overflow-hidden relative ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        ref={companion}
        className={`h-32 w-32 flex items-center font-semibold justify-center rounded-full absolute ${
          invert ? "bg-[#fff]" : "bg-[#000]"
        } ${invert ? "text-[#000]" : "text-[#fff]"}`}
      >
        {name}
      </motion.div>
      <video
        className="cursor-none h-full "
        ref={videoEle}
        autoPlay
        loop
        muted
        src={link}
      ></video>
    </div>
  );
};

export default VideoComponent;
