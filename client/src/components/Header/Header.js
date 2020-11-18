import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography>My Notes</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
