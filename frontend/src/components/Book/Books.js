import React, { useEffect, useState } from "react";
import Book from "./Book";
import Card from "./Card";
import axios from "axios";
export default function Books() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:8800/books";
  const fetchBooks = async () => {
    return await axios(url).then((res) => res.data);
  };
  useEffect(() => {
    fetchBooks().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "flex-start" }}>
        {books &&
          books.map((book, id) => {
            return (
              <div>
                {/* <Book book={book} /> */}
                <Card book={book} />
              </div>
            );
          })}
      </ul>
    </div>
  );
}
