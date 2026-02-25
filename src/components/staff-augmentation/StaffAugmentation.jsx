import Hero from "./Hero";
import Commitment from "./Commitment";
import ServicesSection from "./ServicesSection";
import DarkCards from "./DarkCards";

const StaffAugmentation = () => {
  return (
    <div className="w-full mx-auto px-6">
      <Hero />
      <Commitment />
      <ServicesSection />
      <DarkCards />
      {/* Footer / Navbar can go here */}
    </div>
  );
};

export default StaffAugmentation;