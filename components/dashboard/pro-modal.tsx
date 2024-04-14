"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { useProModal } from "@/stores/pro-modal";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { TOOLS } from "@/constants";
import { SubscriptionButton } from "./subscription-button";

export const ProModal = () => {
  const proModal = useProModal();

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
            {TOOLS.map((tool) => (
              <Card
                key={tool.title}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("size-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.title}</div>
                </div>
                <Check className="text-primary size-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <SubscriptionButton isPro={false} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
