"use client";

import { UserButton, useUser } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import Logo from "@/components/logo";
import { Progress } from "@/components/ui/progress";
import { MAX_FREE_COUNTS } from "@/constants";
import SidebarToggle from "./sidebar-toggle";
import Navbar from "./navbar";
import { SubscriptionButton } from "@/components/subscription-button";

interface SidebarProps {
  className?: string;
  isPro: boolean;
  apiLimitCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  isPro = false,
  apiLimitCount = 0,
}) => {
  const { isMinimal } = useSidebarStore();
  const { user } = useUser();

  return (
    <div className={cn("text-white", className)}>
      <div>
        <div className="h-20 pl-7 pr-6">
          <div className="flex items-center justify-between">
            {!isMinimal && <Logo />}
            <SidebarToggle />
          </div>
        </div>
        <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
          <Navbar />
        </div>
      </div>
      {/* 유저정보 & API Counter */}
      <div className="px-4 pb-10">
        <div className="mb-4 p-4 rounded-lg bg-gray-900">
          <div className="mb-4 flex items-center">
            <UserButton afterSignOutUrl="/" />
            {!isMinimal && (
              <span className="text-sm ml-4">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            )}
          </div>
          {!isMinimal && (
            <div className="border-t border-t-gray-950 pt-2">
              {!isPro && (
                <div className="mb-4">
                  <div className="text-center mb-2 text-muted-foreground font-semibold">
                    {apiLimitCount}/{MAX_FREE_COUNTS} Free Generations
                  </div>
                  <Progress
                    value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                    className="bg-gray-950 h-3"
                    indicatorClassName="gradient-btn"
                  />
                </div>
              )}
              <SubscriptionButton isPro={isPro} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
