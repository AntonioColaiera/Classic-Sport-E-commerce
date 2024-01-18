import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/actions/cartAction";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

// Component for displaying items
const Cards = ({ item }) => {
  const dispatch = useDispatch();

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    // Create a copy of the item object and add the quantity property
    const itemWithQuantity = { ...item, quantity };

    // Send the itemWithQuantity object to your addItem action
    dispatch(addItem(itemWithQuantity));
  };

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <MuiCard sx={{ width: 320, margin: 2 }}>
      <div>
        <Typography variant='h6'>{item.title}</Typography>
        <IconButton
          aria-label='bookmark Bahamas Islands'
          variant='plain'
          color='inherit'
          size='small'
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
        <div style={{ paddingTop: "56.25%", position: "relative" }}>
          <img
            src={`../assets/items/${item.image}`}
            loading='lazy'
            alt={item.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <Typography variant='body1'>{item.information}</Typography>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant='body2'>Price:</Typography>
            <Typography variant='h5'>${item.price}</Typography>
          </div>
          <Button
            variant='contained'
            size='medium'
            color='primary'
            aria-label='Explore Bahamas Islands'
            sx={{ alignSelf: "flex-end", fontWeight: 600 }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </CardContent>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            +
          </Button>
          <Typography variant='h5'>{quantity}</Typography>
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          >
            -
          </Button>
        </div>
      </div>
    </MuiCard>
  );
};

export default Cards;
