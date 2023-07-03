import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import upgradLogo from "./Asset/Upgrad logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function NavBar () {
  const onClickSignupHandler = (e) => {
    e.preventDefault();

    window.location.href = "/users";
  };

  const onClickLogininHandler = (e) => {
    e.preventDefault();

    window.location.href = "/auth";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="transparent"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <img src={upgradLogo} alt="upGrad Eshop Logo" /> */}
            upGrad Eshop
          </Typography>

          <Link to="SignIn">
            <Button variant="contained" onClick={onClickLogininHandler}>
              Sign In
            </Button>
          </Link>

          <Link to="signup">
            <Button variant="contained" onClick={onClickSignupHandler}>
              Sign up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};