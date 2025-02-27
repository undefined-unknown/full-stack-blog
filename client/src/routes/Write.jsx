import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const [progress, setProgress] = useState(0);
  const [cover, setCover] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    image && setContent((prev) => prev + `<p><image src="${image.url}"/></p>`);
  }, [image]);

  useEffect(() => {
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      console.log(newPost);
      console.log(token);
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created!");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>you should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content,
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-sm ">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button
            className="w-max p-2 text-gray-500 shadow-md rounded-xl bg-white"
            onClick={(e) => e.preventDefault()}
          >
            Add a cover image
          </button>
        </Upload>
        <input
          type="text"
          className="font-semibold bg-transparent text-4xl text-gray-500 outline-none"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a Category :
          </label>
          <select name="category" className="p-2 shadow-md rounded-xl">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          className="p-4 bg-white rounded-xl"
          placeholder="A Short Description"
        ></textarea>
        <div className="flex flex-1 gap-2">
          <div className="flex flex-col gap-2">
            <Upload type="image" setProgress={setProgress} setData={setImage}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={content}
            onChange={setContent}
            readOnly={0 < progress && progress < 100}
          />
        </div>

        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="w-max bg-blue-800 text-white rounded-xl font-medium p-2 mt-4 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
        {`Progress: ${progress}%`}
      </form>
    </div>
  );
};

export default Write;
