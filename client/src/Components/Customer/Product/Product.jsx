import React from "react";

import { Box, styled } from "@mui/material";
import Filter from "./Filter/Filter";
import Item from "./Item/Item";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "280px",
  [theme.breakpoints.down("md")]: {
    width: "10%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#FFFFFF",
  width: "80%",
  marginLeft: 20, // Add a small gap between left and right components
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 0, // Adjust for smaller screens
  },
}));

const Product = () => {
  return (
    <Component>
      <LeftComponent>
        <Filter />
      </LeftComponent>
      <RightComponent>
        <Item />
      </RightComponent>
    </Component>
  );
};

export default Product;
