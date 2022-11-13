//במידה ולא נימצא כפתור בחיפוש לתת אינדיקציה שאין מתכון כזה
import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import axios from "axios";
import NavRes from "./NavRes";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-scroll";
import { BiUpArrow } from "react-icons/bi";
import ResipceFull from "./ResipceFull";

export default function ResipcesFullPage(props) {
  const [resipes, setResipes] = useState(null);
  const [input, setInput] = useState("");
  const [click, setClick] = useState(false);
  const [name, setName] = useState("0");

  function handleClick(i) {
    setClick((click) => !click);
    setName(i);
  }

  const getData = async () => {
    const { data } = await axios.get(props.api);
    setResipes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavRes />

      {click ? (
        <ResipceFull
          callback={(some) => setClick(some)}
          api={props.api}
          name={name}
          click={click}
        />
      ) : null}
      <div
        id="input"
        className="min-h-screen w-full pt-24 bg-orange-900 bg-opacity-5 flex justify-evenly items-center flex-col"
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="search resipce"
          className="w-4/5 md:w-1/2 p-4 rounded-lg placeholder:text-center border placeholder:text-orange-900 placeholder:font-bold border-orange-900 my-4"
        />
        <div className="flex justify-center items-center cursor-default ">
          <h1 className="font-siganatrue text-4xl font-bold text-orange-900 capitalize my-14">
            {props.name} resipes
          </h1>
          <AiOutlineCaretDown className="text-4xl text-orange-900 " />
        </div>
        <Link to="input" activeClass="active" spy={true} smooth={true}>
          <div className="fixed justify-center flex-col items-center text-orange-900 flex md:text-2xl font-bold bottom-52 md:right-10 right-1 hover:scale-125 duration-500">
            <BiUpArrow />
            <p>Top</p>
          </div>
        </Link>
        <div className="flex flex-wrap w-full md:flex-row justify-center items-center py-4">
          {resipes ? (
            resipes
              ?.filter((val) => {
                if (input === "") {
                  return val;
                } else if (
                  val.recipe.name.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              ?.map((res, i) => {
                return (
                  <div
                    className={
                      "shadow-lg w-full cursor-pointer md:w-1/6 bg-white p-1 rounded-lg m-10"
                    }
                    key={i}
                  >
                    <div className="w-full h-3/4 flex flex-col justify-evenly items-center">
                      <img src={res.recipe.img} className="" alt="" />
                      <h1 className="h-14 flex flex-col justify-center m-2 font-bold ">
                        {res.recipe.name}
                      </h1>
                      <h2 className="font-bold capitalize">
                        calories: ${res.recipe.calories}
                      </h2>
                      <h2 className="font-bold capitalize mb-4">
                        meal Type: ${res.recipe.mealType}
                      </h2>
                      <h2
                        className="cursor-pointer font-bold border-2 rounded-md w-1/2 p-1 md:mb-3 mb-0  hover:text-white hover:bg-orange-900 text-orange-900 border-orange-900 hover:duration-1000"
                        onClick={() => handleClick(res.recipe.name)}
                      >
                        click to open
                      </h2>
                    </div>
                    <div>
                      <div>
                        <h2 className="font-bold mt-6"></h2>
                        Sequi quibusdam repellat, odit est ut nesciunt vel.
                      </div>
                    </div>
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
    </>
  );
}
