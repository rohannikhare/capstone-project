import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import upgradLogo from "./Asset/Upgrad logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function LoggedPage() {

  const [, setIsLoggedIn] = useState(false);
  const [, setIsAdmin] = useState(false);
  const Logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    window.location.href = "/";

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
            upGrad Eshop
          </Typography>
          <input type="text" placeholder="Search" />
          <Button variant="contained" onClick={Logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}