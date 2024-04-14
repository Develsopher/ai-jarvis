"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

interface MobileSidebarProps {
  apiLimitcount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitcount = 0,
  isPro = false,
}: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetContent
        side="left"
        className="w-screen border-none bg-black p-0 pt-8"
      >
        <Sidebar apiLimitCount={apiLimitcount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
