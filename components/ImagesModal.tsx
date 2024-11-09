"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  const images = [
    "/retrogarage.png",
    "/sonorite.png",
    "/creative studio.png",
    "/applelr.png",
    "/sankoilr.png",
  ];

  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="flex justify-center items-center">
        {images.map((image, idx) => (
          <motion.div
            key={"image" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="projetos imagens"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-52 md:w-48 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
