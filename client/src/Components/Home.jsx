import React, { useEffect } from "react";

import Banner from "./Home/Banner";
import NavBar from "./Home/NavBar";
import Slide from "./Home/Slide";
import MidSlide from "./Home/MidSlide";
import MidSection from "./Home/MidSection";

import { Box, styled } from "@mui/material";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const getProducts = useSelector((state) => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} />
        <MidSection />
        <Slide data={products} title="Discounts for You" timer={false}/>
        <Slide data={products} title="Suggested Items" timer={false}/>
        <Slide data={products} title="Top Selection" timer={false}/>
        <Slide data={products} title="Recommended Items" timer={false}/>
      </Component>
    </>
  );
};

export default Home;
