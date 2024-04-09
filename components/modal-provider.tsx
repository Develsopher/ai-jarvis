"use client";

import { useEffect, useState } from "react";
import { ProModal } from "@/components/pro-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMountd] = useState(false);

  useEffect(() => {
    setIsMountd(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
};
