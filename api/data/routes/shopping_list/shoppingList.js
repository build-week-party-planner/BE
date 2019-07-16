//Import express
const express = require("express");

const knex = require("knex");
const knexConfig = require("../../../../knexfile.js");

const db = knex(knexConfig.development);

//Import models
const shoppingListModel = require("./shoppingList-model");

//Import middleware
const checkToken = require("../../../middleware.js");

//Create Router
const router = express.Router();

//Endpoints
router.get("/", checkToken, async (req, res) => {
  try {
    const shoppingList = await shoppingListModel.getShoppingList();
    res.status(200).json(shoppingList);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the lists" });
  }
});

module.exports = router;
