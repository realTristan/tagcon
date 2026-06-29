import { useEffect, useState } from "react";

export function useEventLive(eventStart: string) {
  const target = new Date(eventStart).getTime();
  const [isLive, setIsLive] = useState(
    () => !Number.isNaN(target) && Date.now() >= target,
  );

  useEffect(() => {
    const tick = () => {
      setIsLive(!Number.isNaN(target) && Date.now() >= target);
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return isLive;
}
