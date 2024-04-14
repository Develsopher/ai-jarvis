import Image from "next/image";
import { cn } from "@/lib/utils";
import { Orbitron } from "next/font/google";
import { Bot } from "lucide-react";

const orbitron = Orbitron({ weight: "600", subsets: ["latin"] });

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-end", className)}>
      <Bot size={40} />
      <h1 className={cn("ml-2 text-3xl font-bold", orbitron.className)}>
        Jarvis
      </h1>
    </div>
  );
};

export default Logo;
