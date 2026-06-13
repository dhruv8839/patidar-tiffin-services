const PLANS = [
  {
    name: "Single Tiffin",
    price: "₹70",
    period: "per meal",
    desc: "Dal Fry, Seasonal Veg, Chawal, 5 Butter Roti, Salad / Papad",
    features: [
      "100% vegetarian lunch or dinner",
      "Cooked fresh daily with hygiene",
      "Soft butter rotis made of wheat",
      "Free delivery in Silicon City",
    ],
    tag: null,
    accent: "orange",
  },
  {
    name: "Monthly 1 Time Meal",
    price: "₹1,850",
    period: "per month",
    desc: "Ideal for students & professionals — daily lunch or dinner.",
    features: [
      "Daily 1 meal (Mon – Sat)",
      "Choose lunch or dinner",
      "Pause with advance notice",
      "Free delivery included",
    ],
    tag: "Popular Choice",
    accent: "green",
  },
  {
    name: "Monthly 2 Time Meals",
    price: "₹3,600",
    period: "per month",
    desc: "Best value for complete daily nutrition — lunch + dinner.",
    features: [
      "Daily 2 meals (Lunch + Dinner, Mon – Sat)",
      "Healthy balanced varieties daily",
      "Pause with advance notice",
      "Free delivery included",
    ],
    tag: "Best Value",
    accent: "orange",
    highlight: true,
  },
];

export default function Pricing({ onSelectPlan }) {
  const handleOrder = (planName) => {
    if (onSelectPlan) onSelectPlan(planName);
    const el = document.getElementById("order-now");
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#FFF8EF] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Pricing Plans</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            Choose Your <span className="text-orange-600">Perfect Plan</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-xl mx-auto text-base">
            Affordable plans with free delivery across Silicon City, Bijalpur &amp; Nihalpur Mundi, Indore.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-[18px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border-2 ${
                plan.name === "Monthly 1 Time Meal"
                  ? "border-green-600 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  : plan.name === "Single Tiffin" || plan.highlight
                  ? "border-orange-500 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  : "border-[#E8E2D8] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              }`}
            >
              {/* Tag badge */}
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`text-[10px] sm:text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-md whitespace-nowrap block text-center ${
                    plan.name === "Monthly 1 Time Meal"
                      ? "bg-green-700 text-white border border-green-800"
                      : "bg-orange-600 text-white border border-orange-700"
                  }`}>
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="p-7 pt-9 flex-grow">
                <h3 className="text-lg font-extrabold text-[#1F2933] mb-1">{plan.name}</h3>
                <p className="text-xs text-[#5B6470] font-semibold uppercase tracking-wide mb-4">Pure Vegetarian</p>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-4xl font-black text-[#1F2933]">{plan.price}</span>
                  <span className="text-sm text-[#5B6470] font-semibold">/ {plan.period}</span>
                </div>
                <p className="text-sm text-[#4B5563] mb-5 leading-relaxed">{plan.desc}</p>

                {/* Free delivery pill */}
                <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                  🚚 Free Delivery Included
                </div>

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#1F2933]">
                      <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-black flex-shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => handleOrder(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-black text-sm text-white transition-colors shadow-sm ${
                    plan.accent === "green"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  Order Plan Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Details */}
        <div className="mt-14 bg-white border border-[#E8E2D8] rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-extrabold text-[#1F2933] mb-7 text-center flex items-center justify-center gap-2">
            🚚 Service &amp; Delivery Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📍", title: "Delivery Locations", info: "Silicon City, Bijalpur,\nNihalpur Mundi, Indore" },
              { icon: "⏰", title: "Delivery Times", info: "Lunch: 12:00 – 2:00 PM\nDinner: 7:00 – 9:00 PM" },
              { icon: "💳", title: "Payment Method", info: "Direct UPI Payment\nAdvance required" },
            ].map((d) => (
              <div key={d.title} className="flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm">
                  {d.icon}
                </div>
                <h4 className="font-bold text-[#1F2933] text-sm">{d.title}</h4>
                <p className="text-xs text-[#4B5563] whitespace-pre-line leading-relaxed">{d.info}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
