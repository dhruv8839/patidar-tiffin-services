import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import About from "../components/About";
import Menu from "../components/Menu";
import Pricing from "../components/Pricing";
import CustomizeTiffin from "../components/CustomizeTiffin";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import UPIPayment from "../components/UPIPayment";
import OrderNow from "../components/OrderNow";
import Terms from "../components/Terms";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState("Single Tiffin");

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trust Badges - Quick credibility signals */}
      <TrustBadges />

      {/* About Us Section */}
      <About />

      {/* Menu Section */}
      <Menu />

      {/* Pricing Plans Section */}
      <Pricing onSelectPlan={setSelectedPlan} />

      {/* Customize Your Tiffin Section */}
      <CustomizeTiffin />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Customer Reviews Section */}
      <Reviews />

      {/* Food Gallery Section */}
      <Gallery />

      {/* Direct UPI Payment Section */}
      <UPIPayment />

      {/* Order Now (WhatsApp Form) Section */}
      <OrderNow
        selectedPlanVal={selectedPlan}
        setSelectedPlanVal={setSelectedPlan}
      />

      {/* Terms & Conditions */}
      <Terms />

      {/* Contact Us Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}