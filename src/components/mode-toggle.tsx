import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative group"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-secondary" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-secondary" />
      <span className="sr-only">Переключить тему</span>
      
      <div className="absolute invisible group-hover:visible bg-popover text-popover-foreground p-2 rounded-md -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-lg">
        <Typography.Small>
          {theme === "light" ? "Включить 🌙" : "Включить ☀️"}
        </Typography.Small>
      </div>
    </Button>
  );
}