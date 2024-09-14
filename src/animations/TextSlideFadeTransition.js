"use client";
import { motion } from "framer-motion";

const TextSlideFadeTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default TextSlideFadeTransition;
