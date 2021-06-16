import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import "./GroceryListItem.css";

export default function GroceryListItem({
  key,
  name,
  price,
  onUpdate,
  onDelete
}) {
  const classes = useStyles();

  const [nameUpdate, setNameUpdate] = useState(name);
  const [priceUpdate, setPriceUpdate] = useState(price);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  function nameUpdateHandler(event) {
    setNameUpdate(event.target.value);
  }

  function priceUpdateHandler(event) {
    setPriceUpdate(event.target.value);
  }

  function handleSubmit(e) {
    setOpen(false);
    // name = nameUpdate;
    // price = priceUpdate;
    // console.log(name);
    // console.log(price);
  }

  useEffect(() => {
    name = nameUpdate;
    price = priceUpdate;
  }, [nameUpdate, priceUpdate]);

  return (
    <>
      <Card className={classes.root}>
        <CardContent key={key}>
          <div style={{ display: "flex" }}>
            <div>
              {/* Grocery name and update field */}
              {!open ? (
                <h2>{name}</h2>
              ) : (
                <>
                  <div className="new-grocery-update__controls">
                    <label>Name</label>
                    <input
                      value={nameUpdate}
                      type="text"
                      onChange={nameUpdateHandler}
                    />
                  </div>
                </>
              )}

              {/* Grocery price and update field */}
              {!open ? (
                <p>price: ${price}</p>
              ) : (
                <>
                  <div className="new-grocery-update__controls">
                    <label>Price</label>
                    <input
                      value={priceUpdate}
                      type="number"
                      min="0.1"
                      step="0.1"
                      onChange={priceUpdateHandler}
                    />
                  </div>
                </>
              )}
            </div>

            <div style={{ display: "flex", flex: "0.9" }} />

            {!open && (
              <IconButton className={classes.icon} onClick={handleOpen}>
                <EditIcon color="primary" />
              </IconButton>
            )}
            {open && (
              <IconButton className={classes.icon} onClick={handleSubmit}>
                <CheckIcon color="primary" />
              </IconButton>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: "purple",
    backgroundColor: "#fff5fd",
    textAlign: "left",
    marginBottom: "10px",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#e4bad4"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    textAlign: "left"
  },
  pos: {
    marginBottom: 12
  },
  icon: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
});
