import HeroSection from "../Components/HomeComponents/HeroSection";
import Features from "../Components/HomeComponents/Features";
import ProductDesignSection from "../Components/HomeComponents/ProductDesignSection";
import ProductHighlights from "../Components/HomeComponents/ProductHighlights";
import StoreConnector from "../Components/HomeComponents/StoreConnector";
import BusinessCallToAction from "../Components/HomeComponents/BusinessCallToAction";
import TestimonialsSection from "../Components/HomeComponents/TestimonialsSection";
import MakeMoneySection from "../Components/HomeComponents/MakeMoneySection";

const HomePage = () => {
  return (
    <div className="p-20">
      <HeroSection />
      <Features />
      <ProductDesignSection />
      <ProductHighlights />
      <StoreConnector />
      <BusinessCallToAction />
      <TestimonialsSection />
      <MakeMoneySection />
    </div>
  );
};

export default HomePage;
