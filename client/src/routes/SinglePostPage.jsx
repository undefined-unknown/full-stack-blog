import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";

const fetchPost = (slug) => {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
    .then((res) => res.data);
};

// 单一文章
const SinglePostPage = () => {
  const { slug } = useParams();
  const { data, status, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (status === "pending") return "Loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  return (
    <div className="flex flex-col gap-8">
      {/* header */}
      <div className="w-full flex  gap-8">
        <div className="flex flex-col gap-6 lg:w-3/5">
          {/* title */}
          <h1 className="font-semibold text-xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            {data.title}
          </h1>
          {/* infos */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Written by</span>
            <Link to="" className="text-blue-800">
              {data.user?.username}
            </Link>
            <span>on</span>
            <Link to="" className="text-blue-800">
              {data.category}
            </Link>
            <span>{format(data?.createdAt)}</span>
          </div>
          <p>{data?.desc}</p>
        </div>
        {/* image */}
        {data.img && (
          <Image
            src={data.img}
            className="hidden lg:block w-2/5 rounded-2xl object-cover"
            w={895}
          />
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* text */}
        <div className="flex flex-col gap-6 lg:text-lg text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            quibusdam eum quis nostrum repellendus doloribus excepturi quas
            placeat illum laborum, perspiciatis pariatur. Est tempora iure vero
            sed quibusdam adipisci?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur velit repudiandae exercitationem deleniti, quisquam sit,
            nesciunt, ducimus nisi libero assumenda similique cum atque
            voluptate. Officiis perferendis adipisci reprehenderit!
            Voluptatibus, tempore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            voluptatem, obcaecati iste esse dolorem iure quae rem praesentium
            magnam iusto repudiandae vitae rerum nulla facilis alias fugit ullam
            minima harum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            cumque nisi pariatur ullam qui atque laboriosam porro alias unde
            voluptate minima perferendis necessitatibus consectetur
            exercitationem deserunt voluptatibus modi, amet vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ratione impedit magnam voluptas, nam tempore vero, sapiente sunt
            inventore eaque quibusdam iure dolores suscipit necessitatibus
            voluptate laboriosam quasi earum autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            quibusdam eum quis nostrum repellendus doloribus excepturi quas
            placeat illum laborum, perspiciatis pariatur. Est tempora iure vero
            sed quibusdam adipisci?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur velit repudiandae exercitationem deleniti, quisquam sit,
            nesciunt, ducimus nisi libero assumenda similique cum atque
            voluptate. Officiis perferendis adipisci reprehenderit!
            Voluptatibus, tempore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            voluptatem, obcaecati iste esse dolorem iure quae rem praesentium
            magnam iusto repudiandae vitae rerum nulla facilis alias fugit ullam
            minima harum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            cumque nisi pariatur ullam qui atque laboriosam porro alias unde
            voluptate minima perferendis necessitatibus consectetur
            exercitationem deserunt voluptatibus modi, amet vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ratione impedit magnam voluptas, nam tempore vero, sapiente sunt
            inventore eaque quibusdam iure dolores suscipit necessitatibus
            voluptate laboriosam quasi earum autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            quibusdam eum quis nostrum repellendus doloribus excepturi quas
            placeat illum laborum, perspiciatis pariatur. Est tempora iure vero
            sed quibusdam adipisci?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur velit repudiandae exercitationem deleniti, quisquam sit,
            nesciunt, ducimus nisi libero assumenda similique cum atque
            voluptate. Officiis perferendis adipisci reprehenderit!
            Voluptatibus, tempore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            voluptatem, obcaecati iste esse dolorem iure quae rem praesentium
            magnam iusto repudiandae vitae rerum nulla facilis alias fugit ullam
            minima harum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            cumque nisi pariatur ullam qui atque laboriosam porro alias unde
            voluptate minima perferendis necessitatibus consectetur
            exercitationem deserunt voluptatibus modi, amet vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ratione impedit magnam voluptas, nam tempore vero, sapiente sunt
            inventore eaque quibusdam iure dolores suscipit necessitatibus
            voluptate laboriosam quasi earum autem.
          </p>
        </div>
        {/* menu */}
        <div className="flex flex-col gap-8 h-max sticky top-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium">Author</h1>
            <div className="flex items-center gap-4">
              {data.user.img && (
                // <Image
                //   src={data.user.img}
                //   className="w-12 h-12 rounded-full object-cover"
                //   w={48}
                //   h={48}
                // />
                <img
                  src={data.user.img}
                  className="size-12 rounded-full object-cotain"
                />
              )}
              <Link to="" className="text-blue-800">
                {data.user.username}
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur modi bland.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium">Categories</h1>
            <div className="flex flex-col text-sm gap-2">
              <Link to="" className="underline">
                All
              </Link>
              <Link to="" className="underline">
                Web Design
              </Link>
              <Link to="" className="underline">
                Developments
              </Link>
              <Link to="" className="underline">
                Databases
              </Link>
              <Link to="" className="underline">
                Search Engines
              </Link>
              <Link to="" className="underline">
                Marketing
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium">Search</h1>
            <Search />
          </div>
        </div>
      </div>
      {/* comments */}
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
