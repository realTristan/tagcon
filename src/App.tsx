import { Button } from "@/components/ui/button"
import { CreatorCard } from "@/components/CreatorCard"
import { EventCountdown } from "@/components/EventCountdown"
import { DiscordIcon } from "@/components/icons/brand-icons"
import { creators, site } from "@/data/site"

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <p className="text-sm font-semibold tracking-widest">{site.title}</p>
          <EventCountdown />
        </div>
      </header>

      <main className="pt-20">
        <section className="border-b">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {site.tagline}
            </p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
              {site.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {site.schedule}
            </p>
          </div>
        </section>

        <section className="border-b bg-muted/40">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {site.troopCode.label}
            </p>
            <p className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
              {site.troopCode.maps}
            </p>
          </div>
        </section>

        <section className="border-b">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {site.featuredHeading}
            </h2>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {creators.map((creator) => (
                <li key={creator.name}>
                  <CreatorCard creator={creator} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="rounded-xl border bg-card p-8 sm:p-10">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {site.cta.heading}
              </h2>
              <p className="mt-4 text-base text-foreground">{site.cta.line1}</p>
              <p className="mt-1 text-base text-muted-foreground">
                {site.cta.line2}
              </p>

              <Button asChild className="mt-6">
                <a href={site.cta.discordUrl} target="_blank" rel="noreferrer">
                  <DiscordIcon className="size-4" />
                  {site.cta.discordLabel}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="text-sm text-muted-foreground">{site.footer}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
