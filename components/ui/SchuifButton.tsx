"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import SchuifBtnPijl from "@/public/icons/schuifbtn-pijl.svg";

interface SchuifBtnProps {
  text: string;
  href: string;
}

const SchuifButton = ({ text, href }: SchuifBtnProps) => {
  const x = useMotionValue(0);
  const maxSlide = 165;
  const opacity = useTransform(x, [0, maxSlide], [1, 0]);

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (latest >= maxSlide) {
        if (href.startsWith("mailto:")) {
          window.location.href = href;
        } else {
          window.open(href, "_self");
        }
      }
    });

    return () => unsubscribe();
  }, [x, href]);

  return (
    <div className="border border-black w-[226px] h-[59px] rounded-full flex items-center p-1 ">
      <div className="flex items-center justify-center gap-6">
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: maxSlide }}
          dragElastic={0.1}
          onDragEnd={() => {
            const currentX = x.get();
            if (currentX < maxSlide) {
              animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
            }
          }}
          className="border border-black w-12 h-12 rounded-full flex items-center justify-center bg-white z-10"
        >
          <SchuifBtnPijl />
        </motion.div>
        <motion.p className="z-0" style={{ opacity }}>
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default SchuifButton;
