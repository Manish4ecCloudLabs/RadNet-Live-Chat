import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-100">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img
              src="https://www.radnet.com/files/locator/fields/field-division-logo/radnet-orange-county.png"
              alt="RadNet Orange County"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Excellence in medical imaging with board-certified radiologists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/for-patients" className="text-gray-400 hover:text-white transition">
                  For Patients
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-gray-400 hover:text-white transition">
                  For Providers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-white transition">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h4 className="font-bold mb-4 text-white">Insurance</h4>
            <p className="text-gray-400 text-sm mb-4">We accept most major insurance plans.</p>
            <div className="flex gap-4">
              <div className="bg-white rounded px-3 py-2 text-gray-900 font-semibold text-xs">
                Anthem
              </div>
              <div className="bg-white rounded px-3 py-2 text-gray-900 font-semibold text-xs">
                Cigna
              </div>
              <div className="bg-white rounded px-3 py-2 text-gray-900 font-semibold text-xs">
                Health Net
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-4 h-4 text-orange-500" />
              <a href="tel:7147841643" className="text-gray-400 hover:text-white transition">
                714-784-1643
              </a>
            </div>
            <h5 className="font-semibold text-white mb-2 text-sm">Follow Us</h5>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 RadNet Orange County. All rights reserved.</p>
              <p className="mt-2">
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy
                </Link>
                {" • "}
                <Link to="/disclaimer" className="hover:text-white transition">
                  Disclaimer
                </Link>
                {" • "}
                <Link to="/accessibility" className="hover:text-white transition">
                  Accessibility
                </Link>
              </p>
            </div>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              All locations are ACR Accredited
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-red-600 hover:text-red-500 transition font-semibold text-sm"
            >
              BACK TO TOP
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
