import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Baby, Crown, Rocket } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function SillyHeader() {
  const [isWobbling, setIsWobbling] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <motion.div
            animate={{ rotate: isWobbling ? [0, -10, 10, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsWobbling(true)}
            onMouseLeave={() => setIsWobbling(false)}
          >
            <Link to="/" className="flex items-center space-x-2 text-primary">
              <Baby className="h-6 w-6" />
              <Typography.Large>Глупый Сайт</Typography.Large>
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/silly" className="text-foreground">
                <Crown className="mr-2 h-4 w-4" />
                Глупости
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/very-silly" className="text-foreground">
                <Rocket className="mr-2 h-4 w-4" />
                Очень глупости
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}