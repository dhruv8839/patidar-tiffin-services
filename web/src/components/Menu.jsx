import { useState } from "react";

const WEEKDAY = [
  { icon: "🍲", name: "Dal Fry / Dal Tadka",   desc: "Creamy yellow lentils tempered with ghee, cumin, garlic, onions, and ripe tomatoes." },
  { icon: "🥬", name: "Seasonal Veg (Sabji)",   desc: "Fresh local seasonal vegetables prepared with warm, authentic home spices." },
  { icon: "🍚", name: "Chawal (Rice)",           desc: "Perfectly steamed, fluffy long-grain basmati rice." },
  { icon: "🫓", name: "5 Butter Roti",           desc: "Hot, freshly rolled whole wheat rotis with a brush of pure butter." },
  { icon: "🥗", name: "Salad / Papad",           desc: "Freshly sliced cucumber & carrots paired with a crispy roasted papad." },
];

const SUNDAY = [
  { icon: "🍲", name: "Indori Dal-Bafle",  desc: "Indore's specialty wheat balls dipped in ghee, served with spicy mixed dal." },
  { icon: "🍮", name: "Rice Kheer",          desc: "Creamy traditional dessert slow-cooked with milk, cardamom, and dry fruits." },
  { icon: "🫓", name: "Soft Wheat Puris",    desc: "Crispy, golden-puffed wheat bread fried fresh in clean vegetable oil." },
  { icon: "✨", name: "Special Curry",        desc: "Seasonal vegetable or paneer curry depending on weekly availability." },
];

export default function Menu() {
  const [tab, setTab] = useState("weekday");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  const items = tab === "weekday" ? WEEKDAY : SUNDAY;

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#F9FAF7] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Fresh Options</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">Our Delicious <span className="text-orange-600">Daily Menu</span></h2>
          <p className="mt-3 text-[#4B5563] max-w-xl mx-auto text-base">
            Cooked fresh twice a day with pure vegetarian ingredients and home-style cleanliness.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-[#E8E2D8] rounded-xl p-1 shadow-sm gap-1">
            <button
              onClick={() => setTab("weekday")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                tab === "weekday"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "text-[#4B5563] hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              📅 Monday – Saturday
            </button>
            <button
              onClick={() => setTab("sunday")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                tab === "sunday"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-[#4B5563] hover:text-green-600 hover:bg-green-50"
              }`}
            >
              🎉 Sunday Special
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className={`grid gap-5 ${tab === "weekday" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-[#E8E2D8] rounded-[18px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl ${
                  tab === "weekday" ? "bg-orange-50" : "bg-green-50"
                }`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-[#1F2933] text-sm sm:text-base">{item.name}</h3>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 ${
                      tab === "weekday"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {tab === "weekday" ? "Daily" : "Sunday"}
                    </span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal note */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 flex items-start gap-3 max-w-2xl mx-auto">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-sm text-amber-800 font-medium leading-relaxed">
            <strong>Seasonal Note:</strong> Menu items may change slightly depending on seasonal vegetable availability to guarantee the best quality.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => scrollTo("order-now")}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-md"
          >
            📋 Order Your Tiffin Now
          </button>
        </div>

      </div>
    </section>
  );
}
