import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, HelpCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      title: "WhatsApp & Call",
      value: "+91 8085512832",
      link: "https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin.%20Please%20share%20details.",
      icon: <Phone className="w-6 h-6 text-green-600" />,
      color: "bg-green-50",
      linkText: "Message on WhatsApp",
    },
    {
      title: "Email Support",
      value: "patidartiffinservicesindore@gmail.com",
      link: "mailto:patidartiffinservicesindore@gmail.com",
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50",
      linkText: "Send an Email",
    },
    {
      title: "Our Location",
      value: "Nihalpur Mundi, Bijalpur, Indore",
      link: "https://maps.app.goo.gl/MGZXAavnzRhwuRo88",
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      color: "bg-green-50",
      linkText: "View on Google Maps",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FFF8EF] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-extrabold text-sm uppercase tracking-widest block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2933] tracking-tight">
            Contact &amp; <span className="text-orange-600">Location</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto mt-4 font-medium">
            Have questions about delivery areas or subscription customization? Connect with us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards & Business Hours */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-[#1F2933]">
              Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((card, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-orange-100/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className={`w-11 h-11 ${card.color} rounded-2xl flex items-center justify-center mb-4`}>
                      {card.icon}
                    </div>
                    <h4 className="font-extrabold text-[#1F2933] text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-[#4B5563] font-semibold mb-6 break-all leading-normal">{card.value}</p>
                  </div>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-orange-600 hover:text-orange-700 uppercase tracking-wider"
                  >
                    {card.linkText} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}

              {/* Delivery Zone Info Card */}
              <div className="bg-white rounded-3xl p-6 border border-orange-100/30 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-extrabold text-[#1F2933] text-sm mb-1">Service & Delivery Areas</h4>
                  <p className="text-xs text-[#4B5563] font-semibold mb-4 leading-normal">
                    Free daily delivery in Silicon City and selected nearby areas in Bijalpur & Nihalpur Mundi, Indore.
                  </p>
                </div>
              </div>
            </div>

            {/* Business & Delivery Hours Card */}
            <div className="bg-white rounded-[18px] p-8 border border-[#E8E2D8] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <h4 className="font-extrabold text-[#1F2933] mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" /> Business Hours
              </h4>
              
              <div className="space-y-3.5 text-sm font-semibold text-[#4B5563] divide-y divide-gray-100">
                <div className="flex justify-between items-center py-2 first:pt-0">
                  <span className="text-[#1F2933]">Monday – Saturday</span>
                  <span className="text-xs bg-orange-50/50 border border-orange-200/30 px-3 py-1 rounded-full text-orange-700 font-bold">8:30 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#1F2933]">Sunday</span>
                  <span className="text-xs bg-green-50/50 border border-green-200/30 px-3 py-1 rounded-full text-green-700 font-bold">8:30 AM – 8:00 PM (Special Menu)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#1F2933]">Lunch Delivery</span>
                  <span className="text-xs text-[#4B5563] font-bold uppercase tracking-wider">12:00 PM – 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#1F2933]">Dinner Delivery</span>
                  <span className="text-xs text-[#4B5563] font-bold uppercase tracking-wider">7:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl font-black text-[#1F2933] mb-8">
              Find Us On Google Maps
            </h3>

            {/* Map wrapper */}
            <div className="rounded-[18px] overflow-hidden border border-[#E8E2D8] shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-72 sm:h-96 w-full relative mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5558949398527!2d75.83894637530892!3d22.656391879435265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7e3fb8e975%3A0xf98c5f7c1d07cb65!2sPatidar%20Tiffin%20Service!5e0!3m2!1sen!2sin!4v1718123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Patidar Tiffin Service Location"
              ></iframe>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <a
                href="https://maps.app.goo.gl/MGZXAavnzRhwuRo88"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-green-700 hover:text-green-800 underline underline-offset-4"
              >
                📍 Open in Google Maps app <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="tel:+918085512832"
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-colors"
              >
                📞 Call Center: 8085512832
              </a>
            </div>
          </div>

        </div>

        {/* FAQs */}
        <div className="mt-16 max-w-5xl mx-auto bg-white border border-[#E8E2D8] rounded-[18px] p-8 sm:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <h3 className="text-2xl font-black text-[#1F2933] mb-10 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-500" /> Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How do I start my tiffin service subscription?",
                a: "Select your plan, fill out the simple order form above, and click booking confirm to WhatsApp us. We will set up your dates and payments.",
              },
              {
                q: "What delivery charges do you charge?",
                a: "No delivery charges! We provide entirely free meal delivery in Silicon City, Bijalpur, and select nearby zones in Indore.",
              },
              {
                q: "Can I customize the spiciness or roti count?",
                a: "Yes. You can choose roti count, less oil, custom spices, or salad options in our Customize Tiffin section.",
              },
              {
                q: "What payment systems are available?",
                a: "We accept direct UPI payments via GPay, PhonePe, Paytm, BHIM, or QR code scan. Advance payment is required for monthly subscriptions.",
              },
              {
                q: "Can I pause my tiffin subscription?",
                a: "Absolutely. Inform us on WhatsApp at least 4 hours in advance if you want to skip or pause a meal, and we'll adjust your plan.",
              },
              {
                q: "Do you serve on Sundays?",
                a: "Yes! We serve a Sunday Special (Dal-Bafle, Kheer, Puri) in the afternoon. Normal weekly menu is served Monday to Saturday.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-l-4 border-orange-500/70 pl-5">
                <h4 className="font-extrabold text-[#1F2933] mb-2.5 text-sm sm:text-base leading-tight">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-[#4B5563] font-semibold leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating pulsing WhatsApp button */}
      <a
        href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20want%20to%20order%20tiffin.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-700/30 animate-pulse-ring opacity-75"></span>
        <span className="relative text-white text-2xl sm:text-3xl font-bold">💬</span>
      </a>

    </section>
  );
}
