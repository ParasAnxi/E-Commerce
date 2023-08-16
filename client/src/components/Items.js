import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import FlexEven from "./FlexEven";

const Items = () => {
  const medMobileView = useMediaQuery("(max-width:378px)");
  return (
    <>
      <Navbar />
      <FlexEven>
        <Box display="flex" bgcolor="white">
          <Box display="flex" flexDirection="column">
            <Box>
              <img
                src="assets/Dg.jpg"
                alt="cartItemImage"
                style={{
                  height: medMobileView ? "150px" : "250px",
                  width: medMobileView ? "150px" : "250px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography>Anime art stuff</Typography>
          </Box>
        </Box>
        <Box>hello</Box>
      </FlexEven>
    </>
  );
};

export default Items;
