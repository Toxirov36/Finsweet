import { Link } from "react-router-dom";
import ArrowRight from "../components/ArrowRight";

const NotFoundPage = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
    <div className="text-center">
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-4 h-4 bg-orange-400 rounded-sm" />
        <div className="w-4 h-4 bg-indigo-600 rounded-sm" />
      </div>
      <h1
        className="text-9xl font-extrabold text-gray-900 tracking-tighter select-none mb-4"
        style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "2px #e5e7eb" }}
      >
        404
      </h1>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
        Oops! The page you are looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded hover:bg-indigo-700 transition-colors font-semibold"
      >
        Back to Home <ArrowRight />
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
