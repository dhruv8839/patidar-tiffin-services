import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    location: "Silicon City, Indore",
    rating: 5,
    review: "Best tiffin service in Indore! The dal fry and butter rotis taste exactly like home. Delivery is always on time and packaging is hygienic. Highly recommend!",
    avatar: "R",
    plan: "Monthly 2 Time Meals",
  },
  {
    name: "Priya Patel",
    location: "Bijalpur, Indore",
    rating: 5,
    review: "Amazing food quality! The Sunday dal-bafle is absolutely special — it reminds me of home. Very affordable monthly plan. Very satisfied customer!",
    avatar: "P",
    plan: "Monthly 1 Time Meal",
  },
  {
    name: "Ankit Verma",
    location: "Silicon City, Indore",
    rating: 5,
    review: "Perfect for working professionals. Fresh, hygienic, and genuinely tastes like home-cooked food. I requested less spice and they happily accommodated.",
    avatar: "A",
    plan: "Monthly 1 Time Meal",
  },
  {
    name: "Sunita Joshi",
    location: "Nihalpur Mundi, Indore",
    rating: 5,
    review: "Free delivery, affordable pricing, and really good taste. The seasonal sabji changes daily which keeps variety going. 3 months and no complaints!",
    avatar: "S",
    plan: "Monthly 2 Time Meals",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? REVIEWS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === REVIEWS.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const r = REVIEWS[idx];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#F9FAF7] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Customer Feedback</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            What Our Customers <span className="text-orange-600">Say</span>
          </h2>
          <p className="mt-3 text-[#4B5563] text-base max-w-lg mx-auto">
            Hear from our active tiffin subscribers about their real experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white border border-[#E8E2D8] rounded-[18px] p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            {/* Quote mark */}
            <div className="text-6xl text-orange-200 font-serif leading-none select-none mb-4">"</div>

            <Stars rating={r.rating} />

            <p className="mt-4 text-[#1F2933] text-base sm:text-lg leading-relaxed font-medium italic">
              "{r.review}"
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-base flex-shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2933] text-sm">{r.name}</h4>
                  <p className="text-xs text-[#5B6470]">📍 {r.location}</p>
                </div>
              </div>
              <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full">
                {r.plan}
              </span>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-[#4B5563]" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-[#4B5563]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all ${i === idx ? "w-6 h-2.5 bg-orange-600" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Rating + Google link */}
        <div className="mt-12 bg-white border border-[#E8E2D8] rounded-[18px] p-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <h3 className="text-xl font-extrabold text-[#1F2933] mb-4">Overall Customer Rating</h3>
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="text-5xl font-black text-orange-600">4.9</span>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#5B6470] font-semibold uppercase tracking-wide">Based on 200+ customers</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm"
            >
              📱 Join Our Happy Customers
            </a>
            <a
              href="https://maps.app.goo.gl/MGZXAavnzRhwuRo88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1F2933] border border-gray-300 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              ⭐ View Google Reviews
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}