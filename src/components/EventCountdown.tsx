import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

type EventCountdownProps = {
  eventStart: string;
  compact?: boolean;
};

function getTimeLeft(target: number): TimeLeft {
  const total = Math.max(0, target - Date.now());
  const seconds = Math.floor(total / 1000) % 60;
  const minutes = Math.floor(total / 1000 / 60) % 60;
  const hours = Math.floor(total / 1000 / 60 / 60) % 24;
  const days = Math.floor(total / 1000 / 60 / 60 / 24);

  return { days, hours, minutes, seconds, total };
}

function pad(value: number, length = 2) {
  return value.toString().padStart(length, "0");
}

function CountdownUnit({
  value,
  label,
  compact,
}: {
  value: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[0.875rem] border-[3px] border-tagcon-banana/45 bg-tagcon-grey/95 px-2 py-3.5 text-center shadow-[0_4px_0_rgba(251,196,1,0.15)]",
        compact && "min-w-[3.1rem] rounded-[0.625rem] border-2 px-1 py-1.5",
      )}
    >
      <div
        className={cn(
          "font-display tabular-nums text-[clamp(1.35rem,3vw,2rem)] leading-none text-tagcon-banana",
          compact && "text-[0.95rem]",
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-1.5 font-heading text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white/72",
          compact && "mt-0.5 text-[0.55rem]",
        )}
      >
        {label}
      </div>
    </div>
  );
}

export function EventCountdown({ eventStart, compact }: EventCountdownProps) {
  const target = new Date(eventStart).getTime();
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(target));
    tick();

    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (timeLeft.total <= 0) {
    return (
      <p className="font-display text-sm uppercase tracking-wider text-tagcon-banana">
        Live now
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4",
        compact && "items-end gap-0",
      )}
      aria-live="polite"
      aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds until the event`}
    >
      {!compact && (
        <p className="text-center font-display text-sm uppercase tracking-widest text-tagcon-banana">
          Countdown to TAGCON
        </p>
      )}
      <div
        className={cn(
          "grid w-full grid-cols-4 gap-3",
          compact && "w-auto gap-1.5",
        )}
      >
        <CountdownUnit
          value={pad(timeLeft.days, 3)}
          label="Days"
          compact={compact}
        />
        <CountdownUnit
          value={pad(timeLeft.hours)}
          label="Hrs"
          compact={compact}
        />
        <CountdownUnit
          value={pad(timeLeft.minutes)}
          label="Min"
          compact={compact}
        />
        <CountdownUnit
          value={pad(timeLeft.seconds)}
          label="Sec"
          compact={compact}
        />
      </div>
    </div>
  );
}
