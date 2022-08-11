import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardActionArea,
  } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send";
  
  const Project = (props) => {
    const gotToLink = () => {
      window.open(props.githubLink);
    };
    return (
      <Box
        sx={{
          display: "flex",
          alignContent: "start",
          flexWrap : "wrap",
          direction: "column",
          justifyContent: "start",
          textAlign: "start",
          
        }}
      >
        <Card sx={{ maxWidth: 400 }} elevation={5}>
          <CardActionArea>
            <CardMedia component="img" height="160" image={props.image} />
  
            <CardContent>
              <Typography sx={{  fontFamily:"montserrat", color:"#242526" }}gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="text"
              endIcon={<SendIcon />}
              onClick={gotToLink}
            >
              View PRoject
            </Button>
          </CardActions>
        </Card>
        
      </Box>
    );
  };
  export default Project;
  