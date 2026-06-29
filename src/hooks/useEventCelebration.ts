import { useEffect, useRef } from "react";

import { fireTagconConfetti } from "@/lib/confetti";

export function useEventCelebration() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;
    fireTagconConfetti();
  }, []);
}
