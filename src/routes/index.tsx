import { createFileRoute } from "@tanstack/react-router";
import heroCitrus from "@/assets/hero-citrus.jpg";
import juiceOrange from "@/assets/juice-orange.jpg";
import juiceGreen from "@/assets/juice-green.jpg";
import juiceBeet from "@/assets/juice-beet.jpg";
import processPress from "@/assets/process-press.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Juice Solutions — Cold-Pressed Vitality, Bottled at the Source" },
      {
        name: "description",
        content:
          "Juice Solutions crafts cold-pressed, never-heated juices, cleanses, and wholesale supply — squeezed within hours of harvest for pure vitality in every drop.",
      },
      { property: "og:title", content: "Juice Solutions — Cold-Pressed Vitality" },
      {
        property: "og:description",
        content:
          "Cold-pressed, never heated, and squeezed within hours of harvest. Pure vitality in every drop.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const ingredients = [
  "Valencia Orange",
  "Wild Ginger Root",
  "Honeyglow Pineapple",
  "Lacinato Kale",
  "Crimson Beet",
  "Turmeric Curcumin",
  "Granny Smith Apple",
  "Blood Orange",
];

const products = [
  {
    name: "Golden Hour",
    desc: "Valencian orange, sea buckthorn, and a whisper of wild ginger.",
    price: "$9.50",
    tag: "Citrus",
    img: juiceOrange,
    tint: "bg-citrus/10",
    tagClass: "text-citrus-foreground",
  },
  {
    name: "Verdant Canopy",
    desc: "Cold-pressed kale, cucumber, lemon, and Granny Smith apple.",
    price: "$10.00",
    tag: "Detox",
    img: juiceGreen,
    tint: "bg-leaf/10",
    tagClass: "text-leaf-foreground",
  },
  {
    name: "Beetroot Bloom",
    desc: "Earthy beet, sweet strawberry, and a sharp lime finish.",
    price: "$9.50",
    tag: "Stamina",
    img: juiceBeet,
    tint: "bg-berry/10",
    tagClass: "text-berry-foreground",
  },
];

const steps = [
  {
    n: "01",
    title: "Sun-Ripened Only",
    body: "We never source from industrial greenhouses. Fruit is picked at the peak of sugar and enzyme density.",
  },
  {
    n: "02",
    title: "Cold Extraction",
    body: "Hydraulic presses exert 14,000 lbs of pressure to draw out every drop of nutrient-rich nectar — without a single degree of heat.",
  },
  {
    n: "03",
    title: "Zero Heat",
    body: "Raw juice means alive juice. No flash-pasteurization, just high-pressure protection for a clean 3-day shelf life.",
  },
];

