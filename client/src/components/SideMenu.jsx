import { Link } from "react-router-dom";
import Search from "../components/Search";

const SideMenu = () => {
  return (
    <div className="flex flex-col gap-6 h-max sticky top-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-sm">Search</h1>
        <Search />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-sm">Filters</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="newest"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white  checked:bg-blue-800"
            />
            Newest
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="popular"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white  checked:bg-blue-800"
            />
            Most Popular
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="trending"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white  checked:bg-blue-800"
            />
            Trending
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="oldest"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white  checked:bg-blue-800"
            />
            Oldest
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-sm">Categories</h1>
        <div className="flex flex-col text-sm gap-2">
          <Link to="posts?cat=all" className="underline">
            All
          </Link>
          <Link to="posts?cat=web-design" className="underline">
            Web Design
          </Link>
          <Link to="posts?cat=development" className="underline">
            Development
          </Link>
          <Link to="posts?cat=databases" className="underline">
            Databases
          </Link>
          <Link to="posts?cat=seo" className="underline">
            Search Engines
          </Link>
          <Link to="posts?cat=marketing" className="underline">
            Marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
