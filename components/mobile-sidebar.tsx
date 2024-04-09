"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";
import { useState, useEffect } from "react";

interface MobileSidebarProps {
  apiLimitcount: number;
}

const MobileSidebar = ({ apiLimitcount }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-6 md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitcount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
