import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturePosts from "../components/FeaturePosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <div>Home</div>
        <div>•</div>
        <div className="text-blue-800">Blogs and Articles</div>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-4 md:mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id
            nemo perspiciatis.
          </p>
        </div>
        {/* animation button */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animation-button"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your story •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 right-0 bottom-0 left-0 m-auto flex items-center justify-center w-20 h-20 bg-blue-800 hover:bg-blue-900 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Categories */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturePosts />
      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
