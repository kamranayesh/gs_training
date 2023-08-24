import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import "./Ecommerce.css";

const Ecommerce = () => {
  let [products, setProduct] = useState([
    { name: "Shirt", available: "No", price: 1000 },
    { name: "Bracelet", available: "No", price: 200 },
    { name: "tiffin", available: "No", price: 300 },
  ]);
  useEffect(() => {
    console.log("useEffect is fired!");
  }, [products]);

  const addProduct = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const productObj = formObj.product;
    const availableObj = formObj.available;
    const priceObj = formObj.price;
    let newProduct = [
      ...products,
      {
        name: productObj.value,
        price: priceObj.value,
        available: availableObj.value,
      },
    ];
    setProduct(newProduct);
  };

  const deleteProduct = (indexTodelete) => {
    let newProduct = products.filter((val, index) => {
      if (index == indexTodelete) {
        return false;
      }
      return true;
    });
    setProduct(newProduct);
  };
  const clearProduct = () => {
    let newProduct = [];
    setProduct(newProduct);
  };

  return (
    <div id="ecommerce">
      <h1>Ecommerce</h1>
      <form onSubmit={addProduct}>
        <TextField
          label="Product"
          variant="standard"
          type="text"
          id="product"
          name="product"
          placeholder="Enter Product name"
        />
        <TextField
          label="Price"
          variant="standard"
          type="number"
          id="price"
          name="price"
          placeholder="Enter Price"
        />
        <TextField
          label="available"
          variant="standard"
          type="text"
          id="available"
          name="available"
          placeholder="Available"
        />
        <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
      <hr />
      <div id="Productlist">
        {products.map((val, index) => {
          return (
            <div>
              <p>Name : {val.name}</p>
              <p>Price : {val.price}</p>
              <p>Available : {val.available}</p>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  deleteProduct(index);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              {/* <Button
                variant="contained"
                className="delete-btn"
                onClick={() => {
                  deleteProduct(index);
                }}
              >
                Delete
              </Button> */}
            </div>
          );
        })}
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearProduct}>
        Clear
      </Button>
    </div>
  );
};

export default Ecommerce;
