import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LoginButton } from "@/components/auth/login-button"
import SlidePricing from "@/components/pricing"
import { cn, nFormatter } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/config/icons"
import { siteConfig } from "@/config/site"

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/tejas-gk/uilib",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return (
    <section className="space-y-6 pb-12 pt-16 lg:py-28">
      <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
        <Link
          href="https://twitter.com/_tejas_gk_"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "animate-fade-up opacity-0")}
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          target="_blank"
        >
          Twitter <Icons.twitter className="ml-2 size-4" />
        </Link>

        <h1
          className="animate-fade-up text-balance font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Kick off with a bang with{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            SaaS Starter
          </span>
        </h1>

        <p
          className="max-w-[42rem] animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Build your next project using Next.js 14, Prisma, Tailwind Css, Auth.js v5, Resend, React Email, Shadcn/ui, Stripe, MongoDb
        </p>

        <div
          className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link href="/pricing" className={cn(buttonVariants({ size: "lg" }))}>
            Go Pricing
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
          >
            <Icons.gitHub className="mr-2 size-4" />
            <p>
              <span className="hidden sm:inline-block">Star on</span>{" "}GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}