import React from "react";
import { motion } from "framer-motion";

interface FadeInProps extends React.PropsWithChildren {
  delay?: number;
  direction?: "up" | "down" | "left";
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "down",
  className = "",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform:
          direction === "down"
            ? "translateY(-10px)"
            : direction === "left"
            ? "translateX(10px)"
            : "translateY(10px)",
      }}
      animate={{ opacity: 1, transform: "translateY(0px) translateX(0px)" }}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
