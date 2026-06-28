import { CreatorCard } from "@/components/CreatorCard";
import { EventCountdown } from "@/components/EventCountdown";
import { DiscordIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { creators } from "@/data/creators";
import { gconAsset } from "@/lib/assets";

const containerClass = "mx-auto w-[min(100%-3rem,72rem)]";

const eventStart = "2026-06-30T08:35:00-05:00";

function App() {
  const patternUrl = gconAsset("banana-pattern.svg");

  return (
    <div className="min-h-svh bg-tagcon-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-tagcon-banana/25 bg-black/92 backdrop-blur-[10px]">
        <div
          className={`${containerClass} flex items-center justify-between gap-4 py-3`}
        >
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={gconAsset("banana-icon.svg")}
              alt=""
              className="size-8 shrink-0"
            />
            <p className="truncate font-display text-lg uppercase tracking-wide text-tagcon-banana sm:text-xl">
              TAGCON
            </p>
          </div>
          <EventCountdown eventStart={eventStart} compact />
        </div>
      </header>

      <main className="pt-22">
        <section className="relative isolate overflow-hidden border-b-2 border-tagcon-banana/20 bg-tagcon-black">
          <div
            className="pointer-events-none absolute inset-0 scale-[1.15] bg-size-[140px_140px] bg-repeat opacity-90"
            style={{ backgroundImage: `url(${patternUrl})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-[-12%] scale-[1.15] bg-size-[140px_140px] bg-repeat bg-position-[70px_70px] opacity-55"
            style={{ backgroundImage: `url(${patternUrl})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,196,1,0.1),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(240,88,36,0.06),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.55))]"
            aria-hidden
          />

          <div
            className={`${containerClass} relative z-10 py-8 sm:py-10 lg:py-12`}
          >
            <div className="mx-auto grid max-w-4xl items-center gap-7 text-center lg:max-w-none lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:text-left">
              <div className="flex justify-center lg:justify-end lg:pr-4">
                <img
                  src={gconAsset("sticker-logo.png")}
                  alt=""
                  className="h-auto w-[min(100%,11rem)] sm:w-[min(100%,13rem)] lg:w-[min(100%,16rem)]"
                />
              </div>

              <div className="flex flex-col items-center lg:items-start lg:pl-2">
                <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95] uppercase text-tagcon-banana [text-shadow:0_3px_0_#000]">
                  TAGCON
                </h1>
                <h2 className="mt-2 font-heading text-[clamp(1.35rem,3vw,2rem)] font-bold uppercase text-tagcon-orange">
                  MEET CREATORS!
                </h2>
                <div className="my-4 h-[3px] w-[min(100%,12rem)] bg-linear-to-r from-transparent via-tagcon-banana to-transparent lg:mx-0" />
                <p className="max-w-md font-display text-[0.95rem] font-semibold leading-normal text-white/82 sm:text-[1.05rem]">
                  June 30th 8:35 AM - 10:30 AM Central time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-tagcon-banana/12">
          <div className={`${containerClass} py-12 sm:py-16`}>
            <div className="mx-auto max-w-3xl rounded-[1.25rem] border-[3px] border-tagcon-banana/35 bg-[#111]/92 p-8 text-center shadow-[0_6px_0_rgba(251,196,1,0.18)]">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-white">
                Troop Code TAGCON
              </p>
              <p className="mt-3 font-display text-3xl leading-tight uppercase text-tagcon-banana sm:text-4xl">
                Forest, And City
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-tagcon-banana/12 bg-linear-to-b from-[#0d0d0d] to-[#111]">
          <div className={`${containerClass} py-14 sm:py-20`}>
            <div className="text-center">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-white">
                Meet &amp; Greet
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight uppercase text-tagcon-banana">
                Featured Creators!
              </h2>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {creators.map((creator) => (
                <li key={creator.name}>
                  <CreatorCard creator={creator} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b-2 border-tagcon-banana/12">
          <div className={`${containerClass} py-14 sm:py-20`}>
            <div className="mx-auto max-w-3xl rounded-[1.25rem] border-[3px] border-tagcon-banana/35 bg-[#111]/92 p-8 shadow-[0_6px_0_rgba(251,196,1,0.18)] sm:p-10">
              <h2 className="text-center font-display text-2xl uppercase text-tagcon-banana sm:text-3xl">
                Want To Be A Featured Creator?
              </h2>
              <p className="mt-5 text-center font-display text-lg font-semibold text-white">
                DM BlueMonkgtag On Discord
              </p>
              <p className="mt-1 text-center font-display text-base text-white/70">
                And Ask For It
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full border-[3px] border-tagcon-banana-deep bg-tagcon-banana px-6 font-heading text-base font-bold text-tagcon-black shadow-[0_5px_0_rgba(255,183,0,0.45)] hover:bg-tagcon-banana-deep"
                >
                  <a
                    href="https://discord.gg/TpFpN2afdg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DiscordIcon className="size-5" aria-hidden />
                    Join Our Discord
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-tagcon-banana/15 bg-[#080808]">
        <div className={`${containerClass} py-8 text-center`}>
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            WTH Am I Doing
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
