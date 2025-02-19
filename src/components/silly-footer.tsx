import { Heart } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function SillyFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <Typography.P className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Построено с{" "}
          <Heart className="inline-block h-4 w-4 text-destructive animate-pulse" />{" "}
          и кучей глупостей
        </Typography.P>
        <Typography.P className="text-center text-sm leading-loose text-muted-foreground md:text-right">
          Все права защищены клоунами 🤡
        </Typography.P>
      </div>
    </footer>
  );
}