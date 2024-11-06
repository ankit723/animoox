
const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig = {
    name: process.env.NEXT_PUBLIC_APP_NAME || "Animoox Marketplace",
    description:
        "A marketplace for buying and selling animated videos, illustrations, and more.",
    url: site_url || "http://localhost:3000",
    ogImage: `${site_url}/og.jpg`,
    links: {
        twitter: "https://twitter.com/tejasgk250",
        github: "https://github.com/tejas-gk",
    },
    mailSupport: "support@saas-starter.com"
}
