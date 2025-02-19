import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

export function SillyLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="flex space-x-4">
        {["🤪", "🤡", "🎈", "🎪", "🌈"].map((emoji, index) => (
          <motion.div
            key={index}
            transition={bounceTransition}
            animate={{
              y: ["0%", "-50%"],
            }}
            style={{ fontSize: "2rem" }}
            className="cursor-pointer"
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      <Typography.P className="mt-4 animate-pulse">
        Загружаем глупости...
      </Typography.P>
    </div>
  );
}