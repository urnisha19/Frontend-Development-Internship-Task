import DesignifyLogo from '../../assets/designifyLogo.png'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube, FaTiktok, FaReddit } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-300">
      <div className="container mx-auto px-6">
        {/* Logo and Social Media Icons */}
        <div className="flex justify-between items-center mb-8 m-10">
          {/* Left: Logo */}
          <div>
            <img src={DesignifyLogo} alt="Designify Logo" className="h-16" />
          </div>
          {/* Right: Social Media Icons */}
          <div className="flex space-x-4 m-10">
            <a href="https://facebook.com" aria-label="Facebook" className="text-green-500 hover:text-green-700">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-green-500 hover:text-green-700">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-green-500 hover:text-green-700">
              <FaLinkedinIn />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="text-green-500 hover:text-green-700">
              <FaPinterest />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-green-500 hover:text-green-700">
              <FaYoutube />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok" className="text-green-500 hover:text-green-700">
              <FaTiktok />
            </a>
            <a href="https://reddit.com" aria-label="Reddit" className="text-green-500 hover:text-green-700">
              <FaReddit />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-10">
          {/* Column 1: Integrations */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Integrations</h3>
            <ul className="text-gray-600 space-y-2">
              {['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Designify API', 'Designify Pop-Up Store', 'Shutterstock'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Discover</h3>
            <ul className="text-gray-600 space-y-2">
              {['Blog', 'Guides', 'Products', 'Etsy print-on-demand', 'Shopify print-on-demand', 'WooCommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand', 'Make Your Own Shirt', 'Brands', 'Pricing', 'Shipping Rates', 'Mockup Generator'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Start Selling */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Start Selling</h3>
            <ul className="text-gray-600 space-y-2">
              {['Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders', 'Transferring to Designify'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Designify */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Designify</h3>
            <ul className="text-gray-600 space-y-2">
              {['Print on Demand', 'Print Providers', 'Experts Program', 'Designify Express Delivery', 'Become a Partner', 'About', 'Designify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary', 'Merchant Protection'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Designify, Inc. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/intellectual-property" className="hover:underline">Intellectual Property Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/security" className="hover:underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
