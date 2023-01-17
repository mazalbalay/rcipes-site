import React from "react";
import home4 from "../assets/home-4.mp4";
import About from "./About";
import Contact from "./Contact";
import RespiceHome from "./RespiceHome";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="md:min-h-screen max-h-screen pt-16 w-full bg-orange-900 bg-opacity-10 flex justify-center items-center z-0"
      >
        <video
          src={home4}
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full"
        ></video>
      </div>
      <RespiceHome
        option="italian"
        id="italian"
      />
      <RespiceHome
        option="dessert"
        id="dessert"
      />
      <About />
      <RespiceHome
        option="pastries"
        id="pastries"
      />
      <RespiceHome
        option="mexican"
        id="mexican"
      />
      <Contact />
    </>
  );
}
