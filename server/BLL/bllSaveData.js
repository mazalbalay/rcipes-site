const dalItalian = require("../DAL/dalItalian");
const dalMexican = require("../DAL/dalMexican");
const dalPastries = require("../DAL/dalPastries");
const dalDessert = require("../DAL/dalDessert");

const filterData = async () => {
  const data = await dalPastries.getData();
  const filterData = data.map(
    (res) =>
    `{"recipe":{"name":"${res.recipe.label}","url":"${res.recipe.url}","img":"${res.recipe.image}","calories":"${res.recipe.calories}","mealType":"${res.recipe.mealType}","ingredients":[${res.recipe.ingredientLines.map((v)=>`"${v}"`)}]}}`
  );
  console.log(filterData);clearInterval
};


filterData()

