import React from "react";
import NewGroceryForm from "./NewGroceryForm";

function NewGrocery(props) {
  function saveGrocery(newAddedGrocery) {
    // keeping newGroceryEntry {...newAddedGrocery} generating id on the fly
    const newGroceryItem = {
      ...newAddedGrocery,
      // individual item needs id
      id: Math.random().toString()
    };

    props.onAddGrocery(newGroceryItem); //outgoing grocery
  }

  return (
    // incoming grocery from NewGroceryForm
    <NewGroceryForm onSaveGrocery={saveGrocery} />
  );
}

export default NewGrocery;
