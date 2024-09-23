const BusinessCallToAction = () => {
  return (
    <div className="bg-green-100 rounded-lg flex flex-col sm:flex-row justify-between items-center p-8 sm:p-12 lg:p-16 mx-auto max-w-xl sm:max-w-2xl lg:max-w-4xl my-12 mt-20 sm:mt-32 lg:mt-40">
      <div className="text-center sm:text-left text-base sm:text-lg font-semibold mb-4 sm:mb-0">
        Are you a large business looking for custom solutions?
      </div>
      <button
        className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        aria-label="Contact sales for custom business solutions"
      >
        Talk to sales
      </button>
    </div>
  );
};

export default BusinessCallToAction;
