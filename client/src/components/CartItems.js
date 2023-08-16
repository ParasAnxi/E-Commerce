import {
  Box,
  Button,
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { deleteFromCartAsync, selectAllCartItems } from "features/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector(selectAllCartItems);
  const medMobileView = useMediaQuery("(max-width:378px)");
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
    dispatch(deleteFromCartAsync(id))
  }
  return (
    <>
      {cartItems?.map((item) => (
        <Box display="flex">
          {/* Image */}
          <Box>
            <img
              src={item.itemImg}
              alt="cartItemImage"
              style={{
                height: medMobileView ? "150px" : "250px",
                width: medMobileView ? "150px" : "250px",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            p="0 1rem"
            display="flex"
            flexDirection="column"
            gap="0.5rem"
            ml="1rem"
          >
            {/* Cart Heading */}
            <Typography
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                fontSize: "20px",
              }}
              fontWeight="500"
              sx={{
                width: "80%",
                heigth: "12px",
              }}
            >
              {item.name}
            </Typography>
            <Typography fontSize="16px" fontWeight="900">
              ${item.price}
            </Typography>
            <Typography color="success.main">In stock</Typography>
            <Typography>Brand: {item.brand}</Typography>

            {/* Cart Form */}
            <Box display="flex" p="0.5rem 0">
              <FormControl
                variant="standard"
                value={item.amount}
                sx={{
                  borderRadius: "0.25rem",
                }}
              >
                <Select
                  value={item.amount}
                  color="black"
                  sx={{
                    p: "0.2rem",
                    bgcolor: "#bababa",
                    width: "3rem",
                    borderRadius: "0.25rem",
                  }}
                  input={<InputBase />}
                >
                  <MenuItem
                    sx={{
                      height: "20px",
                    }}
                    value={1}
                  >
                    1
                  </MenuItem>
                  <MenuItem
                    sx={{
                      height: "20px",
                    }}
                    value={2}
                  >
                    2
                  </MenuItem>
                  <MenuItem
                    sx={{
                      height: "20px",
                    }}
                    value={3}
                  >
                    3
                  </MenuItem>
                  <MenuItem
                    sx={{
                      height: "20px",
                    }}
                    value={4}
                  >
                    4
                  </MenuItem>
                </Select>
              </FormControl>
              <Button sx={{ ml: "10px" }}
              onClick={()=>handleDelete(item.id)}
              >Delete</Button>
            </Box>
          </Box>
        </Box>
      ))}
      <Divider sx={{ m: "15px" }} />
    </>
  );
};

export default CartItems;
