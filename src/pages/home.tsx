import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { RainbowButton } from "@/components/rainbow-button";
import { BouncyCard } from "@/components/bouncy-card";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <Typography.H1>
          Добро пожаловать на самый глупый сайт в мире! 🎪
        </Typography.H1>
        <Typography.Lead>
          Здесь нет ничего серьезного, только веселье и радость! 🎈
        </Typography.Lead>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BouncyCard
          emoji="🤪"
          title="Просто глупости"
          content="Нажми сюда, если хочешь увидеть обычные глупости. Ничего особенного, просто веселье!"
        />
        <BouncyCard
          emoji="🤡"
          title="Очень глупости"
          content="А здесь живут очень глупые вещи. Осторожно, можно лопнуть от смеха!"
        />
        <BouncyCard
          emoji="🌈"
          title="Домашняя страница"
          content="Ты уже здесь! Это самое безопасное место на сайте. Наверное..."
        />
      </div>

      <div className="flex justify-center gap-4">
        <RainbowButton
          onClick={() => navigate("/silly")}
          rainbowText="Ой, щекотно!"
        >
          Хочу глупости! 🤪
        </RainbowButton>
        <RainbowButton
          onClick={() => navigate("/very-silly")}
          variant="secondary"
          rainbowText="Я тебя предупреждал!"
        >
          Хочу ОЧЕНЬ глупости! 🤡
        </RainbowButton>
      </div>

      <motion.div
        className="text-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Typography.Muted>
          ⚠️ Предупреждение: этот сайт может вызвать неконтролируемые приступы
          смеха и желание показать его всем друзьям!
        </Typography.Muted>
      </motion.div>
    </div>
  );
}