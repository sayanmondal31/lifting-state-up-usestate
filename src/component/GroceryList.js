import React from "react";
import GroceryListItem from "./GroceryListItem";

export default function GroceryList({ groceryItems }) {
  return (
    <>
      {groceryItems.map((item) => {
        return (
          <GroceryListItem key={item.id} name={item.name} price={item.price} />
        );
      })}
    </>
  );
}
