import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDEtail";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
