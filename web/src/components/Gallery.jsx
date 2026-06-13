import { useState } from "react";

const IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Traditional Indian Thali",  title: "Complete Thali Meal" },
  { id: 2, src: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Dal Fry",                  title: "Dal Fry – Daily Special" },
  { id: 3, src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Fresh Rotis",              title: "Fresh Butter Rotis" },
  { id: 4, src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Tiffin Box",              title: "Tiffin Packaging" },
  { id: 5, src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Dal Bafle",               title: "Sunday Special Dal-Bafle" },
  { id: 6, src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Seasonal Vegetables",    title: "Fresh Seasonal Vegetables" },
  { id: 7, src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Sweet Kheer",             title: "Traditional Kheer" },
  { id: 8, src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Puri with Curry",        title: "Sunday Puri & Curry" },
];

export default function Gallery() {
  const [light, setLight] = useState(null);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FFF8EF] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Visual Feast</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            Feast Your <span className="text-orange-600">Eyes</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-lg mx-auto text-base">
            A look at our freshly prepared home-cooked meals, packed with love and hygiene.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {IMAGES.map((img) => (
            <button
              key={img.id}
              onClick={() => setLight(img)}
              className="group relative overflow-hidden rounded-[18px] aspect-square bg-white border border-[#E8E2D8] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all focus:outline-none"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-end">
                <div className="w-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-xs sm:text-sm leading-snug">{img.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* View on Maps CTA */}
        <div className="mt-12 bg-white border border-[#E8E2D8] rounded-[18px] p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] max-w-2xl mx-auto">
          <h3 className="text-xl font-extrabold text-[#1F2933] mb-2">See More Photos</h3>
          <p className="text-[#4B5563] text-sm mb-6">
            View our real kitchen, food preparation, and location photos on Google Maps.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://maps.app.goo.gl/MGZXAavnzRhwuRo88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1F2933] border border-gray-300 font-bold px-5 py-3 rounded-lg text-sm transition-colors"
            >
              🗺️ View on Google Maps
            </a>
            <a
              href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors shadow-sm"
            >
              📱 Order on WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {light && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLight(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={light.src}
              alt={light.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="bg-black/60 text-white text-sm font-bold px-4 py-1.5 rounded-full backdrop-blur">
                {light.title}
              </span>
            </div>
            <button
              onClick={() => setLight(null)}
              className="absolute top-3 right-3 w-9 h-9 bg-black/50 text-white rounded-full flex items-center justify-center text-lg hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}