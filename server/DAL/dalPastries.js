const axios = require("axios");

const url =
  "https://api.edamam.com/api/recipes/v2?type=public&q=pastries&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f";

const getData = async () => {
  const { data } = await axios.get(url);
  return data.hits;
};
// getData();
module.exports = { getData };
