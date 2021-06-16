import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./NewGroceryForm.css";

function NewGroceryForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const newGrocery = {
      name: name,
      price: price
    };

    props.onSaveGrocery(newGrocery); // outgoing new Grocery

    setName("");
    setPrice("");
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-grocery__controls">
          <div className="new-grocery__control">
            <label>Name</label>
            <input type="text" value={name} onChange={nameChangeHandler} />
          </div>
          <div className="new-grocery__control">
            <label>Price</label>
            <input
              type="number"
              value={price}
              min="0.01"
              step="0.01"
              onChange={priceChangeHandler}
            />
          </div>
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </div>
      </form>
    </>
  );
}

export default NewGroceryForm;
