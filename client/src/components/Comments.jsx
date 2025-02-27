import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
    .then((res) => res.data);
};

const Comments = ({ postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  console.log("user", user);
  console.log("postId", postId);
  const isAdmin = user?.publicMetadata?.role === "admin" || false;

  const {
    isPending,
    error,
    data: comments,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  console.log("comments", comments);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => toast.error(error.response.data),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-between gap-8"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="px-4 py-3 bg-blue-800 text-white rounded-xl font-medium">
          Send
        </button>
      </form>

      {isPending ? (
        "Loading"
      ) : error ? (
        "Error loading comments"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                createdAt: new Date(),
                desc: `${mutation.variables.desc} (Sending)`,
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {(comments || []).map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
