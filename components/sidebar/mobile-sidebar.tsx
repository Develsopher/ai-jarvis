"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebarStore } from "@/stores/sidebar-store";
import Sidebar from ".";

interface MobileSidebarProps {
  isPro: boolean;
  apiLimitCount: number;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isPro,
  apiLimitCount,
}) => {
  const { isOpen } = useSidebarStore();

  return (
    <Sheet open={isOpen}>
      <SheetContent
        side="left"
        className="w-screen border-none bg-black p-0 pt-8"
      >
        <Sidebar
          isPro={isPro}
          apiLimitCount={apiLimitCount}
          className="flex flex-col h-full justify-between"
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
