"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const closeModalActions = () => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);
};

export default closeModalActions;
