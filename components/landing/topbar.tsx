"use client";
import { Bot, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const orbitron = Orbitron({ weight: "600", subsets: ["latin"] });

const Topbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="border-b w-full p-4">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-end">
          <Bot size={40} />
          <h1 className={cn("ml-4 text-3xl font-bold", orbitron.className)}>
            Jarvis
          </h1>
        </Link>
        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button className="gradient-btn">
              <span className="mr-2">Get Started</span>
              <Sparkles />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
