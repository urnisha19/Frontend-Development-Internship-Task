/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // icons for dropdown indicators
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline"; // icons for mobile menu
import DesignifyLogo from "../../assets/designifyLogo.png";

const Navbar = () => {
  // Tracks the visibility of dropdown menus
  const [dropdowns, setDropdowns] = useState({
    services: false,
    howItWorks: false,
    useCases: false,
    needHelp: false,
  });

  // Tracks the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* 
  The toggleDropdown function takes 'menuItem' (e.g., services, howItWorks) as an argument.
  It toggles the specified dropdown between open (true) and closed (false).
  It uses setDropdowns to update the dropdown state by copying the previous state (prevState) and only changing the selected menuItem.
  */
  const toggleDropdown = (menuItem) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menuItem]: !prevState[menuItem],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        {/* Navbar container */}
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <a href="/" className="">
            <img src={DesignifyLogo} alt="Logo" className="h-10" />
          </a>

          {/* Desktop menu (hidden on mobile and medium screens) */}
          <ul className="hidden lg:flex lg:space-x-8">
            <NavItem title="Catalogs" />
            <DropdownMenu
              title="How It Works"
              isOpen={dropdowns.howItWorks}
              toggle={() => toggleDropdown("howItWorks")}
              items={[
                { label: "How Designify Works", link: "/" },
                { label: "Print On Demand", link: "/" },
                { label: "Designify Quality Promise", link: "/" },
                { label: "What to sell?", link: "/" },
              ]}
            />
            <NavItem title="Pricing" />
            <NavItem title="Blog" />
            <DropdownMenu
              title="Services"
              isOpen={dropdowns.services}
              toggle={() => toggleDropdown("services")}
              items={[
                { label: "Designify Studio", link: "/" },
                { label: "Designify Express Delivery", link: "/" },
                { label: "Transfer Products", link: "/" },
                { label: "Order in Bulk", link: "/" },
                { label: "Experts Program", link: "/" },
              ]}
            />
            <DropdownMenu
              title="Use Cases"
              isOpen={dropdowns.useCases}
              toggle={() => toggleDropdown("useCases")}
              items={[
                { label: "Merch for Fans", link: "/" },
                { label: "Merch for eCommerce", link: "/" },
                { label: "Merch for Enterprises", link: "/" },
                { label: "Grow Your Store", link: "/" },
              ]}
            />
            <DropdownMenu
              title="Need Help?"
              isOpen={dropdowns.needHelp}
              toggle={() => toggleDropdown("needHelp")}
              items={[
                { label: "Help Center", link: "/" },
                { label: "Contacts", link: "/" },
                { label: "My Requests", link: "/" },
              ]}
            />
            <li>
              <a
                href="/"
                className="border px-4 py-2 rounded-lg hover:text-green-500"
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="/"
                className="border border-green-500 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white"
              >
                Sign Up
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle button (visible on small and medium screens) */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars4Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu (shown on small and medium screens) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg p-4">
            <ul className="space-y-4">
              <NavItem title="Catalogs" />
              <DropdownMenu
                title="How It Works"
                isOpen={dropdowns.howItWorks}
                toggle={() => toggleDropdown("howItWorks")}
                items={[
                  { label: "How Designify Works", link: "/" },
                  { label: "Print On Demand", link: "/" },
                  { label: "Designify Quality Promise", link: "/" },
                  { label: "What to sell?", link: "/" },
                ]}
              />
              <NavItem title="Pricing" />
              <NavItem title="Blog" />
              <DropdownMenu
                title="Services"
                isOpen={dropdowns.services}
                toggle={() => toggleDropdown("services")}
                items={[
                  { label: "Designify Studio", link: "/" },
                  { label: "Designify Express Delivery", link: "/" },
                  { label: "Transfer Products", link: "/" },
                  { label: "Order in Bulk", link: "/" },
                  { label: "Experts Program", link: "/" },
                ]}
              />
              <DropdownMenu
                title="Use Cases"
                isOpen={dropdowns.useCases}
                toggle={() => toggleDropdown("useCases")}
                items={[
                  { label: "Merch for Fans", link: "/" },
                  { label: "Merch for eCommerce", link: "/" },
                  { label: "Merch for Enterprises", link: "/" },
                  { label: "Grow Your Store", link: "/" },
                ]}
              />
              <DropdownMenu
                title="Need Help?"
                isOpen={dropdowns.needHelp}
                toggle={() => toggleDropdown("needHelp")}
                items={[
                  { label: "Help Center", link: "/" },
                  { label: "Contacts", link: "/" },
                  { label: "My Requests", link: "/" },
                ]}
              />
              <li>
                <a
                  href="/"
                  className="border px-4 py-2 rounded-lg hover:text-green-500"
                >
                  Log In
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="border border-green-500 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

const NavItem = ({ title }) => (
  <li>
    <a href="/" className="text-black hover:text-green-500">
      {title}
    </a>
  </li>
);

const DropdownMenu = ({ title, isOpen, toggle, items }) => (
  <li className="relative">
    <button
      onClick={toggle}
      className="flex items-center text-black hover:text-green-500 focus:outline-none"
    >
      {title}
      {isOpen ? (
        <ChevronUpIcon className="w-5 h-5 ml-1" />
      ) : (
        <ChevronDownIcon className="w-5 h-5 ml-1" />
      )}
    </button>
    {isOpen && (
      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="block px-4 py-2 text-black hover:text-green-500"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default Navbar;
