import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        {post.img && (
          <Image src={post.img} className="rounded-2xl object-cover" w={735} />
        )}
      </div>

      {/* details */}
      <div className="flex flex-col xl:w-2/3 gap-4">
        {/* title */}
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        {/* breadcumb */}
        <div className="flex items-center gap-2">
          <span>Written by</span>
          <Link className="text-blue-800">{post.user.username}</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createAt)}</span>
        </div>
        {/* description */}
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
