import Logo from "./Logo";
import ArrowRight from "./ArrowRight";

const NavBar = ({ activePage, setPage }) => {
  const links = ["Home","Service","Company","Career","Blog","Contact us"];
  return (
    <nav className="bg-gray-900 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <Logo light />
      <div className="flex items-center gap-6">
        {links.map(l => (
          <button key={l}
            onClick={() => ["Home","Service","Company","Career"].includes(l) && setPage(l)}
            className={`text-sm transition-colors ${activePage===l?"text-orange-400":"text-gray-300 hover:text-white"}`}>
            {l}
          </button>
        ))}
        <button className="flex items-center gap-1 border border-white text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors">
          Clone project <ArrowRight />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;