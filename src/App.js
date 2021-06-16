import "./styles.css";
import { grocery } from "./GroceryItem";
import GroceryList from "./component/GroceryList";
import { useState } from "react";
import NewGrocery from "./component/NewAddGrocery/NewGrocery";

export default function App() {
  // initial grocery comes from GroceryItem.js
  const [groceries, setGroceries] = useState(grocery);

  // when new grocery will add this function will call
  function addGrocery(newGroceryItem) {
    // calling setstate [[ setGroceries ]]
    setGroceries((prevItem) => {
      // prevItem keep track the previous groceries
      return [newGroceryItem, ...groceries]; // newItem is new grocery object {name:"",price:""}
      // which added to grocery list and also ...groceries keep track
      // previous groceries
    });
  }

  return (
    <div className="App">
      <h1>Grocery item</h1>

      {/* incoming newGrocery item with event handler {onAddGrocery} */}
      <NewGrocery onAddGrocery={addGrocery} />

      {/* entering previous and updated groceries as props */}
      <GroceryList groceryItems={groceries} />
    </div>
  );
}
