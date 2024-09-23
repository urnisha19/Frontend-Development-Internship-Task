import { useState, useEffect } from "react";
import Tshirt from "../../assets/tshirt.png";
import CustomProduct from "../../assets/Create custom products.png";
import { CheckIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const HeroSection = () => {
  // State to track the current image
  const [currentImage, setCurrentImage] = useState(Tshirt);

  useEffect(() => {
    // Set an interval to toggle between the images every second
    const imageToggle = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === Tshirt ? CustomProduct : Tshirt
      );
    }, 3000); // Change image every 1 second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(imageToggle);
  }, []);

  return (
    <section className="bg-white py-16 px-10 m-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Hero content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Create and sell custom products
          </h1>
          <ul className="list-none mb-6 space-y-3">
            <li className="flex items-center justify-center md:justify-start text-lg text-gray-600">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2" />
              100% Free to use
            </li>
            <li className="flex items-center justify-center md:justify-start text-lg text-gray-600">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2" />
              900+ High-Quality Products
            </li>
            <li className="flex items-center justify-center md:justify-start text-lg text-gray-600">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2" />
              Largest global print network
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg mb-3 md:mb-0 w-full md:w-auto">
              Start for free
            </button>
            <button className="flex items-center justify-center px-6 py-3 text-lg text-gray-700 border border-gray-300 rounded-md w-full md:w-auto">
              <PlayCircleIcon className="w-6 h-6 mr-2" />
              How it works?
            </button>
          </div>

          <p className="mt-6 text-green-500 text-center md:text-left">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right side - Hero image with toggle effect */}
        <div className="flex justify-center md:justify-end animate-wiggle animate-infinite">
          <img
            src={currentImage}
            alt="Custom Product"
            className="w-full md:w-3/4"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;