import React from "react";
import { Link } from "react-router-dom";
import { Typography, Breadcrumbs, makeStyles } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.6)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontFamily: "Roboto",
    fontWeight: "500",
    transition: "all 0.3s ease",
    "&:hover": {
      opacity: 0.8,
      borderBottom: "1px solid",
    },
  },
  breadcrumbsRoot: {
    "& > ol > li > p": {
      textAlign: "left",
    },
    "& .MuiBreadcrumbs-separator": {
      color: "rgba(255,255,255,0.6)",
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
      {/* <Typography style={{ color: "tomato" }}>IT</Typography> */}
      {links.map((link, i) => {
        return (
          <Typography key={i}>
            <Link color="inherit" to={link.route} className={classes.links}>
              {link.text}
            </Link>
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbLinks;
