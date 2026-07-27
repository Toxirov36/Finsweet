import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../components/ArrowRight";
import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { blogPosts, categories } from "../data/blogPosts";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = blogPosts.filter((p) => p.featured);

  const filtered = blogPosts.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-white px-4 md:px-8 lg:px-12 py-12 lg:py-20">
        <div className="flex justify-between items-start mb-2">
          <div className="w-3 h-3 bg-orange-400 mt-1" />
          <ColorAccent />
        </div>
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">
          Our Blog
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 max-w-xl">
          Read our latest blogs
          <br />& news from Finsweet
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mb-8">
          Stay updated with the latest trends in technology, design, and
          business strategy. Our team shares insights and best practices.
        </p>

        {/* Search Bar */}
        <div className="max-w-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6);
            }}
            placeholder="Search articles by keyword..."
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xs"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && (
        <AnimatedSection>
          <section className="bg-blue-50 px-4 md:px-8 lg:px-12 py-12 lg:py-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-indigo-600" />
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                Featured Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImg}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-700 text-sm font-semibold">
                          {post.author}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-indigo-600 text-sm font-semibold">
                        Read More <ArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Category Filter + All Posts */}
      <AnimatedSection>
        <section className="bg-white px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-indigo-600" />
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                  {searchQuery ? `Search Results (${filtered.length})` : "All Articles"}
                </h2>
              </div>
              <p className="text-gray-500 text-sm">
                Browse through our collection of insights and updates
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-2">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-indigo-600 font-semibold text-sm hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(0, visibleCount).map((post) => (
                  <div
                    key={post.id}
                    className="bg-white border border-gray-100 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-gray-400 text-xs mb-2">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                        <img
                          src={post.authorImg}
                          alt={post.author}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <span className="text-gray-600 text-xs font-semibold">
                          {post.author}
                        </span>
                        <span className="ml-auto flex items-center gap-1 text-indigo-600 text-xs font-semibold">
                          Read More <ArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded hover:bg-indigo-700 transition-colors font-semibold"
                  >
                    Load More Articles <ArrowRight />
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </AnimatedSection>

      {/* Topics Section */}
      <AnimatedSection>
        <section className="bg-orange-50 px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-orange-400" />
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
              Popular Topics
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: "🎨",
                title: "Design",
                count: blogPosts.filter((p) => p.category === "Design").length,
              },
              {
                icon: "📊",
                title: "Strategy",
                count: blogPosts.filter((p) => p.category === "Strategy").length,
              },
              {
                icon: "💻",
                title: "Technology",
                count: blogPosts.filter((p) => p.category === "Technology")
                  .length,
              },
              {
                icon: "🔧",
                title: "Development",
                count: blogPosts.filter((p) => p.category === "Development")
                  .length,
              },
              {
                icon: "☁️",
                title: "Cloud",
                count: blogPosts.filter((p) => p.category === "Cloud").length,
              },
            ].map((topic) => (
              <button
                key={topic.title}
                onClick={() => {
                  setActiveCategory(topic.title);
                  window.scrollTo({ top: 600, behavior: "smooth" });
                }}
                className="bg-white rounded-lg p-5 text-center hover:shadow-md transition-shadow group"
              >
                <span className="text-3xl block mb-3">{topic.icon}</span>
                <p className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {topic.title}
                </p>
                <p className="text-gray-400 text-xs">
                  {topic.count} {topic.count === 1 ? "article" : "articles"}
                </p>
              </button>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="bg-white px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="w-3 h-3 bg-indigo-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Want to contribute
                <br />
                to our blog?
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-sm">
                We're always looking for talented writers and industry experts to
                share their knowledge. Join our community of contributors.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors"
              >
                Become a Writer <ArrowRight />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-blue-50 rounded-lg p-6 md:p-8 relative">
                <div className="absolute top-4 right-4">
                  <ColorAccent />
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: "✍️",
                      title: "Write",
                      desc: "Share your expertise with our global audience",
                    },
                    {
                      icon: "👥",
                      title: "Collaborate",
                      desc: "Work with our editorial team on polished content",
                    },
                    {
                      icon: "🚀",
                      title: "Grow",
                      desc: "Build your personal brand and expand your reach",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default BlogPage;
