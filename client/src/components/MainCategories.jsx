import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex items-center bg-white rounded-3xl xl:rounded-full p-4 shadow-lg gap-8">
      {/* links */}
      <div className="flex flex-1 items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white px-4 py-2 rounded-full"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Marketing
        </Link>
      </div>
      {/* divider */}
      <span className="text-2xl font-medium">|</span>
      {/* search */}
      <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          className="bg-transparent"
          type="text"
          placeholder="search a post..."
        />
      </div>
    </div>
  );
};

export default MainCategories;
