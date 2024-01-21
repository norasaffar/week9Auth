const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks,getBookByTitle } = require("./controllers");

bookRouter.post("/books", addBook);
bookRouter.get("/books", getAllBooks);
bookRouter.get("/books/:title", getBookByTitle);


module.exports = bookRouter;
