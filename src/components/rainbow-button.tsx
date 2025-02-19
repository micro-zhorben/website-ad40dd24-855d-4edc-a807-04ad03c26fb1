import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends ButtonProps {
  rainbowText?: string;
}

export function RainbowButton({
  children,
  rainbowText,
  className,
  ...props
}: RainbowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <Button
        className={cn("transition-all duration-300", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </Button>
      
      {rainbowText && isHovered && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <Typography.Small className="animate-bounce bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold">
            {rainbowText}
          </Typography.Small>
        </div>
      )}
    </div>
  );
}