"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6d771a43-2447-4a75-9d7d-59cf35d88705");
  }, []);

  return null;
};
