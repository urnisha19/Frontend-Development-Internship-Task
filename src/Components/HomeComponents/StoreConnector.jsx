import { useEffect } from "react";
import AOS from "aos";
import DesignifyLogo from "../../assets/designifyLogo.png";

const StoreConnector = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white mt-16 px-4">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Connect your store
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-12 text-center">
        Designify easily integrates with major e-commerce platforms and marketplaces
      </p>

      {/* Central Hub and Grid Layout */}
      <div className="relative grid grid-cols-3 grid-rows-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 justify-items-center items-center w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
        {/* Top Left - BigCommerce */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://www.svgrepo.com/show/330049/bigcommerce.svg"
            alt="BigCommerce"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Top Middle - API */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6733/6733834.png"
            alt="API"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Top Right - Etsy */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBkplnEehFuQQtwSFK-OvQjJ3SLpouz_tZQ&s"
            alt="Etsy"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Middle Left - Shopify */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/14079/14079289.png?semt=ais_hybrid"
            alt="Shopify"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Central Hub - Designify Logo */}
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex justify-center items-center shadow-lg"
          data-aos="zoom-out"
        >
          <img
            src={DesignifyLogo}
            alt="Designify Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Middle Right - WooCommerce */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://iconape.com/wp-content/files/km/114434/svg/woocommerce.svg"
            alt="WooCommerce"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Bottom Left - Wix */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/wix-company-icon.png"
            alt="Wix"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Bottom Middle - Squarespace */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://cdn.prod.website-files.com/6322403510fc7858f912d692/64fa19fc81603f70448d5dd3_squarespace-logo-png-transparent.png"
            alt="Squarespace"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Bottom Right - PrestaShop */}
        <a
          href="/"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://w7.pngwing.com/pngs/755/944/png-transparent-prestashop-logo-e-commerce-business-people-logo-bird.png"
            alt="PrestaShop"
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default StoreConnector;
