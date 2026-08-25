import { createFileRoute } from "@tanstack/react-router";
import juiceOrange from "@/assets/juice-orange.jpg";
import juiceGreen from "@/assets/juice-green.jpg";
import juiceBeet from "@/assets/juice-beet.jpg";
import processPress from "@/assets/process-press.jpg";
import facility from "@/assets/facility.jpg";
import logo from "@/assets/fruitcap-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "FRUITCAP — Distributors of Fruit Juice Concentrates & Purées",
      },
      {
        name: "description",
        content:
          "UAE-based distributor of juice concentrates, fruit pulp, purée, NFC juices, fruit dices, nectars and fruit crush for beverage, dairy, bakery and confectionery manufacturers.",
      },
      {
        property: "og:title",
        content: "FRUITCAP — Fruit Ingredient Distributors",
      },
      {
        property: "og:description",
        content:
          "Juice concentrates, fruit pulp, purée, NFC juices, fruit dices, nectars and fruit crush, distributed worldwide from the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Contacts", href: "#contact" },
];

const industries = [
  {
    title: "Beverage Manufacturers",
    body: "Fruit concentrates, NFC juices and customised fruit bases for juices, soft drinks, smoothies and functional beverages.",
    img: juiceOrange,
  },
  {
    title: "Dairy & Yogurt",
    body: "Concentrates, purées and fruit preparations engineered for fruit yogurts, drinking yogurts and fermented dairy.",
    img: juiceGreen,
  },
  {
    title: "Ice Cream & Frozen",
    body: "Fruit bases that deliver authentic flavour, natural colour and consistent performance in frozen desserts.",
    img: juiceBeet,
  },
  {
    title: "Bakery",
    body: "Fruit ingredients for fillings, toppings and glazes with excellent taste, texture and visual appeal.",
    img: processPress,
  },
  {
    title: "Confectionery",
    body: "Fruit solutions for gummies, jelly candies, chews and fillings with natural fruit flavour and colour.",
    img: juiceOrange,
  },
  {
    title: "HORECA & Foodservice",
    body: "Bag-in-Box juices and concentrates for hotels, restaurants, catering companies and professional kitchens.",
    img: juiceGreen,
  },
];

const products = categories;


const formats = ["200 L Drums", "1,000 L IBC", "Bag-in-Box", "Aseptic Totes", "Frozen Blocks"];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logo.url}
              alt="FRUITCAP logo"
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.35em] text-cream/70">
            Distributors of fruit ingredients
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Fruit juice concentrates, purées and pulps for the food industry
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/80">
            We distribute organic and conventional fruit ingredients — adapted to your Brix,
            acidity, fruit content and packaging format.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-citrus px-7 py-3.5 text-sm font-medium text-citrus-foreground transition-transform hover:-translate-y-0.5"
            >
              View product range
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-cream/10"
            >
              Talk to our commercial team
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Industries we serve
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Qualities adapted to each production line
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <article
                key={i.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={i.img}
                    alt={i.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{i.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{i.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            All our ingredients can be customised according to Brix, acidity, fruit content, colour,
            packaging format and specific processing requirements.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Our product range
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              The fruit ingredients we distribute
            </h2>
            <p className="mt-6 text-muted-foreground">
              Organic and conventional, available in industrial formats with storage adapted to each
              industry's needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {formats.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-forest px-4 py-1.5 text-xs tracking-wide text-cream"
                >
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src={facility}
                alt="Stainless steel processing tanks at a partner concentrate facility"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {products.map((p, idx) => (
              <li key={p.name} className="flex gap-6 py-7">
                <span className="font-display text-lg text-citrus">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 rounded-3xl bg-secondary p-10 md:grid-cols-2 md:p-16">
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">Talk with us</h2>
            <p className="mt-5 text-muted-foreground">
              Our commercial department is at your disposal, always. Send your specification and we
              will come back with samples, a technical data sheet and an indicative price.
            </p>
            <div className="mt-8 space-y-1 text-sm text-muted-foreground">
              <p>sales@fruitcapfze.com</p>
              <p>info@fruitcapfze.com</p>
              <p>United Arab Emirates</p>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Company"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                required
                placeholder="Contact name"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              rows={4}
              placeholder="Product, volume, Brix and destination market"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <img
            src={logo.url}
            alt="FRUITCAP logo"
            className="h-10 w-auto object-contain mix-blend-multiply"
          />
          <p>© {new Date().getFullYear()} FRUITCAP. Distributors of fruit ingredients.</p>
        </div>
      </footer>
    </div>
  );
}
