import AOS from "aos";
import { useEffect } from "react";

const ProductHighlights = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset from the top before the animation starts
      easing: "ease-in-out", // Easing for the animation
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100 m-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0">
        {/* Highlight 1 */}
        <div className="text-left rounded-lg p-6" data-aos="fade-down">
          <img
            src="https://printify.com/pfh/assets/legacy/custom-products.png"
            alt="Custom Products"
            className="w-24 h-24 mb-4"
          />
          <h5 className="text-2xl text-green-500 font-semibold">Create</h5>
          <h5 className="text-xl font-semibold mb-4">custom products</h5>
          <p className="text-gray-600">
            Easily add your designs to a wide range of products using our free
            tools.
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="text-left rounded-lg p-6" data-aos="fade-down">
          <img
            src="https://printify.com/pfh/assets/legacy/your-products.png"
            alt="Sell"
            className="w-24 h-24 mb-4"
          />
          <h5 className="text-2xl text-green-500 font-semibold">Sell</h5>
          <h5 className="text-xl font-semibold mb-4">on your terms</h5>
          <p className="text-gray-600">
            You choose the products, sale price, and where to sell.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="text-left rounded-lg p-6" data-aos="fade-down">
          <img
            src="https://printify.com/pfh/assets/legacy/fullfillment.png"
            alt="Fulfillment"
            className="w-24 h-24 mb-4"
          />
          <h5 className="text-2xl text-green-500 font-semibold">We handle</h5>
          <h5 className="text-xl font-semibold mb-4">fulfillment</h5>
          <p className="text-gray-600">
            Once an order is placed, we automatically handle all the printing
            and delivery logistics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
