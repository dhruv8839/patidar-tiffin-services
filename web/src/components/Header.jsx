import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [activeId,   setActiveId]     = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(link.id); },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0.05 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ────────────────────────────────── */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 flex-shrink-0 focus:outline-none"
          >
            <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-base">P</span>
            </div>
            <div className="leading-tight text-left">
              <span className="text-sm font-black text-gray-900 block">Patidar Tiffin</span>
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider block">Services</span>
            </div>
          </button>

          {/* ── Desktop Nav ──────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const active = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-2 text-[13px] font-semibold rounded-md transition-colors duration-200 nav-link-underline ${
                    active
                      ? "text-orange-600 nav-link-underline-active"
                      : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* ── Right Actions ────────────────────────── */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              <span>📱</span>
              <span className="hidden md:inline">Order on WhatsApp</span>
              <span className="md:hidden">Order</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <nav className="grid grid-cols-3 gap-2 mb-4">
            {NAV_LINKS.map((link) => {
              const active = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`py-2.5 px-2 rounded-lg text-xs font-semibold text-center transition-colors ${
                    active
                      ? "bg-orange-50 text-orange-600 border border-orange-200"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <a
            href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-sm transition-colors"
          >
            📱 Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}