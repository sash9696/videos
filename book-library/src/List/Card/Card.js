import React from "react";
import "./Card.css";
import axios from "axios";

function Card({ item, id, title, author, genre, summary }) {
  const deleteBook = () => {
    const url = `http://localhost:3000/books/${id}`;

    axios.delete(url).then((res) => console.log(res));
    window.location.reload();
  };

  const updateBook = () => {
    const url = `http://localhost:3000/books/${id}`;

    axios
      .put(url, { title: "xyz", author: "dan brown" })
      .then((res) => console.log(res));
    window.location.reload();
  };

  return (
    <div className="card">
      <h4 className="card_title">{title}</h4>
      <div className="card_description">
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>
      </div>
      <p className="card_summary">{summary} </p>
      <div className="card_buttons">
        <button onClick={updateBook} className="button_one">
          Edit
        </button>
        <button onClick={deleteBook} className="button_two">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
