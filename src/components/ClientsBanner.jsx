import { clients } from "../data/clients";

const ClientsBanner = ({ light = false }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 w-full">
      {clients.map((client) => (
        <div
          key={client.name}
          className="flex items-center gap-2.5 group cursor-pointer transition-transform hover:scale-105"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm ${
              light
                ? "bg-gray-100 border border-gray-200"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            <span>{client.icon}</span>
          </div>
          <span
            className={`font-extrabold text-sm tracking-wide ${
              light
                ? "text-gray-700 group-hover:text-indigo-600"
                : "text-gray-300 group-hover:text-white"
            } transition-colors`}
          >
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClientsBanner;
