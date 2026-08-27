import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, getCategory } from "@/data/products";
import logo from "@/assets/fruitcap-logo.png.asset.json";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — FRUITCAP" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} — FRUITCAP`;
    return {
      meta: [
        { title },
        { name: "description", content: category.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: category.intro },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo.url}
              alt="FRUITCAP logo"
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link
              to="/"
              hash="products"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              to="/"
              hash="contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contacts
            </Link>
          </nav>
          <Link
            to="/"
            hash="contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a quote
          </Link>
        </div>
      </header>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Link to="/" hash="products" className="text-xs uppercase tracking-[0.3em] text-cream/70">
            ← Our product range
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            {category.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">{category.intro}</p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex rounded-full bg-citrus px-7 py-3.5 text-sm font-medium text-citrus-foreground transition-transform hover:-translate-y-0.5"
          >
            Request a quote
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl">Catalogue</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden bg-secondary">
                <img
                  src={item.img}
                  alt={item.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                <Link
                  to="/"
                  hash="contact"
                  className="mt-6 inline-flex w-fit rounded-full border border-primary px-5 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Request a quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl">Other categories</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/products/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full bg-forest px-4 py-2 text-xs tracking-wide text-cream transition-opacity hover:opacity-90"
                >
                  {c.name}
                </Link>
              ))}
          </div>
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