const testimonials = [
  {
    quote:
      "It tastes like you've literally bitten into a sun-warmed peach. The flavor is terrifyingly fresh.",
    author: "Julian V.",
    role: "Executive Chef",
  },
  {
    quote:
      "Finally a green juice that doesn't taste like grass. Balanced, bright, and genuinely energizing.",
    author: "Sarah M.",
    role: "Wellness Coach",
  },
  {
    quote:
      "The wholesale partnership transformed our morning service. Customers can't get enough.",
    author: "Leo K.",
    role: "Café Owner",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-citrus/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-full bg-citrus" />
            <span className="font-display text-2xl italic tracking-tight text-forest">
              Juice Solutions
            </span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
            <a href="#products" className="transition-colors hover:text-citrus">
              Juices
            </a>
            <a href="#process" className="transition-colors hover:text-citrus">
              Process
            </a>
            <a href="#voices" className="transition-colors hover:text-citrus">
              Voices
            </a>
            <a href="#wholesale" className="transition-colors hover:text-citrus">
              Wholesale
            </a>
          </div>
          <a
            href="#wholesale"
            className="rounded-full bg-foreground px-5 py-2 text-xs font-bold uppercase tracking-tight text-background transition-colors hover:bg-berry"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden">
        <img
          src={heroCitrus}
          alt="Ripe sun-drenched oranges and grapefruit sliced open, glistening with fresh juice"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="mb-6 max-w-fit rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur">
            Cold-pressed · Never heated
          </p>
          <h1 className="max-w-4xl text-balance font-display text-6xl leading-[0.9] text-white drop-shadow-sm md:text-8xl">
            Bite into the{" "}
            <span className="italic text-citrus">sun</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90 text-pretty md:text-xl">
            Squeezed within hours of harvest. Pure vitality in every drop — no heat, no
            compromise, just alive juice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-citrus px-7 py-3.5 text-sm font-bold uppercase tracking-tight text-citrus-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Shop the Harvest
            </a>
            <a
              href="#process"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-white/10"
            >
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Ingredient ticker */}
      <div className="overflow-hidden border-y border-border bg-foreground py-4">
        <div className="marquee-track gap-10">
          {[...ingredients, ...ingredients].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-white/80"
            >
              {item}
              <span className="ml-10 text-white/30">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-berry">
              Today's Harvest
            </span>
            <h2 className="max-w-xl text-balance font-display text-5xl text-forest md:text-6xl">
              The seasonal selection
            </h2>
          </div>
          <p className="max-w-md text-pretty text-muted-foreground">
            Our blends are crafted to maximize nutrient density without sacrificing the vibrant
            flavors of the harvest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {products.map((p, i) => (
            <article key={p.name} className="drop-in" style={{ animationDelay: `${i * 120}ms` }}>
              <div className={`relative aspect-[4/5] ${p.tint} overflow-hidden rounded-2xl ring-1 ring-black/5`}>
                <img
                  src={p.img}
                  alt={`${p.name} cold-pressed juice bottle`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  width={800}
                  height={1008}
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl italic text-forest">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="font-semibold text-foreground">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-forest text-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              <h2 className="text-balance font-display text-5xl italic text-background md:text-6xl">
                The 4AM press
              </h2>
              <div className="space-y-8">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-start gap-6">
                    <span className="font-display text-3xl text-citrus">{s.n}</span>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">{s.title}</h4>
                      <p className="max-w-[40ch] leading-relaxed text-background/70">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={processPress}
                alt="Hydraulic cold press squeezing green kale and citrus, fresh juice splashing"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-2xl object-cover ring-1 ring-white/10"
                width={1200}
                height={1504}
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-citrus px-8 py-6">
                <p className="font-display text-5xl leading-none text-citrus-foreground">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-tight text-citrus-foreground">
                  Retained enzymes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section id="voices" className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="mb-12 font-display text-2xl italic text-forest">Voices from the orchard</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="space-y-4 text-left">
              <p className="font-display text-2xl italic leading-snug text-pretty text-forest">
                “{t.quote}”
              </p>
              <footer className="text-sm font-medium text-muted-foreground">
                {t.author}, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Wholesale CTA */}
      <section id="wholesale" className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-forest p-12 md:p-24">
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-6 font-display text-5xl leading-tight text-background md:text-7xl">
              Stock the <span className="italic text-citrus">freshness</span>
            </h2>
            <p className="mb-10 max-w-md text-lg text-background/70 text-pretty">
              Partner with us for daily deliveries of the highest-quality cold-pressed juices for
              your café, studio, or corporate space.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#top"
                className="rounded-full bg-citrus px-8 py-4 text-sm font-bold uppercase tracking-tight text-citrus-foreground transition-transform hover:scale-[1.03] active:scale-95"
              >
                Wholesale Inquiry
              </a>
              <a
                href="#top"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-tight text-background transition-colors hover:bg-white/10"
              >
                View Stockist Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <span className="mb-6 block font-display text-3xl italic tracking-tight text-forest">
                Juice Solutions
              </span>
              <p className="max-w-[30ch] leading-relaxed text-muted-foreground text-pretty">
                Crafting high-vibration nutrition from the ground up since 2018.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Find Us
              </h4>
              <address className="space-y-2 not-italic text-muted-foreground">
                <p>842 Orchard Way</p>
                <p>Ojai, California 93023</p>
                <p>hello@juicesolutions.co</p>
              </address>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Harvest Journal
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Get seasonal harvest updates.
              </p>
              <form
                className="relative"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-border bg-card px-6 py-3 text-sm outline-none focus:ring-2 focus:ring-citrus"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row">
            <div className="flex gap-8">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
              <a href="#wholesale" className="transition-colors hover:text-foreground">
                Wholesale
              </a>
            </div>
            <span>© 2026 Juice Solutions Co. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
