import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SillyLoader } from "@/components/silly-loader";
import { Baby, Rocket, Star } from "lucide-react";

export function VerySilly() {
  const [isLoading, setIsLoading] = useState(false);
  const [danceParty, setDanceParty] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0);

  const handleSillyButton = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const emojis = ["🤪", "🤡", "🎈", "🎪", "🌈", "🦄", "🎠", "🎭"];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography.H1>
          ОЧЕНЬ глупая страница!!! 🤡
        </Typography.H1>
        <Typography.Lead>
          Внимание! Уровень глупости зашкаливает! 📈
        </Typography.Lead>
      </motion.div>

      {isLoading ? (
        <SillyLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="p-6 border rounded-lg bg-card"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Typography.H3 className="flex items-center gap-2 mb-4">
              <Rocket className="text-primary" />
              Кнопка бесполезности
            </Typography.H3>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                onClick={handleSillyButton}
                className="group"
              >
                <Baby className="mr-2 h-4 w-4 text-primary group-hover:text-primary" />
                Нажми меня! (Или нет?)
              </Button>
              <Typography.Small className="mt-2 block">
                Эта кнопка абсолютно бесполезна! 🎉
              </Typography.Small>
            </div>
          </motion.div>

          <motion.div
            className="p-6 border rounded-lg bg-card"
            whileHover={{ scale: 1.05 }}
          >
            <Typography.H3 className="flex items-center gap-2 mb-4">
              <Star className="text-primary" />
              Дискотека!
            </Typography.H3>
            <div className="text-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setDanceParty(!danceParty)}
              >
                Устроить дискотеку! 🕺💃
              </Button>
              <div className="mt-4 min-h-[100px] flex items-center justify-center">
                <AnimatePresence>
                  {danceParty && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        rotate: [0, 360],
                        scale: [1, 1.5, 1],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="text-4xl"
                    >
                      {emojis[Math.floor(Math.random() * emojis.length)]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          variant="outline"
          onClick={() => setConfettiCount((prev) => prev + 1)}
          className="group"
        >
          <motion.div
            animate={{
              rotate: confettiCount * 360,
            }}
            transition={{ duration: 0.5 }}
          >
            🎉
          </motion.div>
          Конфетти! (Нажато: {confettiCount})
        </Button>
      </div>

      <motion.div
        className="text-center"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Typography.Muted>
          Поздравляем! Вы достигли максимального уровня глупости! 🏆
        </Typography.Muted>
      </motion.div>
    </div>
  );
}