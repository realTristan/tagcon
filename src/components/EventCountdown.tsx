import { useEffect, useState } from "react"

import { site } from "@/data/site"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

function getTimeLeft(target: number): TimeLeft {
  const total = Math.max(0, target - Date.now())
  const seconds = Math.floor(total / 1000) % 60
  const minutes = Math.floor(total / 1000 / 60) % 60
  const hours = Math.floor(total / 1000 / 60 / 60) % 24
  const days = Math.floor(total / 1000 / 60 / 60 / 24)

  return { days, hours, minutes, seconds, total }
}

function pad(value: number) {
  return value.toString().padStart(2, "0")
}

export function EventCountdown() {
  const target = new Date(site.eventStart).getTime()
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(target))
    tick()

    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [target])

  if (timeLeft.total <= 0) {
    return (
      <p className="text-sm font-medium tabular-nums text-foreground">
        Live now
      </p>
    )
  }

  return (
    <div
      className="text-right tabular-nums"
      aria-live="polite"
      aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds until the event`}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Starts in
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
        {timeLeft.days > 0 && (
          <span>
            {timeLeft.days}d{" "}
          </span>
        )}
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </p>
    </div>
  )
}
