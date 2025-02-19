import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Baby, Crown, Star } from "lucide-react";

export function Silly() {
  const [bounceCount, setBounceCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const jokes = [
    "Почему программисты не любят природу? Там слишком много багов! 🐛",
    "Как называется группа из 8 хоббитов? Хоббайт! 🧙‍♂️",
    "Что сказал один утюг другому? Давай погладим! 👕",
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography.H1>Страница глупостей 🤪</Typography.H1>
        <Typography.Lead>
          Здесь живут обычные глупости. Ничего особенного!
        </Typography.Lead>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="p-6 border rounded-lg bg-card"
          whileHover={{ scale: 1.05 }}
        >
          <Typography.H3 className="flex items-center gap-2 mb-4">
            <Baby className="text-primary" />
            Счётчик прыжков
          </Typography.H3>
          <div className="text-center">
            <motion.div
              animate={{ y: bounceCount > 0 ? [0, -20, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography.H2>🦘 {bounceCount}</Typography.H2>
            </motion.div>
            <Button
              className="mt-4"
              onClick={() => setBounceCount((prev) => prev + 1)}
            >
              Прыгнуть!
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="p-6 border rounded-lg bg-card"
          whileHover={{ scale: 1.05 }}
        >
          <Typography.H3 className="flex items-center gap-2 mb-4">
            <Crown className="text-primary" />
            Случайная шутка
          </Typography.H3>
          <Typography.P className="text-center mb-4">
            {jokes[Math.floor(Math.random() * jokes.length)]}
          </Typography.P>
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setIsSpinning(true)}
              className="group"
            >
              <motion.div
                animate={{ rotate: isSpinning ? 360 : 0 }}
                onAnimationComplete={() => setIsSpinning(false)}
                transition={{ duration: 1 }}
              >
                <Star className="mr-2 h-4 w-4 text-primary group-hover:text-primary" />
              </motion.div>
              Ещё шутку!
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Typography.Muted>
          Если вам показалось это глупым, то вы ещё не видели страницу ОЧЕНЬ
          глупостей! 🎪
        </Typography.Muted>
      </motion.div>
    </div>
  );
}