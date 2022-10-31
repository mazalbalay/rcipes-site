const express = require("express");
const bllGetData = require("../BLL/bllGetData");

const router = express.Router();

// Entry Point: 'http://localhost:8000/italian'
// Entry Point: 'http://localhost:8000/mexican'
// Entry Point: 'http://localhost:8000/pastries'
// Entry Point: 'http://localhost:8000/dessert'

router.get("/italian", async (req, res) => {
  const recipes = await bllGetData.getItalianData();
  return res.json(recipes);
});
router.get("/mexican", async (req, res) => {
  const recipes = await bllGetData.getMexicanData();
  return res.json(recipes);
});
router.get("/pastries", async (req, res) => {
  const recipes = await bllGetData.getPastriesData();
  return res.json(recipes);
});
router.get("/dessert", async (req, res) => {
  const recipes = await bllGetData.getDessertData();
  return res.json(recipes);
});

module.exports = router;
