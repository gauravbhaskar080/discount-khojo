import { Box, Input } from "@mui/material";
import React from "react";

const addProduct = () => {
  return (
    <Box
      style={{
        width: "20rem",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", margin: "auto" }}
        name="addProduct"
        action="/adminActions/newProduct"
        method="POST"
        enctype="multipart/form-data"
      >
        <label for="name">
          Product Name
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            name="name"
            value=""
            required
          />
        </label>
        <label for="description">
          Description
          <textarea
            type="text"
            id="description"
            placeholder="Enter Description of new Product"
            name="description"
            required
          ></textarea>
        </label>
        <label for="price">
          Price
          <input
            type="number"
            min="1"
            id="price"
            value=""
            placeholder="Enter Product Price($)"
            name="price"
            required
          />
        </label>
        <label for="category">Category of the Product</label>
        <select name="category" id="category">
          <option value="Energy & Endurance">Energy & Endurance</option>
          <option value="Recovery & Repair">Recovery & Repair</option>
          <option value="Whey Proteins">Whey Proteins</option>
          <option value="Nutrients">Nutrients</option>
        </select>
        <label for="productImage">
          Product Image [Image type : png(only)]
          <Input
            class="product-img"
            type="file"
            value=""
            id="productImage"
            name="productImage"
            placeholder="Upload Image"
            required
          />
        </label>

        <button id="add-product-btn" type="submit">
          Add Preduct
        </button>
      </form>
    </Box>
  );
};

export default addProduct;
