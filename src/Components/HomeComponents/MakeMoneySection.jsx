import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MakeMoneySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto py-16 px-4 md:px-0 relative mt-20">
      {/* Left - Profit Calculator */}
      <div
        className="md:w-2/5 w-full relative z-10 mb-8 md:mb-0"
        data-aos="slide-left"
      >
        <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Make Money, Risk-Free
          </h2>
          <p className="mb-4 text-sm md:text-base">
            You pay for fulfillment only when you make a sale.
          </p>
          <div className="bg-gray-800 p-8 rounded-lg mb-6">
            <div className="flex justify-between mb-3">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>
            <hr className="border-gray-700 my-4" />
            <div className="flex justify-between">
              <span className="text-green-400 font-bold">Your profit</span>
              <span className="text-green-400 font-bold">$18</span>
            </div>
          </div>
          <button
            type="button"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Start selling
          </button>
          <p className="text-gray-400 text-xs md:text-sm mt-4">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>
      </div>

      {/* Right - Illustration */}
      <div
        className="md:w-2/5 w-full flex justify-center items-center relative"
        data-aos="fade-up"
      >
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-digital-natives-illustration_23-2151256404.jpg?t=st=1727089176~exp=1727092776~hmac=29fe0d2904d51be661e79ad10d045517da3a5a6f019884245b0a7b87c5c2cf63&w=740"
          alt="Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default MakeMoneySection;
