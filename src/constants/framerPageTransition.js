export const variants = {
   initial: { opacity: 0 },
   in: { opacity: 1 },
   out: { opacity: 0, y: -100 },
};

export const pageTransition = (delay) => {
   return {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      delay: delay
   }
};