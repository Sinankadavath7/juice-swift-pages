import { createFileRoute } from "@tanstack/react-router";
import heroCitrus from "@/assets/hero-citrus.jpg";
import juiceOrange from "@/assets/juice-orange.jpg";
import juiceGreen from "@/assets/juice-green.jpg";
import juiceBeet from "@/assets/juice-beet.jpg";
import processPress from "@/assets/process-press.jpg";
import facility from "@/assets/facility.jpg";
import orchard from "@/assets/orchard.jpg";
import labQuality from "@/assets/lab-quality.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "FRUITCAP — Fruit Juice Concentrates & Ingredient Supply",
      },
      {
        name: "description",
        content:
          "Manufacture and distribution of fruit juice concentrates, NFC juices and purées for beverage, dairy, bakery, ice cream and confectionery manufacturers worldwide.",
      },
      {
        property: "og:title",
        content: "FRUITCAP — Fruit Juice Concentrates & Ingredients",
      },
      {
        property: "og:description",
        content:
          "Organic and conventional fruit concentrates, NFC juices and purées in drums, IBC and Bag-in-Box. Shipping to 127 countries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
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

const products = [
  {
    name: "Fruit Juice Concentrates",
    detail: "Clarified and cloudy, 65–70 °Brix, single strength on request.",
  },
  { name: "NFC Juices", detail: "Not-from-concentrate, chilled or frozen, varietal traceability." },
  { name: "Fruit Purées", detail: "Aseptic and frozen purées, with or without seeds and skins." },
  { name: "Fruit Concentrates", detail: "Deionised, decoloured and aroma-recovered grades." },
  { name: "Organic Vinegars", detail: "EU 2018/848 and USDA Organic certified fermentations." },
  {
    name: "Customised Functional Bases",
    detail: "Vitamins, botanicals and fibre blends built to your spec sheet.",
  },
];

const capabilities = [
  {
    title: "Three Storage Regimes",
    body: "Ambient, refrigerated and frozen warehousing under one roof, so every product category ships in the condition it needs.",
  },
  {
    title: "Operating Worldwide",
    body: "Commercial agents on four continents serving clients in 127 countries, with documentation prepared for each market.",
  },
  {
    title: "Planning & Delivery",
    body: "Integrated logistics planning coordinates harvest windows, production slots and vessel bookings against your schedule.",
  },
];

const stats = [
  { value: "35%", label: "America" },
  { value: "30%", label: "Europe" },
  { value: "25%", label: "Asia" },
  { value: "10%", label: "Africa" },
];

const standards = [
  "European Union fruit juice and food regulations",
  "Codex Alimentarius standards for juices and purées",
  "FDA 21 CFR 120 — Juice HACCP",
  "EU 2018/848 and USDA Organic certification",
  "Market-specific MENA and Asia requirements on request",
];

const testimonials = [
  {
    quote: "Very good team, from lab to production and offices. They managed every product my line needed.",
    name: "George Wilson",
    role: "Head of Production, Beverage Co.",
  },
  {
    quote: "They matched the exact Brix and acidity profile we specified, batch after batch.",
    name: "Antonio Johnson",
    role: "R&D Director, Dairy Group",
  },
  {
    quote: "Excellent support on our project — they advised us on many raw materials for our manufacturing.",
    name: "Petra Holmgarden",
    role: "Procurement Lead, Confectionery",
  },
];

const formats = ["200 L Drums", "1,000 L IBC", "Bag-in-Box", "Aseptic Totes", "Frozen Blocks"];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo.url} alt="FRUITCAP logo" className="h-10 w-auto object-contain" />
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
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroCitrus}
          alt="Freshly harvested citrus fruit destined for juice concentrate production"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="text-xs uppercase tracking-[0.35em] text-cream/70">
            Fruit ingredient manufacturing since 1998
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-cream md:text-7xl">
            Manufacture and distribution of fruit juice concentrates
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/80">
            High-quality ingredients for the food industry — organic and conventional concentrates,
            NFC juices and purées, adapted to your Brix, acidity, fruit content and packaging
            format.
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
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Talk to our commercial team
            </a>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-cream/20 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-citrus">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Feeding the future
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Solutions for every application
            </h2>
            <p className="mt-6 text-muted-foreground">
              From beverages to bakery and dairy, we develop fruit-based solutions for the food
              industry. Our juices and concentrates are handled with established industrial
              processes selected by product category and final application.
            </p>
            <p className="mt-4 text-muted-foreground">
              We work with sustainable and organic crops, sourced from long-standing grower
              partnerships across the Mediterranean, Latin America and Asia — thinking today about
              what will be eaten tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["EU 2018/848", "USDA Organic", "IFS Food", "HACCP", "Kosher", "Halal"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs tracking-wide text-secondary-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={orchard}
              alt="Aerial view of a sunlit citrus orchard supplying our fruit"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
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
              A complete portfolio of fruit-based ingredients
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
                alt="Stainless steel processing tanks inside our concentrate facility"
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

      {/* Capabilities */}
      <section id="capabilities" className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/60">We adapt to your needs</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Commercial and logistics support at every stage
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t border-cream/20 pt-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-cream/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-3xl md:order-1">
            <img
              src={labQuality}
              alt="Laboratory technician checking a fruit concentrate sample"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Why FRUITCAP
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Superior quality in all our products
            </h2>
            <p className="mt-6 text-muted-foreground">
              Quality management is based on raw material selection, process control and batch
              traceability across the supply chain, ensuring consistency in physicochemical and
              microbiological parameters according to product specifications.
            </p>
            <ul className="mt-8 space-y-3">
              {standards.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-citrus" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Our customers said</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-8">
                <blockquote className="font-display text-xl leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 rounded-3xl bg-citrus/15 p-10 md:grid-cols-2 md:p-16">
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Talk with us: +34 968 612 364
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our commercial department is at your disposal, always. Send your specification and we
              will come back with samples, a technical data sheet and an indicative FOB price.
            </p>
            <div className="mt-8 space-y-1 text-sm text-muted-foreground">
              <p>sales@juicesolutions.com</p>
              <p>Pol. Ind. Oeste, Murcia, Spain</p>
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
          <img src={logo.url} alt="FRUITCAP logo" className="h-10 w-auto object-contain" />
          <p>© {new Date().getFullYear()} FRUITCAP. Fruit ingredients for the food industry.</p>
        </div>
      </footer>
    </div>
  );
}
