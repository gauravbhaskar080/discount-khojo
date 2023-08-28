import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../../service/api";
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;


const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth);

  const handleCheckout = () => {
    console.log(cartItems);
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        // userId: user._id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
    <StyledButton variant="contained" onClick={() => handleCheckout()}>Place Order</StyledButton>
    </>
  );
};

export default PayButton;
