import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import List from "./List/List";
import AddBooks from "./AddBooks/AddBooks";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const url = "http://localhost:3000/books";

    await axios.get(url).then((response) => setState(response));
  };

  return (
    <div className="app">
      <Nav />
      <div className="app_body">
        <List state={state} />
        <AddBooks />
      </div>
    </div>
  );
}

export default App;
