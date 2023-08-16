import React from 'react'
import FlexBtw from './FlexBtw'
import { Avatar, Badge, Box, IconButton, InputBase, Typography, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ContactSupport, Home, LocalMall, Search, Sell, ShoppingCartOutlined } from '@mui/icons-material'
import NavOptions from './NavOptions'


const Navbar = () => {
  const laptopView = useMediaQuery("(min-width:953px)");
  const mobileView = useMediaQuery("(min-width:659px)");
    const navigate = useNavigate();
    const medMobileView = useMediaQuery("(max-width:378px)");
  return (
    <FlexBtw bgcolor="whitesmoke" p="1rem 6%" boxShadow="0px 10px 10px -15px">
      <FlexBtw>
        {/* Logo */}
        
        <Typography
          fontWeight="bold"
          
          onClick={() => navigate("/")}
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: "blue",
              opacity: ".5",
            },
          }}
        >
          E-Com
        </Typography>

        {/* Search Bar */}
        {!medMobileView && (

          <FlexBtw
          bgcolor="white"
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
          ml="1rem"
          >
          {laptopView &&<InputBase placeholder="Search..." />}
          {!medMobileView && (
            <IconButton>
              <Search />
            </IconButton>
          )}
        </FlexBtw>
      )}
      </FlexBtw>

      {/* NavBar */}
      {mobileView && (
        <FlexBtw>
          <NavOptions Icon={Home} title="Home" nav="/" />
          <NavOptions Icon={LocalMall} title="Products" nav="/items" />

          <NavOptions Icon={Sell} title="Sell Online" nav="/addProduct" />
          <NavOptions Icon={ContactSupport} title="Contact Us" nav="/support" />
        </FlexBtw>
      )}
      {/* SignIn Cart */}
      <FlexBtw>
        {!mobileView && (
          <NavOptions Icon={LocalMall} title="Products" nav="/items" />
        )}
        <Box
          display="flex"
          flexDirection="column"
          p="0 1rem"
          alignItems="center"
          color="gray"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: "primary.main",
            },
          }}
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={7} color="primary">
            <ShoppingCartOutlined sx={{ fontSize: "1.7rem" }} />
          </Badge>
          <Typography fontWeight="bold" fontSize="0.8rem">
            Cart
          </Typography>
        </Box>
        <Box ml="1rem">
          <Avatar />
        </Box>
      </FlexBtw>
    </FlexBtw>
  );
}

export default Navbar