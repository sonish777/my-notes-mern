import React from "react";
import { Link } from "react-router-dom";
import { Typography, Breadcrumbs, makeStyles } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  active: {
    color: theme.palette.primary.main,
  },
  breadcrumbsRoot: {
    "& > ol > li > p": {
      textAlign: "left",
    },
  },
}));

const BreadcrumbLinks = ({ links, active }) => {
  const classes = useStyles();
  return (
    <Breadcrumbs
      separator={<NavigateNext />}
      maxItems={2}
      className={classes.breadcrumbsRoot}
    >
      <Typography variant="h6">BEIT</Typography>
      {links.map((link, i) => {
        return (
          <Typography key={i}>
            <Link
              color="inherit"
              to={link.route}
              className={`${classes.links} ${
                active === link.route && classes.active
              }`}
            >
              {link.text}
            </Link>
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbLinks;
