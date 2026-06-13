export default function About() {
  const stats = [
    { label: "Happy Customers", value: "500+" },
    { label: "Years Serving Indore", value: "2+" },
    { label: "Delivery Charge", value: "₹0" },
    { label: "Pure Vegetarian", value: "100%" },
  ];

  const highlights = [
    { icon: "🏠", title: "Homely Taste", desc: "Traditional recipes, cooked with love" },
    { icon: "🧼", title: "Hygienic Kitchen", desc: "Strict cleanliness every single day" },
    { icon: "⏰", title: "Punctual Delivery", desc: "Hot tiffin at your door on time" },
    { icon: "🌱", title: "Fresh Daily", desc: "Cooked fresh every morning & evening" },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FFF8EF] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Image ──────────────────────────── */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Indian kitchen — Patidar Tiffin Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Stats strip overlapping image */}
            <div className="absolute -bottom-6 left-4 right-4 bg-white border border-[#E8E2D8] rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 py-4 grid grid-cols-4 gap-2 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-black text-orange-600">{s.value}</div>
                  <div className="text-[9px] text-[#4B5563] font-semibold uppercase tracking-wide leading-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Content ─────────────────────── */}
          <div className="space-y-7 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1F2933] leading-tight">
                Our Story of<br />
                <span className="text-orange-600">Homely Flavors</span>
              </h2>
            </div>

            {/* Pull quote */}
            <blockquote className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl px-6 py-4 text-[#1F2933] italic text-base leading-relaxed">
              "Patidar Tiffin Services provides fresh, pure vegetarian, homemade-style meals for students, working professionals, and families. We focus on hygiene, taste, punctual delivery, and affordable pricing."
            </blockquote>

            <p className="text-[#4B5563] leading-relaxed">
              Our journey began with a simple mission: to give busy people in Indore wholesome, hygienic, and delicious vegetarian meals that taste like home. Every dish is prepared with the same care and love we would give our own family.
            </p>
            <p className="text-[#4B5563] leading-relaxed">
              Located in Nihalpur Mundi, Bijalpur, we deliver daily to Silicon City and surrounding areas with unwavering commitment to quality, cleanliness, and punctuality.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-3 bg-white border border-[#E8E2D8] rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4">
                  <span className="text-2xl flex-shrink-0">{h.icon}</span>
                  <div className="text-left">
                    <h4 className="font-bold text-[#1F2933] text-sm">{h.title}</h4>
                    <p className="text-xs text-[#4B5563] mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}