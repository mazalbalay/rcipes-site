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
        api="http://localhost:8000/italian"
        id="italian"
      />
      <RespiceHome
        api="http://localhost:8000/dessert"
        id="dessert"
      />
      <About />
      <RespiceHome
        api="http://localhost:8000/pastries"
        id="pastries"
      />
      <RespiceHome
        api="http://localhost:8000/mexican"
        id="mexican"
      />
      <Contact />
    </>
  );
}
