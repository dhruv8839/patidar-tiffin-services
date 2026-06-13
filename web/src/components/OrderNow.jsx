import { useState } from "react";
import { MessageSquare, ShieldCheck, MapPin, Clock } from "lucide-react";

const PLANS = [
  { label: "Single Tiffin – ₹70 per meal",              value: "Single Tiffin" },
  { label: "Monthly 1 Time Meal – ₹1,850/month",         value: "Monthly 1 Time Meal" },
  { label: "Monthly 2 Time Meals – ₹3,600/month (Best)", value: "Monthly 2 Time Meals" },
];

const AREAS = [
  { label: "Silicon City",          value: "Silicon City" },
  { label: "Bijalpur",              value: "Bijalpur" },
  { label: "Nihalpur Mundi",        value: "Nihalpur Mundi" },
  { label: "Selected Nearby Areas", value: "Selected Nearby Areas" },
];

const inputCls = "w-full border border-[#E8E2D8] rounded-[12px] px-4 py-3 text-sm text-[#1F2933] placeholder:text-[#5B6470] focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-white shadow-sm";
const labelCls = "block text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-2";

export default function OrderNow({ selectedPlanVal, setSelectedPlanVal }) {
  const [form, setForm] = useState({ name: "", mobile: "", deliveryArea: "Silicon City", address: "", customization: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError]         = useState("");

  const activePlan = selectedPlanVal || "Single Tiffin";

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const onPlanChange = (e) => { if (setSelectedPlanVal) setSelectedPlanVal(e.target.value); };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^\d{10}$/.test(form.mobile.trim())) return "Please enter a valid 10-digit WhatsApp number.";
    if (!form.address.trim()) return "Please enter your complete delivery address.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setIsSuccess(true);
  };

  const sendWhatsApp = () => {
    const msg = `Hello Patidar Tiffin Services, I want to order tiffin.\n\n📋 Customer Details:\n- Name: ${form.name.trim()}\n- WhatsApp: ${form.mobile.trim()}\n- Area: ${form.deliveryArea}\n- Address: ${form.address.trim()}\n\n🛒 Order:\n- Plan: ${activePlan}\n- Special Note: ${form.customization.trim() || "None"}\n\nPlease confirm availability and share payment details.`;
    window.open(`https://wa.me/918085512832?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const reset = () => {
    setForm({ name: "", mobile: "", deliveryArea: "Silicon City", address: "", customization: "" });
    setIsSuccess(false);
  };

  return (
    <section id="order-now" className="py-20 sm:py-24 bg-[#FFF8EF] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Secure Booking</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            Order Your <span className="text-orange-600">Tiffin</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-lg mx-auto text-base">
            Fill your details below, then send them instantly via WhatsApp. We'll confirm and guide you through the payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── Form ────────────────────────────── */}
          <div className="lg:col-span-7 bg-white border border-[#E8E2D8] rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-5">🎉</div>
                <h3 className="text-2xl font-black text-green-600 mb-2">Order Details Ready!</h3>
                <p className="text-sm text-[#4B5563] mb-8 max-w-sm mx-auto">
                  Your order has been formatted. Click below to open WhatsApp and send the details to us.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={sendWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-black text-base transition-colors shadow-md"
                  >
                    <MessageSquare className="w-5 h-5" /> Confirm &amp; Send on WhatsApp
                  </button>
                  <button
                    onClick={reset}
                    className="w-full text-xs font-bold text-[#5B6470] hover:text-[#4B5563] py-2 transition-colors"
                  >
                    ← Edit Details / Place Another Order
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-extrabold text-[#1F2933] pb-4 border-b border-gray-100">Enter Your Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={onChange}
                      placeholder="e.g. Rahul Sharma"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>WhatsApp Number *</label>
                    <input
                      type="tel" name="mobile" value={form.mobile} onChange={onChange}
                      placeholder="10-digit number" maxLength={10}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Tiffin Plan *</label>
                    <select name="plan" value={activePlan} onChange={onPlanChange} className={inputCls}>
                      {PLANS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Delivery Area *</label>
                    <select name="deliveryArea" value={form.deliveryArea} onChange={onChange} className={inputCls}>
                      {AREAS.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Complete Delivery Address *</label>
                  <textarea
                    name="address" value={form.address} onChange={onChange}
                    placeholder="Flat/House no., building name, street, landmarks…"
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div>
                  <label className={labelCls}>Special Instructions (Optional)</label>
                  <input
                    type="text" name="customization" value={form.customization} onChange={onChange}
                    placeholder="e.g. Less oil, medium spice, extra salad…"
                    className={inputCls}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded-r-xl text-sm font-semibold">
                    ⚠️ {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-black text-base transition-colors shadow-md"
                >
                  📝 Generate Order Details
                </button>
              </form>
            )}
          </div>

          {/* ── Info Panel ──────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* How it works */}
            <div className="bg-green-600 rounded-2xl p-7 text-white">
              <h3 className="font-extrabold text-base mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> How Ordering Works
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Fill Details", desc: "Complete the form with your name, address, and meal choice." },
                  { step: "2", title: "Open WhatsApp", desc: "Submit to prepare a pre-filled message for instant confirmation." },
                  { step: "3", title: "Pay via UPI", desc: "Confirm your order, send advance payment, and enjoy hot meals." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-sm">{s.title}</h4>
                      <p className="text-xs opacity-80 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick details */}
            <div className="bg-white border border-[#E8E2D8] rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-7">
              <h3 className="font-extrabold text-[#1F2933] text-base mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-600" /> Service Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Free Delivery: Silicon City, Bijalpur, Nihalpur Mundi</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Lunch: 12:00 PM – 2:00 PM</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Dinner: 7:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
