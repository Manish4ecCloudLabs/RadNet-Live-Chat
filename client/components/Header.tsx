import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Calendar, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Top toolbar */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition">
              <svg className="w-5 h-5" viewBox="0 0 52 53" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="53" fill="currentColor" />
              </svg>
              EXPLORE RADNET.COM
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded transition">
                <Phone className="w-4 h-4" />
                PHONE: 714.784.1643
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded transition">
                <Calendar className="w-4 h-4" />
                APPOINTMENTS
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded transition">
                PAY BILL
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded transition">
                PORTAL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://www.radnet.com/files/locator/fields/field-division-logo/radnet-orange-county.png"
              alt="RadNet Orange County"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavDropdown
              label="For Patients"
              isOpen={openDropdown === "patients"}
              onClick={() => toggleDropdown("patients")}
              items={[
                { label: "Overview", href: "/for-patients" },
                { label: "Schedule Appointment", href: "/for-patients/appointment" },
                { label: "FAQs", href: "/faqs" },
                { label: "Billing & Insurance", href: "/billing" },
                { label: "Exam Preparation", href: "/exam-prep" },
              ]}
            />
            <NavDropdown
              label="For Providers"
              isOpen={openDropdown === "providers"}
              onClick={() => toggleDropdown("providers")}
              items={[
                { label: "Overview", href: "/providers" },
                { label: "Guides & Forms", href: "/guides" },
                { label: "Provider Portal", href: "/provider-portal" },
              ]}
            />
            <NavItem label="Services" href="/services" />
            <NavItem label="Locations" href="/locations" />
            <NavDropdown
              label="About"
              isOpen={openDropdown === "about"}
              onClick={() => toggleDropdown("about")}
              items={[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <NavItem label="Blog" href="/blog" />
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="py-2">
              <button className="w-full text-left px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-50">
                For Patients
              </button>
              <button className="w-full text-left px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-50">
                For Providers
              </button>
              <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-50">
                Services
              </Link>
              <Link to="/locations" className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-50">
                Locations
              </Link>
              <button className="w-full text-left px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-50">
                About
              </button>
              <Link to="/blog" className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-50">
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      to={href}
      className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition"
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  isOpen,
  onClick,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition flex items-center gap-1"
      >
        {label}
        <ChevronDown className={cn("w-4 h-4 transition", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t last:rounded-b"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
