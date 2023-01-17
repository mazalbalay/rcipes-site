import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 3, link: "about" },
    { id: 4, link: "contact" },
  ];

  const dropDown = [
    { id: 1, link: "italian" },
    { id: 2, link: "dessert" },
    { id: 3, link: "pastries" },
    { id: 4, link: "mexican" },
  ];

  return (
    <div className=" bg-orange-900  w-full h-20 fixed hover:bg-opacity-100 duration-300 z-10">
      <div className="flex justify-between items-center px-2  w-full h-20 fixed md:w-4/5 md:left-40 md:m-0 ">
        <div>
          <h1 className="font-siganatrue text-6xl ml-2 text-white font-bold cursor-default">
            Resipes
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize mr-2 px-4 cursor-pointer hover:scale-110 duration-200 text-white"
            >
              <Link to={link} activeClass="active" spy={true} smooth={true}>
                {link}
              </Link>
            </li>
          ))}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex justify-center px-4 text-white bg-orange-900 focus:outline-none">
                Resipes
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-4 w-56 rounded-md bg-orange-900 p-2">
                {dropDown.map(({ link, id }) => (
                  <Menu.Item key={id}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-white bg-opacity-30 text-gray-900"
                            : "text-white",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        <Link
                          to={link}
                          activeClass="active"
                          spy={true}
                          smooth={true}
                        >
                          {link} Resipes
                        </Link>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>

        {/* <div>
          <AiTwotoneSetting className="text-2xl hover:scale-110 duration-100 text-white hidden md:flex cursor-pointer" />
        </div> */}

        {/* mobile */}

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 cursor-pointer text-white text-2xl"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-start items-start absolute top-0 left-0 w-full min-h-80 bg-orange-900 bg-opacity-95">
            <h1 className="font-siganatrue text-6xl mt-6 ml-6 text-white font-bold">
              Resipes
            </h1>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="capitalize text-2xl font-bold m-6 cursor-pointer hover:scale-110 duration-500 text-white my-3"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  {link}
                </Link>
              </li>
            ))}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex justify-center text-white m-6 items-center focus:outline-none capitalize text-2xl font-bold cursor-pointer hover:scale-110 duration-500  my-3">
                  Resipes
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute z-10 left-0
                 top-14 bg-orange-900 bg-opacity-95 text-4xl w-96 text-start font-bold p-2"
                >
                  {dropDown.map(({ link, id }) => (
                    <Menu.Item key={id}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-white bg-opacity-30 text-gray-900"
                              : "text-white",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          <Link
                            onClick={() => setNav(!nav)}
                            to={link}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                          >
                            {link} Resipes
                          </Link>
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </ul>
        )}
      </div>
    </div>
  );
}
