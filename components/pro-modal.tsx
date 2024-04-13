"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Code2Icon,
  FileVideoIcon,
  MessageCircleMoreIcon,
  Music2,
  Palette,
  Check,
  Zap,
} from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import { set } from "zod";

const tools = [
  {
    label: "Let's Chat",
    icon: MessageCircleMoreIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Write the code",
    icon: Code2Icon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Draw images",
    icon: Palette,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Create videos",
    icon: FileVideoIcon,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: "Play some music",
    icon: Music2,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
];

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, "STRIPE_CLIENT_ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to jarvis
              <Badge className="uppercase text-sm py-1" variant="pro">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("size-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary size-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            variant="pro"
            className="w-full"
          >
            Upgrade
            <Zap className="size-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
