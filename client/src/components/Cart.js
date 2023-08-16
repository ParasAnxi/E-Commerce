import React, { useEffect } from 'react'
import FlexEven from './FlexEven'
import Navbar from './Navbar'
import { Box, Button, Collapse, Divider, Menu, Typography, useMediaQuery } from '@mui/material'
import CartItems from './CartItems'
import { CheckCircle } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCartItems, setTotalAmountAndPrice } from 'features/cart/cartSlice'

const Cart = () => {
    const mobileView = useMediaQuery("(min-width:740px)");
    const cartItems = useSelector(selectAllCartItems);
    const totalPrice = useSelector((state)=>state.cart.totalPrice);
    const totalAmount = useSelector((state)=>state.cart.totalAmount);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setTotalAmountAndPrice());
    }, [cartItems]);
  return (
    <>
      <Navbar />

      {mobileView ? (
        <FlexEven mt="20px">
          <Box
            flex="0.65"
            bgcolor="white"
            boxShadow="rgba(0,0,0,0.24)0px 3px 8px"
            height="fit-content"
            p="1.25rem"
          >
            <Typography fontSize="20px" fontWeight="bold">
              Shopping Cart
            </Typography>
            <Divider
              sx={{
                m: "1rem",
                borderBottomWidth: "2px",
              }}
            />
            <CartItems />
          </Box>
          <Box
            flex="0.3"
            bgcolor="white"
            height="fit-content"
            p="1.25rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap=".7rem"
            boxShadow="rgba(0,0,0,0.24)0px 3px 8px"
          >
            <Box display="flex">
              <CheckCircle sx={{ color: "success.main" }} />
              <Typography color="green" ml="0.5rem" variant="p">
                Your order is eligible for FREE Delivery
              </Typography>
            </Box>

            <Typography fontWeight="500" fontSize="24px">
              Subtotal({totalAmount} {totalAmount === 1 ? "item" : "items"}): $
              {totalPrice.toFixed(2)}
            </Typography>
            <Button
              sx={{
                width: "80%",
                color: "black",
                bgcolor: "#b4c0f9",
                boxShadow:
                  "rgba(0,0,0,0.09) 0px 2px 1px, rgba(0,0,0,0.09)0px 4px 2px,rgba(0,0,0,0.09) 0px 8px 4px,rgba(0,0,0,0.09) 0px 16px 8px",
              }}
            >
              Buy
            </Button>
          </Box>
        </FlexEven>
      ) : (
        <Box display="flex" flexDirection="column">
          <Box
            flex="0.3"
            bgcolor="white"
            height="fit-content"
            p="1.25rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap=".7rem"
            boxShadow="rgba(0,0,0,0.24)0px 3px 8px"
          >
            <Box display="flex">
              <CheckCircle sx={{ color: "success.main" }} />
              <Typography color="green" ml="0.5rem" variant="p">
                Your order is eligible for FREE Delivery
              </Typography>
            </Box>
            <Typography fontWeight="500" fontSize="24px">
              Subtotal({totalAmount} {totalAmount === 1 ? "item" : "items"}): $
              {totalPrice.toFixed(2)}
            </Typography>
            <Button
              sx={{
                width: "80%",
                color: "black",
                bgcolor: "#b4c0f9",
                boxShadow:
                  "rgba(0,0,0,0.09) 0px 2px 1px, rgba(0,0,0,0.09)0px 4px 2px,rgba(0,0,0,0.09) 0px 8px 4px,rgba(0,0,0,0.09) 0px 16px 8px",
              }}
            >
              Buy
            </Button>
          </Box>
          <Box
            bgcolor="white"
            boxShadow="rgba(0,0,0,0.24)0px 3px 8px"
            height="fit-content"
            p="1.25rem"
          >
            <Typography fontSize="20px" fontWeight="bold">
              Shopping Cart
            </Typography>
            <Divider
              sx={{
                m: "1rem",
                borderBottomWidth: "2px",
              }}
            />
            <CartItems />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Cart