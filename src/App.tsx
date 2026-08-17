import { ShoppingCart, ArrowRight, Star, Plus } from "lucide-react";
import Header from "./header";
import Footer from "./footer";

interface Burger {
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

const burgers: Burger[] = [
  {
    name: "Classic Beef",
    price: 8.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Beef patty, lettuce, tomato, onion and special sauce.",
  },
  {
    name: "Cheese Burger",
    price: 9.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: "Beef patty, cheddar cheese, lettuce and special sauce.",
  },
  {
    name: "Bacon King",
    price: 11.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    description: "Double beef, crispy bacon, cheddar and BBQ sauce.",
  },
  {
    name: "Spicy Chicken",
    price: 9.49,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Crispy chicken, spicy mayo, lettuce and pickles.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* ================= NAVBAR ================= */}
      <Header/>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffb000] text-2xl">
              🍔
            </div>

            <div>
              <h1 className="font-['Bebas_Neue'] text-2xl tracking-wide">
                HANBUGER
              </h1>

              <p className="text-[9px] font-semibold uppercase tracking-wider text-[#ffb000]">
                Premium Burgers
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {["Home", "Menu", "About Us", "Reviews", "Contact"].map(
              (item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`relative text-sm transition ${
                    index === 0
                      ? "text-white after:absolute after:-bottom-7 after:left-0 after:h-[3px] after:w-full after:bg-[#ffb000]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="relative">
              <ShoppingCart size={22} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ffb000] text-[9px] font-bold text-black">
                2
              </span>
            </button>

            <button className="hidden rounded-lg bg-[#ffb000] px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#ffc400] md:block">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[760px] overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,176,0,0.15),transparent_35%)]" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-6 pt-20 lg:grid-cols-2">
          {/* Hero text */}
          <div className="z-10">
            <p className="mb-3 font-['Pacifico'] text-2xl text-[#ffb000]">
              Best Quality
            </p>

            <h2 className="font-['Bebas_Neue'] text-7xl leading-[0.85] tracking-wide sm:text-8xl lg:text-[110px]">
              DELICIOUS
              <br />
              <span className="text-[#ffb000]">HANBUGER</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-gray-400">
              100% fresh beef, premium ingredients and special sauce.
              <br />
              A burger experience like no other.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-lg bg-[#ffb000] px-7 py-4 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffc400]">
                Order Now
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur transition hover:bg-white/10">
                View Menu
              </button>
            </div>

            {/* Customers */}
            <div className="mt-9 flex items-center gap-4">
              <div className="flex">
                {["👨🏻", "👩🏻", "👨🏽", "👩🏽", "👨🏻"].map(
                  (avatar, index) => (
                    <div
                      key={index}
                      className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-gray-700 first:ml-0"
                    >
                      {avatar}
                    </div>
                  ),
                )}
              </div>

              <div>
                <p className="font-bold">4.8K+</p>
                <p className="text-xs text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex h-[500px] items-center justify-center">
            <div className="absolute h-[400px] w-[400px] rounded-full bg-[#ffb000]/10 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90"
              alt="Premium burger"
              className="relative z-10 w-full max-w-2xl object-contain drop-shadow-[0_35px_40px_rgba(0,0,0,0.8)]"
            />

            {/* Quality badge */}
            <div className="absolute right-0 top-16 z-20 flex h-24 w-24 rotate-[-12deg] flex-col items-center justify-center rounded-full border-2 border-white">
              <strong className="text-xl">100%</strong>
              <span className="text-[8px] tracking-widest">FRESH BEEF</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR BURGERS ================= */}
      <section id="menu" className="bg-[#0d0d0d] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#ffb000]">
              Our Menu
            </p>

            <h2 className="mt-2 font-['Bebas_Neue'] text-5xl">
              POPULAR BURGERS
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-12 bg-[#ffb000]" />
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {burgers.map((burger) => (
              <div
                key={burger.name}
                className="group overflow-hidden rounded-2xl border border-[#ffb000]/20 bg-[#141414] transition duration-300 hover:-translate-y-2 hover:border-[#ffb000]/70 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <button className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb000] text-black transition hover:rotate-90">
                    <Plus size={22} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-['Bebas_Neue'] text-2xl">
                      {burger.name}
                    </h3>

                    <span className="font-bold text-[#ffb000]">
                      ${burger.price}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex text-[#ffb000]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={12}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">
                      {burger.rating}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-gray-500">
                    {burger.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about-us" className="bg-[#090909] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#ffb000]">
              Our Story
            </p>

            <h2 className="mt-3 font-['Bebas_Neue'] text-5xl leading-none sm:text-6xl">
              MADE WITH PASSION,
              <br />
              <span className="text-[#ffb000]">SERVED WITH LOVE</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500">
              At Hanbuger, we believe that a great burger starts with the
              finest ingredients and ends with your satisfaction. Every burger
              is crafted with care, passion and the best quality.
            </p>

            <button className="mt-7 flex items-center gap-3 rounded-lg bg-[#ffb000] px-6 py-3 text-sm font-bold text-black">
              Learn More
              <ArrowRight size={16} />
            </button>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🥩</span>
                <div>
                  <strong className="text-sm">100%</strong>
                  <p className="text-xs text-gray-500">Fresh Beef</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">🌿</span>
                <div>
                  <strong className="text-sm">Premium</strong>
                  <p className="text-xs text-gray-500">Ingredients</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">🔥</span>
                <div>
                  <strong className="text-sm">Flame</strong>
                  <p className="text-xs text-gray-500">Grilled</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[450px] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=90"
              alt="Fresh burger ingredients"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

            <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/30 text-xl backdrop-blur">
              ▶
            </button>

            <span className="absolute left-1/2 top-[62%] -translate-x-1/2 text-[10px] tracking-[3px]">
              WATCH VIDEO
            </span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Service */}
          <ServiceCard
            icon="🛵"
            title="FAST DELIVERY"
            subtitle="30-40 min"
          />

          <ServiceCard
            icon="🛡️"
            title="BEST QUALITY"
            subtitle="Guaranteed"
          />

          <ServiceCard
            icon="🏷️"
            title="SPECIAL OFFERS"
            subtitle="Everyday"
          />

          {/* Promotion */}
          <div className="relative col-span-1 overflow-hidden rounded-2xl border border-[#ffb000] p-7 md:col-span-3 lg:col-span-1">
            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[2px] text-[#ffb000]">
                WEEKEND SPECIAL
              </p>

              <h2 className="mt-1 font-['Bebas_Neue'] text-4xl">
                GET 20% OFF
              </h2>

              <p className="mb-4 text-xs text-gray-500">
                For all burgers on weekends
              </p>

              <button className="rounded-lg bg-[#ffb000] px-5 py-3 text-xs font-bold text-black">
                Order Now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=90"
              alt="Burger promotion"
              className="absolute -bottom-8 -right-12 w-52 opacity-60"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 bg-[#050505] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffb000]">
              🍔
            </div>

            <div>
              <h2 className="font-['Bebas_Neue'] text-xl">HANBUGER</h2>
              <p className="text-[8px] text-[#ffb000]">Premium Burgers</p>
            </div>
          </div>

          <p className="text-xs text-gray-600">
            © 2026 Hanbuger. Made with passion, served with love.
          </p>

          <div className="flex gap-2">
            {["f", "ig", "t"].map((social) => (
              <button
                key={social}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] text-gray-500 transition hover:border-[#ffb000] hover:text-[#ffb000]"
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </footer>
      <Footer/>
    </div>
  );
};

/* ================= SERVICE CARD ================= */

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard = ({
  icon,
  title,
  subtitle,
}: ServiceCardProps) => {
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl bg-[#171717] text-center transition hover:-translate-y-1">
      <span className="mb-4 text-3xl">{icon}</span>

      <h3 className="font-['Bebas_Neue'] text-xl tracking-wide">
        {title}
      </h3>

      <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
    </div>
  );
};

export default App;