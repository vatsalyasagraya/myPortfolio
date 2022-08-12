import { Box, Grid, Divider, Typography } from "@mui/material";
import Project from "../Project";
// import screenShooter from "../images/ff.png";
import urban from "../images/urban.png";
import simon from "../images/simon.png";
import moviebuffs from "../images/moviebuff.png";
import textutils from "../images/textutils.png";

const Projects = () => {
  const Projects = [
    
//     {
//       title: "MovieBuffs",
//         desc: "A website which provides you information about every movie and web-series. It has different sections which segregates the movies accordingly. You can search movies, watch trailer and can read brief information about the movie.",
//         image: moviebuffs,
//         githubLink: "https://movie-buffs-vatsalyasagraya.vercel.app/",
//         techStack: "JavaScript",
//       },
    {
        title: "TextUtils",
        desc: "Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, remove extra spaces. TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.",
        image: textutils,
        githubLink: "https://github.com/vatsalyasagraya/TextUtils",
        techStack: "JavaScript",
      },
    {
      title: "Urban Merchant",
      desc: "A MERN stack project based on theme Vocal for local which provide a platform for the local traders to get them self-registered where they can put their own local product which could be later accessed by the ecommerce stores for selling.",
      image: urban,
      githubLink: "https://github.com/vatsalyasagraya/UrbanMerchant",
      techStack: "JavaScript",
    },
    {
    title: "Simon Game",
      desc: "A game which creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over.",
      image: simon,
      githubLink: "https://vatsalyasagraya.github.io/SimonGame/",
      techStack: "JavaScript",
    }
 
  ];

  return (
    <Box
      id="Projects"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        flexWrap : "wrap",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        p: "10px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "4rem" }}>
        <Typography variant="h5" component="h4" sx={{ fontFamily:"montserrat", color:"#242526"}}>
          My Projects
        </Typography>
      </Divider>
      <Grid
        container
        columnSpacing={4}
        spacing={2}
        paddingTop={5}
        paddingBottom={5}
        rowSpacing={5}
        columns={{ xs: 3, sm: 4, md: 9, lg: 12 }}
        justifyContent="center"
      >
        {Projects.map((project, index) => (
          <Grid item xs={2} sm={2} md={3} lg={3} key={index}>
            <Project
              title={project.title}
              desc={project.desc}
              image={project.image}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;
