import React from "react";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-2.png";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-orange-900 bg-opacity-5 flex flex-col justify-evenly items-center py-20"
    >
      <h1 className="text-6xl font-bold font-siganatrue text-orange-900 my-12">About Us</h1>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="rounded-lg shadow-md w-full md:w-2/5 my-6 bg-white p-6 hover:scale-110 hover:duration-700">
          <h2 className="text-2xl my-6">we websute for respises</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis
            reiciendis consequuntur. Architecto, reiciendis ex commodi alias
            delectus quis molestiae ut aut impedit vitae eum fugit repellat
          </p>
          <br />
          <p>
            deserunt, doloremque repudiandae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi neque esse deleniti eos quo.
            Reprehenderit beatae minus sapiente magnam. Sint iste consequuntur
            quos nihil dolore mollitia nobis exercitationem blanditiis sit.
          </p>
        </div>
        <div className="rounded-lg shadow-md w-full md:w-2/5 my-6">
          <img className="" src={about1} alt="" />
        </div>
      </div>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="rounded-lg shadow-md w-full md:w-2/5 my-6 order-2 md:order-1">
          <img src={about2} alt="" />
        </div>
        <div className="rounded-lg shadow-md w-full md:w-2/5 my-6 bg-white p-6 order-1 md:order-2 hover:scale-110 hover:duration-700">
          <h2 className="text-2xl  my-6">we websute for respises</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis
            reiciendis consequuntur. Architecto, reiciendis ex commodi alias
            delectus quis molestiae ut aut impedit vitae eum fugit repellat
            deserunt, doloremque repudiandae.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis
            reiciendis consequuntur. Architecto, reiciendis ex commodi alias
            delectus quis molestiae ut aut impedit vitae eum fugit repellat
            deserunt, doloremque repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
}
