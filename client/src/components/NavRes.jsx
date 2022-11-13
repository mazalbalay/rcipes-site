import React from "react";
import { useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {TbArrowBackUp} from 'react-icons/tb';

export default function Nav() {
  const [nav, setNav] = useState(false);

  return (
    <div className=" bg-orange-900  w-full h-16 fixed hover:bg-opacity-100 duration-300 z-10">
      <div className="flex justify-between items-center px-2  w-full h-20 fixed md:w-4/5 md:left-40 md:m-0 ">
        <div>
          <h1 className="font-siganatrue text-6xl ml-2 text-white font-bold cursor-default">
            Resipes
          </h1>
        </div>

        <ul className="hidden md:flex">
          <li className="text-white capitalize font-bold">
            <LinkRoute to={"/"} >home</LinkRoute>
          </li>
        </ul>

        {/* mobile */}

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 cursor-pointer text-white text-2xl"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {nav && (
          <ul className="flex flex-col text-3xl justify-center items-center absolute top-0 left-0 w-full h-52 bg-orange-900 bg-opacity-95">
            <h1 className="font-siganatrue text-6xl ml-2 text-white font-bold">
              Resipes
            </h1>
            <li className="text-white font-bold my-4 capitalize text-2xl"><LinkRoute to={"/"} className="flex items-center">home<TbArrowBackUp className="text-2xl"/></LinkRoute></li>
          </ul>
        )}
      </div>
    </div>
  );
}
