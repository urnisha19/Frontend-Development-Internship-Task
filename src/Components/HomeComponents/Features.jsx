import higherProfits from "../../assets/higher-profits.svg";
import robustScaling from "../../assets/robust-scaling.svg";
import bestSelection from "../../assets/best-selection.svg";

const Features = () => {
  return (
    <section className="py-16 m-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Feature 1 */}
        <div className="p-8 flex flex-col text-left rounded-lg">
          <img
            src={higherProfits}
            alt="Higher Profits"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold mb-4">Higher Profits</h2>
          <p className="text-gray-600">
            We allow you to set the product pricing and earn more as you scale.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-8 flex flex-col text-left rounded-lg">
          <img
            src={robustScaling}
            alt="Robust Scaling"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold mb-4">Robust Scaling</h2>
          <p className="text-gray-600">
            Easily scale as your business grows with automated features and
            worldwide fulfillment.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-8 flex flex-col text-left rounded-lg">
          <img
            src={bestSelection}
            alt="Best Selection"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold mb-4">Best Selection</h2>
          <p className="text-gray-600">
            We provide the largest selection of high-quality products for your
            business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
