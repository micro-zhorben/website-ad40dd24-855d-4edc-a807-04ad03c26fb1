import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface BouncyCardProps {
  title: string;
  content: string;
  emoji: string;
}

export function BouncyCard({ title, content, emoji }: BouncyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="p-6 cursor-pointer">
        <div className="text-4xl mb-4">{emoji}</div>
        <Typography.H3 className="mb-2">{title}</Typography.H3>
        <Typography.P>{content}</Typography.P>
      </Card>
    </motion.div>
  );
}