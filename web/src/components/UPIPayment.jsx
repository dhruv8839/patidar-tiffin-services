import { useState } from "react";
import { Copy, Check } from "lucide-react";

const UPI_ID = "8085512832@ybl";

const QUICK_PAY = [
  { label: "Single Tiffin",     amount: 70 },
  { label: "Monthly 1-Time",    amount: 1850 },
  { label: "Monthly 2-Time",    amount: 3600 },
];

export default function UPIPayment() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const upiLink = (amt) =>
    `upi://pay?pa=${UPI_ID}&pn=Patidar%20Tiffin%20Services&am=${amt}&cu=INR&tn=Tiffin%20Payment`;

  return (
    <section id="upi-payment" className="py-20 sm:py-24 bg-[#F9FAF7] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Safe &amp; Direct Payment</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-[#1F2933]">
            Pay via <span className="text-green-600">UPI</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-lg mx-auto text-base">
            Confirm your tiffin subscription on WhatsApp first, then pay directly using any UPI app.
          </p>
        </div>

        {/* Notice */}
        <div className="mb-8 max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-xl px-5 py-3.5 flex items-start gap-3">
          <span className="text-lg flex-shrink-0">⚠️</span>
          <p className="text-sm text-amber-800 font-medium">
            <strong>Important:</strong> Please confirm your order on WhatsApp with us before making any payment. Do not pay without confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: UPI ID + Quick Pay */}
          <div className="bg-white border border-[#E8E2D8] rounded-[18px] p-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <h3 className="font-extrabold text-[#1F2933] mb-5 flex items-center gap-2">
              💳 Payment Information
            </h3>

            {/* UPI ID */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wide mb-2">UPI ID (Virtual Payment Address)</label>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <code className="flex-grow font-mono text-base font-bold text-[#1F2933] select-all break-all">
                  {UPI_ID}
                </code>
                <button
                  onClick={copy}
                  className="flex-shrink-0 p-2 rounded-lg bg-white border border-gray-200 text-[#4B5563] hover:text-orange-600 hover:border-orange-300 transition-colors"
                  title="Copy UPI ID"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && <p className="text-xs text-green-600 font-semibold mt-1.5">✓ Copied to clipboard</p>}
            </div>

            {/* Quick Pay */}
            <div>
              <label className="block text-xs font-bold text-[#4B5563] uppercase tracking-wide mb-3">Quick Pay Links <span className="normal-case font-normal">(Mobile only)</span></label>
              <div className="grid grid-cols-3 gap-3">
                {QUICK_PAY.map((p) => (
                  <a
                    key={p.label}
                    href={upiLink(p.amount)}
                    className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl p-3 hover:border-orange-400 hover:bg-orange-50 transition-all text-center group"
                  >
                    <span className="text-[10px] text-[#5B6470] font-bold uppercase tracking-wide">{p.label}</span>
                    <span className="text-lg font-black text-[#1F2933] mt-1">₹{p.amount}</span>
                    <span className="mt-2 text-[10px] font-bold text-white bg-gray-400 group-hover:bg-orange-600 px-2 py-0.5 rounded-full transition-colors">
                      Pay Now
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-[10px] text-[#5B6470] mt-3 leading-relaxed">
                * Quick pay links open your installed UPI app (GPay, PhonePe, Paytm, BHIM). Desktop users should scan the QR code.
              </p>
            </div>
          </div>

          {/* Right: QR */}
          <div className="bg-white border border-[#E8E2D8] rounded-[18px] p-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center">
            <h3 className="font-extrabold text-[#1F2933] mb-5 flex items-center gap-2 self-start">
              📷 Scan &amp; Pay
            </h3>

            <div className="bg-white border border-[#E8E2D8] rounded-[18px] p-5 flex flex-col items-center w-full max-w-[220px] shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <img
                src="/upi_qr_cropped.png"
                alt="Patidar Tiffin Service UPI QR Code"
                className="w-[160px] h-[160px] object-contain mx-auto"
              />
              <p className="text-sm font-bold text-[#1F2933] mt-3">UPI: {UPI_ID}</p>
            </div>

            <p className="text-xs text-[#5B6470] text-center mt-4 leading-relaxed max-w-[200px]">
              Scan with GPay, PhonePe, Paytm, BHIM, or any banking app.
            </p>

            <a
              href="https://wa.me/918085512832?text=Hello%20Patidar%20Tiffin%20Services%2C%20I%20have%20paid%20via%20UPI.%20Please%20confirm%20my%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm w-full justify-center"
            >
              📱 Confirm Payment on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
