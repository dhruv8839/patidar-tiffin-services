const NAV_LINKS = [
  { label: "Home",      id: "home" },
  { label: "About",     id: "about" },
  { label: "Menu",      id: "menu" },
  { label: "Pricing",   id: "pricing" },
  { label: "Customize", id: "customize" },
  { label: "Gallery",   id: "gallery" },
  { label: "Reviews",   id: "reviews" },
  { label: "Terms",     id: "terms" },
  { label: "Contact",   id: "contact" },
];

export default function Footer() {
  const scroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">P</span>
              </div>
              <div>
                <h3 className="font-black text-base">Patidar Tiffin Services</h3>
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide">Healthy. Homemade. Delivered Daily.</p>
              </div>
            </div>
            <p className="text-[#5B6470] text-sm leading-relaxed mb-6 max-w-md">
              Fresh pure vegetarian homemade tiffin for students, working professionals, and families. We deliver daily with hygiene, taste, and punctuality. Located in Nihalpur Mundi, Bijalpur — serving Silicon City, Indore.
            </p>
            <div className="flex gap-2">
              {[
                { title: "WhatsApp",   href: "https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services.", bg: "bg-green-700 hover:bg-green-600", icon: "📱" },
                { title: "Call",       href: "tel:+918085512832",                                                     bg: "bg-orange-700 hover:bg-orange-600", icon: "📞" },
                { title: "Email",      href: "mailto:patidartiffinservicesindore@gmail.com",                           bg: "bg-gray-700 hover:bg-gray-600", icon: "✉️" },
                { title: "Maps",       href: "https://maps.app.goo.gl/MGZXAavnzRhwuRo88",                             bg: "bg-blue-700 hover:bg-blue-600", icon: "🗺️" },
              ].map((s) => (
                <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                   className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center text-lg transition-colors`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-orange-400 mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scroll(l.id)} className="text-[#5B6470] hover:text-white text-sm transition-colors text-left">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-orange-400 mb-4 uppercase tracking-wide">Contact Info</h4>
            <div className="space-y-3 text-sm text-[#5B6470]">
              <div>
                <p className="text-[#4B5563] text-xs uppercase tracking-wide mb-0.5">Address</p>
                <a href="https://maps.app.goo.gl/MGZXAavnzRhwuRo88" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Nihalpur Mundi, Bijalpur<br />Indore, Madhya Pradesh
                </a>
              </div>
              <div>
                <p className="text-[#4B5563] text-xs uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                <a href="tel:+918085512832" className="hover:text-white transition-colors">+91 8085512832</a>
              </div>
              <div>
                <p className="text-[#4B5563] text-xs uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:patidartiffinservicesindore@gmail.com" className="hover:text-white transition-colors break-all">
                  patidartiffinservicesindore@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#4B5563] text-xs uppercase tracking-wide mb-0.5">Service Areas</p>
                <p>Silicon City, Bijalpur, Nihalpur Mundi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery info strip */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "⏰", title: "Delivery Hours",    info: "Lunch: 12–2 PM  |  Dinner: 7–9 PM" },
              { icon: "🚚", title: "Free Delivery",      info: "No charges across Silicon City, Indore" },
              { icon: "🌱", title: "100% Vegetarian",    info: "Pure veg meals, fresh & hygienic daily" },
            ].map((d) => (
              <div key={d.title} className="bg-gray-800 rounded-xl px-5 py-4 flex items-center gap-4">
                <span className="text-2xl flex-shrink-0">{d.icon}</span>
                <div>
                  <h5 className="font-bold text-sm text-orange-400 mb-0.5">{d.title}</h5>
                  <p className="text-xs text-[#5B6470]">{d.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#4B5563] text-xs">© 2025 Patidar Tiffin Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Order Now
            </a>
            <p className="text-[#4B5563] text-xs">Made with ❤️ in Indore</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
