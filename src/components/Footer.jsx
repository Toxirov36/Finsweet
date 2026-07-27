import { Link } from "react-router-dom";
import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import ColorAccent from "./ColorAccent";

const footerNav = {
  "": [
    { label: "Home", to: "/" },
    { label: "Service", to: "/service" },
    { label: "Company", to: "/company" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blog" },
  ],
  Service: [
    { label: "Technical support" },
    { label: "Testing" },
    { label: "Development" },
    { label: "AWS/Azure" },
    { label: "Consulting" },
    { label: "Information Technology" },
  ],
  Resources: [
    { label: "About Us" },
    { label: "Testimonial" },
    { label: "Privacy Policy" },
    { label: "Terms of use" },
    { label: "Blog", to: "/blog" },
  ],
};

const Footer = () => (
  <footer>
    <div className="px-4 md:px-8 lg:px-12 py-10 lg:py-16 bg-white">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1">
          <ColorAccent />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4 mb-4">
            Let's make<br />something special
          </h2>
          <p className="text-gray-900 font-semibold mb-4">Let's talk! 👍</p>
          <p className="text-gray-600 text-sm">020 7993 2905</p>
          <p className="text-gray-600 text-sm">hi@finsweet.com</p>
          <p className="text-gray-500 text-sm mt-3">
            DLF Cybercity, Bhubaneswar,<br />India, 652050
          </p>
        </div>
        {Object.entries(footerNav).map(([title, links], i) => (
          <div key={i} className="min-w-28 lg:min-w-32">
            {title && (
              <p className="font-bold text-gray-900 mb-3">{title}</p>
            )}
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  className="block text-gray-500 text-sm mb-2 hover:text-gray-900 transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <span
                  key={l.label}
                  className="block text-gray-500 text-sm mb-2 cursor-default"
                >
                  {l.label}
                </span>
              )
            )}
          </div>
        ))}
        <div className="flex flex-col justify-end">
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <span className="flex gap-1">
              <span className="w-4 h-3 bg-indigo-600 rounded-sm inline-block" />
              <span className="w-4 h-3 bg-orange-400 rounded-sm inline-block" />
            </span>
            Contact Us <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-orange-50 px-4 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <Logo />
      <p className="text-gray-500 text-sm">©2026 Finsweet</p>
      <div className="flex gap-3 text-gray-500 text-sm">
        {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((s) => (
          <span key={s} className="hover:text-gray-900 cursor-pointer">
            {s[0]}
          </span>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;