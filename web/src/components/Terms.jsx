import { useState } from "react";
import { ChevronDown, ShieldAlert } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      title: "Customization & Extra Items",
      icon: "⚙️",
      items: [
        "Tiffin customization is available as per your request.",
        "You can customize roti quantity, spice level, rice quantity, sabji preference, salad/papad preference, and other basic meal preferences.",
        "If you want higher quality ingredients, extra items, premium packaging, or special customization, a minimal extra charge may apply.",
        "Final customization details and extra charges will be fully confirmed on WhatsApp before starting the service."
      ]
    },
    {
      title: "Payments & Bookings",
      icon: "💳",
      items: [
        "Monthly and daily tiffin services require advance payment.",
        "Monthly subscription payment should be completed in full before starting the meal service.",
        "Daily tiffin orders should be confirmed at least 4 hours in advance."
      ]
    },
    {
      title: "Delivery & Timings",
      icon: "🚚",
      items: [
        "Free delivery is available in selected nearby areas: Silicon City, Bijalpur, Nihalpur Mundi.",
        "Delivery timing may slightly vary due to traffic, weather, or unavoidable circumstances. We aim for peak punctuality."
      ]
    },
    {
      title: "Pause, Skip & Cancellations",
      icon: "📅",
      items: [
        "Customers must inform us in advance if they want to pause, cancel, or skip a meal.",
        "Meal skip requests must be notified at least 4 hours in advance. Skipped meals without prior notice will not be adjusted or refunded."
      ]
    },
    {
      title: "Quality & Complaints",
      icon: "🌱",
      items: [
        "All food is prepared fresh daily in a 100% vegetarian, clean kitchen.",
        "Menu items may change slightly depending on seasonal vegetable availability.",
        "Any feedback, complaint, or quality issue must be reported on the same day via WhatsApp or call for quick resolution."
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleSection = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="terms" className="py-20 sm:py-24 bg-[#F9FAF7] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-extrabold text-sm uppercase tracking-widest block mb-2">
            Agreement Rules
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2933] tracking-tight">
            Terms &amp; <span className="text-orange-600">Conditions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto mt-4 font-medium">
            Please read our guidelines carefully to help us serve you with the highest quality and consistency.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {sections.map((section, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[18px] border border-[#E8E2D8] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300"
              >
                {/* Header button */}
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-extrabold text-[#1F2933] hover:text-orange-600 focus:outline-none transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl bg-orange-50 w-11 h-11 rounded-xl flex items-center justify-center border border-orange-100">
                      {section.icon}
                    </span>
                    <span className="text-base sm:text-lg">{section.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5B6470] transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>

                {/* Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-gray-100 p-6 bg-gray-50" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <ul className="space-y-3.5">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-[#1F2933] font-semibold leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 max-w-3xl mx-auto bg-amber-50 rounded-2xl p-5 border border-amber-200 flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <p className="text-xs text-amber-800 font-bold leading-normal">
            <strong>Note:</strong> By subscribing or placing an order, you agree to the terms listed above. If you have any questions, please contact us on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
