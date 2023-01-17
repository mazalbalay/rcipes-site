import React, { useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function ResipceFull(props) {
  const [resipes, setResipes] = useState(null);
  const click = false;

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${props.option}&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f`,
    );
    setResipes(data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-stone-100  w-full md:w-5/6 fixed md:top-24  md:h-5/6 h-screen flex flex-col md:flex-row border shadow-lg shadow-orange-900 rounded-md items-center overflow-scroll md:overflow-auto md:left-32 py-12 text-orange-900">
      <div className="w-full  flex flex-col justify-evenly p-6 ">
        <ul className="text-left my-6 pl-8">
          <h2 className="font-bold capitalize text-2xl">Ingredient:</h2>
          {resipes ? (
            resipes[
              resipes.findIndex((res) => res.recipe.label === props.name)
            ]?.recipe.ingredientLines.map((ing, i) => <li key={i}>{ing}</li>)
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
        </ul>

        <div className="text-left pl-8">
          <h2 className="font-bold mt-6 capitalize text-2xl">Instructions:</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          placeat sunt eaque vero tempore a, at perferendis. Accusantium cumque
          tempora delectus odit totam ex magnam quos mollitia officia aliquid
          similique nisi alias ipsa, temporibus quo sit, reiciendis natus quas
          praesentium nemo sint quidem quam doloremque esse! Eos, dolore.
          Pariatur.
        </div>
      </div>

      <div className="w-full flex flex-col justify-evenly items-center my-6">
        <img
          src={
            resipes ? (
              resipes[
                resipes.findIndex((res) => res.recipe.label === props.name)
              ]?.recipe.image
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
            )
          }
          alt=""
        />
        <h1 className="h-14 flex flex-col justify-center m-2 font-bold ">
          {resipes ? (
            resipes[resipes.findIndex((res) => res.recipe.label === props.name)]
              ?.recipe.label
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
        </h1>

        <h2
          className="cursor-pointer font-bold border bg-orange-900 text-white py-4 border-orange-900 w-1/2 p-2 md:mb-3 mb-0 hover:text-orange-900 hover:bg-white hover:duration-500 rounded-xl"
          onClick={() => props.callback(click)}
        >
          click to back
        </h2>
      </div>
    </div>
  );
}
