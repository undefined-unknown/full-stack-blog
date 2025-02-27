import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex gap-4 items-center">
        <Image src="logo.png" alt="kevin logo" w={32} h={32} />
        <span className="text-2xl font-bold">kevinlog.</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? "x" : "≡"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen  flex flex-col items-center justify-center gap-8 font-medium text-lg bg-[#e6e6ff]  absolute top-16  transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link
            className="hover:text-sky-500"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-sky-500"
            to="/"
            onClick={() => setOpen(false)}
          >
            Tranding
          </Link>
          <Link
            className="hover:text-sky-500"
            to="/"
            onClick={() => setOpen(false)}
          >
            Most Popular
          </Link>
          <Link
            className="hover:text-sky-500"
            to="/"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <SignedOut>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-900 text-white">
                Login 👋🏻
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link
          className="hover:text-sky-500"
          to="/"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          className="hover:text-sky-500"
          to="/"
          onClick={() => setOpen(false)}
        >
          Tranding
        </Link>
        <Link
          className="hover:text-sky-500"
          to="/"
          onClick={() => setOpen(false)}
        >
          Most Popular
        </Link>
        <Link
          className="hover:text-sky-500"
          to="/"
          onClick={() => setOpen(false)}
        >
          About
        </Link>

        <SignedOut>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-900 text-white">
              Login 👋🏻
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
