import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "600", subsets: ["latin"] });

export const BotAvatar = () => {
  return (
    <h1 className={cn("text-sm font-bold", orbitron.className)}>Jarvis</h1>
  );
};
