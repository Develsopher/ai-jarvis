"use client";

import Image from "next/image";

import { useSidebarStore } from "@/stores/sidebar-store";

const SidebarToggle = () => {
  const { isMinimal, handleChangeSidebar } = useSidebarStore();

  return (
    <div>
      <div
        className="cursor-pointer hidden lg:block"
        is-navbar-minimal={isMinimal ? "true" : undefined}
        onClick={handleChangeSidebar}
      >
        <Image
          src={`/icons/menu-${isMinimal ? "open" : "close"}.svg`}
          width={24}
          height={24}
          alt="navbar icon"
        />
      </div>
    </div>
  );
};

export default SidebarToggle;
