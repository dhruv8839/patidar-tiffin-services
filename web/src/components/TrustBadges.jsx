export default function TrustBadges() {
  const badges = [
    { icon: "🟢", title: "Pure Veg",              desc: "100% vegetarian kitchen & utensils",          border: "border-green-200",   bg: "bg-green-50" },
    { icon: "🌱", title: "Fresh Daily",            desc: "Prepared fresh every morning & evening",      border: "border-orange-200",  bg: "bg-orange-50" },
    { icon: "🧼", title: "Hygienic Food",          desc: "Clean prep & sanitation protocols",           border: "border-blue-200",    bg: "bg-blue-50" },
    { icon: "🚚", title: "Free Delivery",          desc: "Silicon City & selected areas",               border: "border-indigo-200",  bg: "bg-indigo-50" },
    { icon: "⚙️", title: "Customization",          desc: "Modify oil, spice & rotis easily",           border: "border-pink-200",    bg: "bg-pink-50" },
    { icon: "📅", title: "Advance Booking",        desc: "Secure your daily meals in advance",          border: "border-teal-200",    bg: "bg-teal-50" },
    { icon: "🏠", title: "Homemade Taste",         desc: "Flavors that feel like home cooking",         border: "border-yellow-200",  bg: "bg-yellow-50" },
    { icon: "💰", title: "Affordable Plans",       desc: "Starting from just ₹70 per tiffin",          border: "border-orange-200",  bg: "bg-orange-50" },
  ];

  return (
    <section id="trust-badges" className="py-14 bg-[#F9FAF7] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Our Standards</span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#1F2933]">
            Why People <span className="text-orange-600">Trust Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {badges.map((b) => (
            <div
              key={b.title}
              className={`flex flex-col items-center text-center bg-white border border-[#E8E2D8] rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 hover:-translate-y-1 transition-all`}
            >
              <div className={`w-11 h-11 ${b.bg} rounded-xl flex items-center justify-center text-2xl mb-3`}>{b.icon}</div>
              <h4 className="font-bold text-[#1F2933] text-xs mb-1 leading-tight">{b.title}</h4>
              <p className="text-[10px] text-[#4B5563] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
