"use client";
import { motion } from "framer-motion";

const FadeInTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInTransition;
