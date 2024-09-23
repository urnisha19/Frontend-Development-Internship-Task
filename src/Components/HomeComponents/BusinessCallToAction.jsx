const BusinessCallToAction = () => {
  return (
    <div className="bg-green-100 rounded-lg flex justify-between items-center p-16 mx-auto max-w-4xl my-12 mt-40">
      <div className="text-lg font-semibold">
        Are you a large business looking for custom solutions?
      </div>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        aria-label="Contact sales for custom business solutions"
      >
        Talk to sales
      </button>
    </div>
  );
};

export default BusinessCallToAction;
