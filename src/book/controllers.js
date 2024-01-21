const Book = require("./model");

const addBook = async (req, res) => {
    try {
      const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,

    });
    res.status(201).json({ message: "Book created", book: book });

  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json({ message: "All books here", books: books });

  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.params.title } });

    if (book) {
      res.status(200).json({ message: `Book with the title ${book.title}`, book: book });
    } else {
      res.status(404).json({ message: "Book not found" });
    }

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};







module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getBookByTitle : getBookByTitle,

}