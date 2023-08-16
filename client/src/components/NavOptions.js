import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavOptions = ({ Icon, title, nav }) => {
  const navigate = useNavigate();
  const laptopView = useMediaQuery("(min-width:1124px)");
  const tabletView = useMediaQuery("(min-width:1124px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      p="0 1rem"
      alignItems="center"
      color="gray"
      onClick={() => navigate(nav)}
      sx={{
        "&:hover": {
          color: "primary.main",
          cursor: "pointer",
          borderBottom: 2,
        },
      }}
    >
      {laptopView ? (
        <Icon sx={{ fontSize: "1.4rem" }} />
      ) : (
        <Icon sx={{ fontSize: "2rem" }} />
      )}
      {laptopView && <Typography fontWeight="bold">{title}</Typography>}
    </Box>
  );
};

export default NavOptions;
