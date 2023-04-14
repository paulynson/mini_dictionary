import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container lg:px-12 md:px-12 px-6 max-w-screen-lg my-0 mx-auto py-6 text-center bg-black text-white flex justify-between items-center">
      <Link
        href="/"
        className="lg:text-3xl text-lg font-extrabold hover:text-green-600"
      >
        Mini Dictionary
      </Link>
      <Link
        href="/about"
        className="text-sm font-extrabold hover:text-green-600"
      >
        About
      </Link>
    </header>
  );
};

export default Header;
