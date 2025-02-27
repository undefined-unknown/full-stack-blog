import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <h1 className="mb-6 text-2xl ">Development Blog</h1>
      <button
        className="bg-blue-800 text-sm text-white font-medium rounded-xl w-max px-4 py-2 mb-4 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* postList */}
        <PostList />
        {/* sideMenu */}
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
