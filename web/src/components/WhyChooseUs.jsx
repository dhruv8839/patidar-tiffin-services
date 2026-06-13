const FEATURES = [
  { icon: "🌱", title: "Pure Vegetarian",       desc: "100% veg meals in a dedicated pure-veg kitchen using premium ingredients." },
  { icon: "👨‍🍳", title: "Freshly Cooked Daily",  desc: "Every meal is prepared fresh twice a day to match home-style hygiene standards." },
  { icon: "📦", title: "Hygienic Packaging",    desc: "Food-grade insulated lunchboxes — hot, fresh, and leak-proof every time." },
  { icon: "⏰", title: "On-Time Delivery",       desc: "Punctual delivery at your door exactly at lunch or dinner time." },
  { icon: "🚚", title: "Free Delivery",          desc: "No charges in Silicon City, Bijalpur, and select nearby areas." },
  { icon: "💰", title: "Affordable Plans",       desc: "Authentic home-cooked meals from just ₹70 per tiffin." },
  { icon: "⚙️", title: "Customization",          desc: "Tailor oil level, spice, or roti count to your personal preference." },
  { icon: "📅", title: "Advance Booking",        desc: "Monthly subscriptions — zero daily ordering stress." },
  { icon: "🏠", title: "Homemade Taste",         desc: "Traditional recipes that remind you of comforting home cooking." },
];

const STATS = [
  { label: "Active Customers", value: "500+" },
  { label: "Pure Vegetarian",  value: "100%" },
  { label: "Serving Indore",   value: "2+ Yrs" },
  { label: "Delivery Charge",  value: "₹0" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-[#FFF8EF] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Why Choose Us</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            What Makes Us <span className="text-orange-600">Special</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-xl mx-auto text-base">
            We deliver not just meals, but a healthy experience of traditional home-cooked flavors with modern delivery convenience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[#E8E2D8] rounded-[18px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-bold text-[#1F2933] mb-1.5 group-hover:text-orange-600 transition-colors">{f.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white border border-[#E8E2D8] rounded-[18px] p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="text-3xl font-black text-orange-600 mb-1">{s.value}</div>
              <div className="text-xs text-[#4B5563] font-semibold uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gray-900 rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">Ready to Taste Home-Style Meals?</h3>
          <p className="text-[#5B6470] mb-7 max-w-lg mx-auto text-base">
            Join hundreds of satisfied families, students, and professionals in Indore who trust us for their daily tiffin.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
            >
              📱 Order on WhatsApp
            </a>
            <a
              href="tel:+918085512832"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
            >
              📞 Call: 8085512832
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}