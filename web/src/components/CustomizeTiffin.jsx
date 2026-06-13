import { useState } from "react";

const OPTIONS = [
  { id: "extra_roti",       icon: "🫓", label: "Extra Roti",              desc: "Add extra hot whole wheat rotis" },
  { id: "less_spicy",       icon: "🌶️", label: "Less Spicy",              desc: "Enjoy meals with mild spices" },
  { id: "medium_spicy",     icon: "🔥", label: "Medium Spicy",            desc: "Standard balanced Indian spice" },
  { id: "more_rice",        icon: "🍚", label: "More Rice",               desc: "Request extra steamed rice" },
  { id: "less_oil",         icon: "💧", label: "Less Oil",                desc: "Dishes prepared with minimal oil" },
  { id: "extra_sabji",      icon: "🥬", label: "Extra Sabji",             desc: "Add extra seasonal vegetable" },
  { id: "salad_papad",      icon: "🥗", label: "Salad / Papad Preference", desc: "Specify sides preference" },
  { id: "premium_upgrade",  icon: "⭐", label: "Premium Upgrade",          desc: "Upgraded ingredients & grains" },
  { id: "special_packaging",icon: "📦", label: "Special Packaging",        desc: "Premium leak-proof lunchbox" },
];

export default function CustomizeTiffin() {
  const [selected, setSelected] = useState([]);

  const toggle = (id) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const send = () => {
    const labels = OPTIONS.filter((o) => selected.includes(o.id)).map((o) => o.label);
    let msg = "Hello Patidar Tiffin Services, I want to customize my tiffin order.\n\nCustomization Requested:\n";
    msg += labels.length > 0
      ? labels.map((l) => `- ${l}`).join("\n") + "\n\nPlease confirm availability & any extra charges."
      : "I am interested in customization options. Please guide me.";
    window.open(`https://wa.me/918085512832?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="customize" className="py-20 sm:py-24 bg-[#F9FAF7] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Tailor Your Meal</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            Customize <span className="text-orange-600">Your Tiffin</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-xl mx-auto text-base">
            Select your preferences below and send them via WhatsApp. Premium options, extra portions, or special packaging may have a minimal extra charge.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {OPTIONS.map((opt) => {
            const active = selected.includes(opt.id);
            return (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-[18px] border transition-all ${active ? "border-orange-500 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "border-[#E8E2D8] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-orange-300"}`}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{opt.icon}</span>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-[#1F2933] text-sm">{opt.label}</h4>
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[10px] font-black ${
                      active ? "border-orange-600 bg-orange-600 text-white" : "border-gray-300"
                    }`}>
                      {active && "✓"}
                    </span>
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">{opt.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected count */}
        {selected.length > 0 && (
          <p className="text-center text-sm text-[#4B5563] mb-4">
            <span className="font-bold text-orange-600">{selected.length}</span> option{selected.length !== 1 ? "s" : ""} selected
          </p>
        )}

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={send}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-md"
          >
            📱 Customize on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
