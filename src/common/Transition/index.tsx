import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface TransitionProps extends React.PropsWithChildren {}

const VARIANTS = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const TRANSITION = {
  type: "tween",
  duration: 0.5,
};

export const Transition: React.FC<TransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        variants={VARIANTS}
        initial="initial"
        animate="enter"
        //exit="exit"
        transition={TRANSITION}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
