"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

const Topbar = () => {
  const { handleOpenOnMobile } = useSidebarStore();

  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30",
        "lg:hidden",
      )}
    >
      <Logo />
      <Button variant="ghost" size="icon" onClick={handleOpenOnMobile}>
        <Menu />
      </Button>
    </div>
  );
};

export default Topbar;
