const express = require("express");
const router = express.Router();
const Book = require("../model/book-schema");

const bookOpreations = require("../crud-operations/crud");

router.get("/", bookOpreations.getAllBooks);
router.get("/:id", bookOpreations.getABook);
router.post("/", bookOpreations.addABook);
router.put("/:id", bookOpreations.updateBook);
router.delete("/:id", bookOpreations.deleteABook);

// // get method
// router.get("/", async (req, res) => {
//   let books;
//   // fetch the books from the db
//   try {
//     books = await Book.find();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!books) {
//     return res.status(404).json({ message: "not found" });
//   }
//   return res.status(200).json({ books });
// });

// // post method

// router.post("/", async (req, res) => {
//   const { name, author, description, price, available } = req.body;
//   // fetch the books from the db
//   let book;
//   try {
//     book = new Book({
//       name,
//       author,
//       description,
//       price,
//       available,
//     });
//     await book.save();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!book) {
//     return res.status(404).json({ message: "unable to add" });
//   }
//   return res.status(200).json({ book });
// });

module.exports = router;
