import { ModalProvider } from "@/components/dashboard/modal-provider";
import { ProModal } from "@/components/dashboard/pro-modal";
import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import Topbar from "@/components/dashboard/topbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { cn } from "@/lib/utils";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main className="lg:bg-gray-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7">
        <Sidebar
          apiLimitCount={apiLimitCount}
          isPro={isPro}
          className={cn(
            "fixed left-0 z-20 w-80 [&:has([is-navbar-minimal])]:w-fit hidden",
            "lg:flex lg:flex-col lg:justify-between lg:h-full",
          )}
        />
        <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
        <ModalProvider />
        <div
          className={cn(
            "bg-background h-[calc(100vh-56px)]",
            "lg:rounded-3xl lg:p-7",
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
