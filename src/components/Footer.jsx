import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/staff", label: "Staff Augmentation" },
  { to: "/system", label: "System Integration" },
  { to: "/training", label: "Training" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Param Jyoti logo"
              className="w-10 h-10 rounded-full border border-orange-500"
            />
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Param Jyoti Infotech Pvt. Ltd.
              </div>
              <div className="text-[11px] text-gray-500">
                Empowering Innovation, Securing the Future
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "text-gray-600 hover:text-orange-500 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] text-gray-500">
          <span>
            © {new Date().getFullYear()} Param Jyoti Infotech Pvt. Ltd. All rights reserved.
          </span>
          <span>Built for production-ready web presence.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
