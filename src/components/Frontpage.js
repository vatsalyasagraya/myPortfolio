import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  IconButton,
  Fab,
  Hidden,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactRotatingText from "react-rotating-text";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const FrontPage = () => {
  const useStyles = makeStyles({
    topText: {
      position: "relative",
      bottom:"8rem",
      fontFamily:"montserrat",
      margin: "0 1.4rem",
      color:"#242526",
      fontSize: "2.5rem",
  
    },
    name: { 
      fontFamily: 'Sacramento',
      // fontFamily:"montserrat",
      position: "relative",
      bottom: "2rem",
      margin: "0.5rem 1rem",
      fontWeight: "bold",
      fontSize: "4rem",
      color:"#242526"

    },
    
    bottomText: { fontFamily:"montserrat",
      position: "relative",
      top: "4rem",
      margin: "0 1.4rem",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color:"#242526"
    },
    button: {
      position: "relative",
      top: " 8rem",
      fontSize: "3rem",
      color:"#242526",
    },
    backToTopButton: {
      fontFamily:"montserrat",
      position: "fixed",
      bottom: "0",
      right: "0",
      margin: "1rem",
      zIndex: "99999",
    },
    backToTopButtonMobile: {
      position: "fixed",
      bottom: "0",
      right: "0rem",
      // margin: "0.8rem",
      marginBottom: "3rem",
      zIndex: "99999"
    },
  });
  const classes = useStyles();

  // makes the typing animation run on an infinite loop
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "95vh",
        backgroundImage:
        "linear-gradient(135deg, rgba(79,189,191,1) 0%, rgba(252,252,254,1) 100%)",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",

      }}
      id="Top"
    >
      <Typography className={classes.topText} variant="h2" align="center">
        Hello 
      </Typography>
      <Typography className={classes.name} variant="h1" align="center">
        I'm Vatsalya
      </Typography>
      <Typography className={classes.bottomText} align="center">
        <ReactRotatingText 
          items={[
            "Full Stack Web Developer",
            "Tech Enthusiast",
            "Programmer",
          ]}
          
          pause={800}
        />
      </Typography>
      <IconButton
        className={classes.button}
        aria-label="Scroll Down"
        onClick={() => scrollTo("AboutMe")}
      >
        
        <KeyboardArrowDownIcon fontSize="1.5rem" />
      </IconButton>
      <Hidden smDown>
        <Fab
          className={classes.backToTopButton}
          variant="extended"
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
          Back to Top
        </Fab>
      </Hidden>
      <Hidden smUp>
        <Fab
          className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Hidden>
    </Box>
  );
};

export default FrontPage;





