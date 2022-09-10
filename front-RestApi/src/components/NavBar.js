import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
 
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to={"/"} className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" >
              API REST
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}