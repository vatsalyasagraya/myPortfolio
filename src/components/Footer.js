import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.2rem",
        backgroundColor: "#242526",
      }}
    >
      <Stack direction="row">
        <Typography color="common.white" sx={{fontFamily:"montserrat"}}>Made with &nbsp;</Typography>
        <FavoriteIcon color="error" />
        <Typography color="common.white" sx={{fontFamily:"montserrat"}}>
          {" "}
          &nbsp; by Vatsalya
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
