import {
  Box,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/vatsalyasagraya",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/vatsalya-sagraya-0b3b19198/",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/VatsalyaSagraya",
    },
  ];
  return (
    <Box
      id="Contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
        m: "0 auto",
        backgroundImage:
        "linear-gradient(135deg, rgba(79,189,191,1) 0%, rgba(252,252,254,1) 100%)",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "3rem", color:"white" }}>
        <Typography sx={{  fontFamily:"montserrat", color:"#242526" }} variant="h5" component="h4" color="common.white">
        Get In Touch
        </Typography>
      </Divider>
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{  fontFamily:"montserrat", color:"#242526", fontSize:"1.1rem" }} variant="h6" component="h6" color="common.white">
          Email: vatsalya.sagraya@gmail.com
        </Typography>
      </Box>
      <Divider
        sx={{
          width: "21rem",
          display: "flex",
          mt: "10px",
          mb: "10px",
        }}
        style={{ backgroundColor: "#242526" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {socialLinks.map((socialLink) => (
          <IconButton
            key={socialLink.url}
            onClick={() => window.open(socialLink.url)}
            sx={{
               color: "#242526", 
              ":hover": {
                bgcolor: "#D5F0FF",
                color: "black",
              },
            }}
          >
            {socialLink.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
export default Contact;
