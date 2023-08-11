// global
const express = require("express");
const { validate } = require("express-validation");

// local
const addList = require("../controller/addList");
const validateTodo = require("../services/validation");
const getList = require("../controller/getList");
const updateList = require("../controller/updateList");
const deleteList = require("../controller/deleteList");

// create instances or initialized router
const router = express.Router();

//  for post and get Data in json array
router
  .route("/")
  .post(validate(validateTodo, {}, {}), addList)
  .get(getList);

// for update and delete list
router
  .route("/:listId")
  .patch(validate(validateTodo, {}, {}), updateList)
  .delete(deleteList);

module.exports = router;
