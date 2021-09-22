import React from "react";
import "./styles.css";
import { useState } from "react";

const tripDB = {
  india: [
    { name: "Kerala", rating: "4/5" },
    { name: "Ladakh", rating: "3.5/5" }
  ],

  norvy: [
    {
      name: "HELL-city",
      rating: "5/5"
    },
    {
      name: "THE WESTERN FJORDS ",
      rating: "4.5/5"
    }
  ],
  USA: [
    {
      name: "TIME SQURE",
      rating: "3.5/5"
    },
    {
      name: "LOS ANGELES",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("USA");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> ✈️ Trip Recommendation </h1>
      <p style={{ fontSize: "smaller" }}> Checkout my favorite place.</p>

      <div>
        {Object.keys(tripDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {tripDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
