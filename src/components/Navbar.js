import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from '@mui/icons-material/Code';
import { Drawer, List, ListItem, ListItemText, Hidden, Stack } from "@mui/material";
 export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const getCamelCase = (input) => {
    let words = input.split(" ");
    let linkWords = [];
    words.forEach((element) => {
      linkWords.push(
        element[0].toUpperCase() +
          element.slice(1, element.length).toLowerCase()
      );
    });
    return linkWords.join("");
  };


  const appBarButtons = (
    <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
      <Button
        variant="text"
        color="inherit"
        onClick={() => scrollTo("AboutMe")}
        sx={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
      >
        About Me
      </Button>
      <Button color="inherit" onClick={() => scrollTo("Education")}         sx={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
>
        Education
      </Button>
      <Button color="inherit" onClick={() => scrollTo("Projects")}        sx={{
            fontFamily: 'Montserrat',
            color: 'inherit',
            textDecoration: 'none',
          }}
>
        Projects
      </Button>
      <Button color="inherit" onClick={() => scrollTo("Contact")}        sx={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
>
        Contact
      </Button>
    </Box>
  );

 
  const sideDrawer = (
    <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
      <Drawer
        variant="temporary"
        anchor="right"
        PaperProps={{
          sx: { width: "40%", textAlign: "center" },
        }}
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
                    overflow: "hidden",
        }}
      >
        <List onClick={handleDrawerToggle}>
          {["ABOUT ME", "PROJECTS", "EDUCATION", "CONTACT"].map(
            (text, index) => (
              <ListItem
                button
                component="a"
                key={text}
                href={"#" + getCamelCase(text)}
              >
                <ListItemText sx={{ textAlign: "center" }} primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
    </Box>
    );
  return (
      <AppBar position="static" sx={{ bgcolor: "#242526" }}>
        <Toolbar>
        <Stack direction="row" alignItems="center" gap={1} sx={{ flexGrow: 1 }}>
          <CodeIcon sx={{fontSize : 27}}/>
          <Typography variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
            //   mr: 2,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.11rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>Vatsalya</Typography>
          </Stack>
          <Hidden smUp>{sideDrawer}</Hidden>
          <Hidden smDown>{appBarButtons}</Hidden>
        </Toolbar>
      </AppBar>
  );
}
