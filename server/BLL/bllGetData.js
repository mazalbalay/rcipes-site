const jFile = require("jsonfile");

const getItalianData = async () => {
  const data = await jFile.readFile("./Data/italiansRespice.json");
  return data;
};
const getPastriesData = async () => {
  const data = await jFile.readFile("./Data/pastriesRespice.json");
  return data;
};
const getMexicanData = async () => {
  const data = await jFile.readFile("./Data/mexicanRespice.json");
  return data;
};
const getDessertData = async () => {
  const data = await jFile.readFile("./Data/dessertRespice.json");
  // console.log(data);
  return data;
};

// getDessertData()

module.exports = {
  getDessertData,
  getItalianData,
  getMexicanData,
  getPastriesData,
};
