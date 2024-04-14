"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      variant="outline"
      size="lg"
      onClick={onClick}
      className="text-white w-full font-semibold border-none gradient-btn hover:text-white"
    >
      {isPro ? "Manage Subscription" : "Upgrade to Pro"}
      {!isPro && <Zap className="size-4 ml-2 fill-white" />}
    </Button>
  );
};
