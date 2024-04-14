"use client";

import { Card } from "@/components/ui/card";
import { TOOLS } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          <span className="underline decoration-cyan-500 decoration-4">
            Hey, Jarvis!&nbsp;
          </span>
          What can you do for me?
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Jarvis will help you with everything!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {TOOLS.map((tool) => (
          <Card
            onClick={() => router.push(tool.url)}
            key={tool.url}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.title}</div>
            </div>
            <ArrowRight className="size-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
