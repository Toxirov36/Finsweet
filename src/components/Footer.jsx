import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import ColorAccent from "./ColorAccent";

const Footer = ({ setPage }) => (
  <footer>
    <div className="px-12 py-16 bg-white">
      <div className="flex gap-16">
        <div className="flex-1">
          <ColorAccent />
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Let's make<br/>something special</h2>
          <p className="text-gray-900 font-semibold mb-4">Let's talk! 👍</p>
          <p className="text-gray-600 text-sm">020 7993 2905</p>
          <p className="text-gray-600 text-sm">hi@finsweet.com</p>
          <p className="text-gray-500 text-sm mt-3">DLF Cybercity, Bhubaneswar,<br/>India, 652050</p>
        </div>
        {[
          { title: null, links: ["Home","Service","Company","Career","News"] },
          { title: "Service", links: ["Technical support","Testing","Development","AWS/Azure","Consulting","Information Technology"] },
          { title: "Resources", links: ["About Us","Testimonial","Privacy Policy","Terms of use","Blog"] },
        ].map((col, i) => (
          <div key={i} className="min-w-32">
            {col.title && <p className="font-bold text-gray-900 mb-3">{col.title}</p>}
            {col.links.map(l => (
              <button key={l} onClick={() => ["Home","Service","Company","Career"].includes(l) && setPage(l)}
                className="block text-gray-500 text-sm mb-2 hover:text-gray-900 transition-colors text-left">{l}</button>
            ))}
          </div>
        ))}
        <div className="flex flex-col justify-end">
          <button className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex gap-1"><span className="w-4 h-3 bg-indigo-600 rounded-sm inline-block"/><span className="w-4 h-3 bg-orange-400 rounded-sm inline-block"/></span>
            Contact Us <ArrowRight />
          </button>
        </div>
      </div>
    </div>
    <div className="bg-orange-50 px-12 py-4 flex items-center justify-between">
      <Logo />
      <p className="text-gray-500 text-sm">©2021 Finsweet</p>
      <div className="flex gap-3 text-gray-500 text-sm">
        {["Facebook","Twitter","Instagram","LinkedIn"].map(s=>(
          <span key={s} className="hover:text-gray-900 cursor-pointer">{s[0]}</span>
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;