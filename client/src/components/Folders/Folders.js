import React, { useContext } from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import { Delete, Folder } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import BreadcrumbLinksContext from "../../context/BreadcrumbLinks";
import { CSSTransition } from "react-transition-group";

import "./Folders.css";

const useStyles = makeStyles((theme) => ({
  directory: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "10px 0",
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-2px)",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary.main,
      },
    },
  },
  directoryDetails: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      marginRight: "10px",
    },
  },
}));

const Folders = ({ dirs, root }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const breadcrumbLinks = useContext(BreadcrumbLinksContext);

  const onClickHandler = (dir) => {
    history.push(
      `${root ? `/${dir.slug}` : `${location.pathname}/${dir.slug}`}`
    );
    root
      ? breadcrumbLinks.links.push({ text: dir.name, route: `/${dir.slug}` })
      : breadcrumbLinks.links.push({
          text: dir.name,
          route: `${location.pathname}/${dir.slug}`,
        });
  };

  return (
    <CSSTransition in={dirs.length > 0} timeout={500} classNames="folders">
      <div>
        {dirs.map((dir) => (
          <Paper
            className={classes.directory}
            key={dir._id}
            variant="outlined"
            elevation={2}
            onClick={() => onClickHandler(dir)}
          >
            <div className={classes.directoryDetails}>
              <Folder /> {dir.name}
            </div>
            <IconButton className={classes.deleteBtn}>
              <Delete />
            </IconButton>
          </Paper>
        ))}
      </div>
    </CSSTransition>
  );
};

export default Folders;
