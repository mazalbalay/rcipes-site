import React from "react";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";


export default function Fotter() {
  return (
    <div className="min-h-20  bg-orange-900 flex flex-col md:flex-row justify-evenly items-center text-white">
      <ul className="text-1xl py-6">
        <li className="cursor-pointer hover:text-orange-200 duration-300">mazalbbbbb3@gmail.com</li>
        <li className="cursor-pointer hover:text-orange-200 duration-300">07-4444856</li>
        <li className="cursor-pointer hover:text-orange-200 duration-300">052-4789654</li>
      </ul>
      <div>
        <h1 className="font-siganatrue text-5xl ml-2 text-white font-bold">
          Recipes
        </h1>
      </div>
      <ul className="flex text-2xl justify-evenly py-6">
        <li>
          <GrInstagram className="mx-2 cursor-pointer hover:text-orange-200 duration-300" />
        </li>
        <li>
          <AiOutlineFacebook className="mx-2 cursor-pointer hover:text-orange-200 duration-300"/>
        </li>
        <li>
          <FiYoutube className="mx-2 cursor-pointer hover:text-orange-200 duration-300"/>
        </li>
      </ul>
    </div>
  );
}
