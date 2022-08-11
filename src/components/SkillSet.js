import { Box, Grid, Divider, Typography,CardMedia } from "@mui/material";
import React from "react";
import profilePic from "../images/bitmoji-removebg-preview.png";

 
const SkillSet = () => {
  const skillSetIcon = [
    "devicon-cplusplus-plain",
    "devicon-c-plain",
    "devicon-javascript-plain",
    "devicon-react-original",
    "devicon-nodejs-plain-wordmark",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-git-plain",
    "devicon-bootstrap-plain-wordmark",
    "devicon-materialui-plain",
    "devicon-canva-plain",
    "devicon-jquery-plain-wordmark",
    "devicon-mysql-plain-wordmark",
  ];
  return (
    <Box
      id="AboutMe"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex",  mt: "4rem", mb: "3rem"}}>
        <Typography sx={{  fontFamily:"montserrat", color:"#242526" }}variant="h5" component="h4">
          About Me
        </Typography>
      </Divider>

      <CardMedia
        component="img"
        image={profilePic}
        sx={{
          width: "200px",
          borderRadius: "50%",
          borderColor: "primary",
          borderWidth: "2px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
          backgroundColor: "#231F20",
          mt: "1rem",
          mb: "2rem"
         
        }}
      />
      <Typography
        variant="body1"
        component="h4"
        textAlign="center"
        sx={{ m: "15px",fontFamily:"montserrat" }}
      >
        I am currently pursuing BTech. in Electronics and Communication Engineering from MNIT Jaipur.
        <br/><br/>
        Being a Tech. Enthusiast, I love to explore new technologies and understanding the functioning of <br/>software industry and work in a globally competitive environment.
        <br />I am a self-motivated, agile and quick learner.
        <br/><br/>
        I am interested in the domain of web development and competitive programming. 
        <br/><br/><br/><br/>
      </Typography>
      <Divider sx={{ width: "20rem", display: "flex",  mt: "4rem", mb: "3rem"}}>
        <Typography sx={{  fontFamily:"montserrat", color:"#242526", }} variant="h5" component="h4">
          My Skills
        </Typography>
      </Divider>
      <Grid
        container
        spacing={5}
        padding={2}
        columnSpacing={5}
        columns={{ xs: 4, sm: 6, md: 10 }}
        rowSpacing={5}
        justifyContent="center"
        textAlign="center"
      >
        {Array.from(skillSetIcon).map((item, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <i className={item} style={{ fontSize: "7rem" , color: "#242526"} }></i>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SkillSet;
