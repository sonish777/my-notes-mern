import React from "react";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#4D004D" }}>
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Typography
              variant="h5"
              style={{
                color: "rgb(202,0,255)",
                fontFamily: "Pacifico",
                letterSpacing: "1px",
              }}
            >
              My Notes
            </Typography>
            <p style={{ fontFamily: "Roboto" }}>&copy; Built by Node & React</p>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
