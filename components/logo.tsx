import Image from "next/image";
import { cn } from "@/lib/utils";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "600", subsets: ["latin"] });

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Image src="/logo.png" alt="logo" width={30} height={30} />
      <h1 className={cn("ml-4 text-3xl font-bold", orbitron.className)}>
        Jarvis
      </h1>
    </div>
  );
};

export default Logo;
