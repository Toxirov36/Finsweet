import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import ArrowRight from "./ArrowRight";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Service", to: "/service" },
  { label: "Company", to: "/company" },
  { label: "Career", to: "/career" },
  { label: "Blog", to: "/blog" },
  { label: "Contact us", to: "/contact" },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/"><Logo light /></Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className={`text-sm transition-colors ${
              pathname === l.to
                ? "text-orange-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="flex items-center gap-1 border border-white text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors"
        >
          Clone project <ArrowRight />
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-4 flex flex-col gap-3 shadow-xl">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm py-2 px-3 rounded transition-colors ${
                pathname === l.to
                  ? "text-orange-400 bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-1 border border-white text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors mt-2"
          >
            Clone project <ArrowRight />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;