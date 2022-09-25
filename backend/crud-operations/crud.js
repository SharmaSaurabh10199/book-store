const Book = require("../model/book-schema");

// get all the books
const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "not found" });
  }
  return res.status(200).json({ books });
};

// get a single book
const getABook = async (req, res) => {
  let id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "not found" });
  }
  return res.status(200).json({ book });
};

// add a book
const addABook = async (req, res) => {
  const { name, author, description, price, available, image } = req.body;
  // fetch the books from the db
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ book });
};

// update an existing book
const updateBook = async (req, res) => {
  let bookId = req.params.id;
  let book;
  const { name, author, description, price, available, image } = req.body;
  try {
    book = await Book.findByIdAndUpdate(bookId, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "unable to update " });
  }
  return res.status(200).json({ book });
};

// delete a book
const deleteABook = async (req, res) => {
  // find the book by the id
  const bookId = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(bookId);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "unable to update " });
  }
  return res.status(200).json({ message: "book deleted successfully" });
};

// export the operations
exports.getAllBooks = getAllBooks;
exports.getABook = getABook;
exports.addABook = addABook;
exports.updateBook = updateBook;
exports.deleteABook = deleteABook;
