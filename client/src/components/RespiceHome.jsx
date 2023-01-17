import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function RespiceHome(props) {
  const [resipes, setResipes] = useState(null);

  const getData = async () => {
    const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${props.option}&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f`);
    setResipes(data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      id={props.id}
      className="min-h-screen w-full pt-24 bg-orange-900 bg-opacity-5 flex justify-evenly items-center flex-col"
    >
      <div className="flex justify-center items-center cursor-pointer ">
        <h1 className="font-siganatrue text-5xl font-bold text-orange-900 capitalize my-14">
          <Link to={`/${props.id}`}>for more {props.id} resipes</Link>
        </h1>
        <IoMdArrowDropright className="text-4xl text-orange-900" />
      </div>

      <div className="flex flex-wrap md:flex-row justify-center items-center py-4">
        {resipes ? (
          resipes.splice(7, 4)?.map((res, i) => {
            return (
              <div
                key={i}
                className="shadow-lg w-full md:w-1/6 bg-white p-1 rounded-lg  m-10 hover:scale-105 hover:duration-1000"
              >
                <img src={res.recipe.image} className="m-auto" alt="" />
                <h1 className="h-28 text-2xl flex flex-col justify-center m-2 ">
                  {res.recipe.label}
                </h1>
                <h2 className="font-bold capitalize">
                  calories: ${res.recipe.calories}
                </h2>
                <h2 className="font-bold capitalize">
                  meal Type: ${res.recipe.mealType}
                </h2>
                <button
                  className="hover:duration-1000 hover:text-white hover:bg-orange-900 border-2 p-2 rounded-md border-orange-900 font-bold text-orange-900 m-4
                "
                >
                  <Link to={`/${props.id}`}>to see more click here</Link>
                </button>
              </div>
            );
          })
        ) : (
          <div>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        )}
      </div>
    </div>
  );
}
