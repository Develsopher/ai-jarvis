"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Code2Icon,
  FileVideoIcon,
  MessageCircleMoreIcon,
  Music2,
  Palette,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Let's Chat",
    icon: MessageCircleMoreIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/conversation",
  },
  {
    label: "Write the code",
    icon: Code2Icon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/code",
  },
  {
    label: "Draw images",
    icon: Palette,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/image",
  },
  {
    label: "Create videos",
    icon: FileVideoIcon,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    href: "/video",
  },
  {
    label: "Play some music",
    icon: Music2,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/music",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          <span className="underline decoration-cyan-500 decoration-4">
            Hey, Jarvis!
          </span>
          What can you do for me?
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Jarvis will help you with everything!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="size-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
