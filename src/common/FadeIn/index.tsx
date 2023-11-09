import React from "react";
import { motion } from "framer-motion";

interface FadeInProps extends React.PropsWithChildren {
  delay?: number;
  direction?: "up" | "down";
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "down",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform:
          direction === "down" ? "translateY(-10px)" : "translateY(10px)",
      }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
};