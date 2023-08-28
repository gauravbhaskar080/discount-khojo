import { useState , useContext} from "react";

import { Box, Typography, Button, styled, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profile from "./Profile";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginDialog from '../login/LoginDialog';
<<<<<<< HEAD

=======
>>>>>>> fd52053d1e0bbc7a20d5e0656a1772592943641c
import { LoginContext } from "../../../context/ContextProvider";

let Container = styled(Link)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));


const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const {account,setAccount} = useContext(LoginContext);
  const openDialog = () => {
    setOpen(true);
  }
  const EMPTY_CART = { cartItems: [] }; // To ensure that default value is singleton and avoid useless re-renders

  const cartDetails = useSelector(state => state.cart || EMPTY_CART);
    const { cartItems } = cartDetails;
    const navigate = useNavigate();
  return (
    <Wrapper>
      {
        account ? <Profile account = {account} setAccount={setAccount}/> : <LoginButton variant="contained" onClick={()=> openDialog()}>Login</LoginButton>
      }
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
<<<<<<< HEAD
      <Box onClick={()=> navigate('/addProduct')}>
        <Typography style={{ marginTop: 3 , cursor: "pointer"} }>More</Typography>
      </Box>

=======
      <Container to="/product">
      <Typography style={{ marginTop: 3 }}>More</Typography>
      </Container>
>>>>>>> fd52053d1e0bbc7a20d5e0656a1772592943641c
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="success" >
        <ShoppingCartIcon />
        </Badge>
      </Container>

      <LoginDialog open = {open} setOpen = {setOpen}/>

    </Wrapper>
  );
};

export default CustomButtons;
