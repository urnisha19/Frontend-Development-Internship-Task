import ProductDesign from "../../assets/ProductDesign.png";
import AOS from "aos";
import { useEffect } from "react";

const ProductDesignSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset from the top before the animation starts
      easing: "ease-in-out", // Easing for the animation
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100 m-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Image Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <img
              src={ProductDesign}
              alt="Add design to custom products"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Right Text Side */}
        <div
          className="md:w-1/2 md:pl-12 text-left bg-white p-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Easily add your design to a wide range of products
          </h2>
          <p className="text-gray-600 mb-6">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a
            href="#"
            className="text-green-500 font-semibold text-lg hover:text-green-700 transition-colors"
          >
            All products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDesignSection;
