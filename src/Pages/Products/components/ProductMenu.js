import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const ProductMenu = (props) => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Miêu tả
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Thông tin thêm
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Nhận xét
        </Link>
      </li>
    </Box>
  );
};
ProductMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: theme.spacing(2, 4),
    },

    "& > li > a": {
      color: theme.palette.grey[700],
      border: "none",
    },

    "& > li > a.active": {
      color: "var(--primary-color)",
    },
  },
}));
export default ProductMenu;
