import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/staff", label: "Staff Augmentation" },
  { to: "/system", label: "System Integration" },
  { to: "/training", label: "Training" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navClassName = ({ isActive }) =>
    [
      "px-3 py-2 text-sm font-medium transition-colors rounded-md",
      isActive ? "text-orange-500 bg-orange-50" : "text-gray-700 hover:text-orange-500",
    ].join(" ");

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        const el = document.getElementById("contact-section");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return;
    }

    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Param Jyoti logo"
            className="h-[60px] w-[60px] object-contain"
          />
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleContactClick}
            className="text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-sm"
          >
            Contact Us
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 px-6 py-3 bg-white">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "text-left px-2 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:bg-gray-50",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
