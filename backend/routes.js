const express = require("express");
const router = express.Router();
const validateHeader = require("./middleware");

const { addUsers, getUsers } = require("./controllers/users");
const { addBooks, getBooks } = require("./controllers/books");

router.get("/users", validateHeader, getUsers);
router.post("/users", validateHeader, addUsers);
router.get("/books", validateHeader, getBooks);
router.post("/books", validateHeader, addBooks);

module.exports = router;
