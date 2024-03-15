import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MouseCompanion = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e): void => {
      setMouse({ x: e.pageX, y: e.pageY });
    });
  }, [mouse]);

  return (
    <motion.div
      data-scroll
      animate={{ x: mouse.x, y: mouse.y }}
      className="h-10 w-10 text-xl z-[100] rounded-full bg-[var(--use-red)] flex items-center justify-center companion absolute"
    ></motion.div>
  );
};

export default MouseCompanion;
