export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFF8EF] scroll-mt-16 pt-16"
    >
      {/* Subtle background tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-50 rounded-full opacity-40 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ──────────────────────── */}
          <div className="text-center lg:text-left space-y-7">

            {/* Pure Veg badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              100% Pure Vegetarian · Homemade Taste
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1F2933] leading-tight tracking-tight">
              Delicious Homely<br />
              <span className="text-orange-600">Meals Delivered</span><br />
              Fresh Every Day
            </h1>

            {/* Tagline */}
            <p className="text-lg font-semibold text-[#4B5563] tracking-wide">
              Healthy. Homemade. Delivered Daily.
            </p>

            {/* Description */}
            <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Enjoy hygienic, fresh, pure vegetarian tiffin cooked with care — delivered to your door in Silicon City, Bijalpur &amp; Nihalpur Mundi, Indore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-xl text-sm sm:text-base transition-colors shadow-md"
              >
                📱 Order on WhatsApp
              </a>
              <button
                onClick={() => scrollTo("menu")}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-3 rounded-xl text-sm sm:text-base transition-colors shadow-md"
              >
                🍛 View Menu
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1F2933] border border-gray-200 font-bold px-5 py-3 rounded-xl text-sm sm:text-base transition-colors"
              >
                💰 View Pricing
              </button>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {["✓ Free Delivery", "✓ Hygienic Kitchen", "✓ Homemade Taste"].map((t) => (
                <span
                  key={t}
                  className="bg-white border border-gray-200 text-[#1F2933] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Image ───────────────────────── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-[480px] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
                alt="Freshly prepared Indian thali tiffin meal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-0.5">Indore Special</p>
                <h3 className="text-lg font-bold">Freshly Prepared Veg Thali Meal</h3>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -bottom-4 -left-2 sm:left-2 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-[10px] text-[#5B6470] font-bold uppercase tracking-wide">Rated</p>
                <p className="text-sm font-black text-[#1F2933]">4.9 / 5 stars</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 sm:right-2 bg-green-600 text-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-green-500">
              <span className="text-xl">🌱</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide opacity-80">Diet</p>
                <p className="text-sm font-black">100% Pure Veg</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}