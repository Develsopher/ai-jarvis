"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { NAVIGATIONS } from "@/constants";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";

const Navigation = () => {
  const pathname = usePathname();
  const { isMinimal, handleClose } = useSidebarStore();

  return (
    <div className="px-4">
      {NAVIGATIONS.map((tool, index) => (
        <div key={index} className="mb-2">
          <Link href={tool.url} onClick={handleClose}>
            <div
              className={cn(
                "flex items-center py-1 rounded-lg px-5 opacity-70",
                "hover:opacity-100",
                isMinimal && "px-1",
                pathname.includes(tool.url) &&
                  "transition-colors bg-gradient-to-l from-slate-800 to-slate-900 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] opacity-100",
              )}
            >
              <div className="flex items-center p-2">
                <tool.icon className={cn("size-5 mr-3", tool.color)} />
                {!isMinimal && (
                  <span className="ml-4 text-sm">{tool.title}</span>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
