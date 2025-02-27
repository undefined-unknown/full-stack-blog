import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturePosts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-4 md:mt-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="featured1.jpeg"
          className="rounded-2xl object-cover"
          w={895}
        />
        {/* detail */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <div className="text-blue-800 hover:text-blue-900 cursor-pointer">
            Web Design
          </div>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* title */}
        <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Other Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* each post */}
        {/* second post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {/* image */}
            <Image
              src="featured2.jpeg"
              className="w-full h-full rounded-2xl object-cover"
              w={298}
            />
          </div>
          <div className="w-2/3">
            {/* detail */}
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <div className="text-blue-800 hover:text-blue-900 cursor-pointer">
                Web Design
              </div>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link className="flex items-center text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {/* image */}
            <Image
              src="featured3.jpeg"
              className="w-full h-full rounded-2xl object-cover"
              w={298}
            />
          </div>
          <div className="w-2/3">
            {/* detail */}
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-semibold lg:text-lg">03.</h1>
              <div className="text-blue-800 hover:text-blue-900 cursor-pointer">
                Web Design
              </div>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link className="flex items-center text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {/* image */}
            <Image
              src="featured4.jpeg"
              className="w-full h-full rounded-2xl object-cover"
              w={298}
            />
          </div>
          <div className="w-2/3">
            {/* detail */}
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-semibold lg:text-lg">04.</h1>
              <div className="text-blue-800 hover:text-blue-900 cursor-pointer">
                Web Design
              </div>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link className="flex items-center text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePosts;
