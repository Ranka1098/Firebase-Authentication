import React, { useState } from "react";
import { usefirebase } from "../context/Firebase";

const ListingPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCoverPic] = useState("");
  const [isbn, setIsbNumber] = useState("");

  const firebase = usefirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreatenewListing(name, isbn, price, cover);
    setName("");
    setIsbNumber("");
    setCoverPic("");
    setPrice("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>BookName</label>
        <br />
        <input
          type="text"
          placeholder="Book Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>IsbnNumber</label>
        <br />
        <input
          type="text"
          placeholder="ISBN..."
          value={isbn}
          onChange={(e) => setIsbNumber(e.target.value)}
        />
        <br />

        <label>Price</label>
        <br />
        <input
          type="text"
          placeholder="Enter Price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <label>CoverPic</label>
        <br />
        <input
          type="file"
          value={cover}
          onChange={(e) => setCoverPic(e.target.value)}
        />
        <br />

        <button>Create</button>
      </form>
    </div>
  );
};

export default ListingPage;
