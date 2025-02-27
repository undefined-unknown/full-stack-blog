import { format } from "timeago.js";
// import Image from "./Image";

const Comment = ({ comment }) => {
  const { desc, user, createdAt } = comment;
  return (
    <div className="flex flex-col p-4 gap-4 mb-8 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4 text-sm">
        {/* <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w={40}
          h={40}
        /> */}
        {user.img && (
          <img
            src={user.img}
            alt="user avatar"
            className="size-10 rounded-full object-cover"
          />
        )}

        <h1 className=" font-medium">{user.username}</h1>
        <span className="text-gray-500">{format(createdAt)}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Comment;
