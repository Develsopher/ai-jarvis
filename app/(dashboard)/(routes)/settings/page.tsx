import { Heading } from "@/components/dashboard/heading";
import { SubscriptionButton } from "@/components/dashboard/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings2 } from "lucide-react";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings2}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are  on Subscription"
            : "You are currently on a free plan"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
