const Logo = ({ light = false }) => (
  <div className={`flex items-center gap-1 font-bold text-lg ${light ? "text-white" : "text-gray-900"}`}>
    <span className="text-indigo-500">{`{`}</span>Finsweet<span className="text-indigo-500">{`}`}</span>
  </div>
);

export default Logo;