import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    InputBase
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";


export default function NavBar({ isLoggedIn, isAdmin }) {
    const [setIsLoggedIn] = useState(false);
    const [setIsAdmin] = useState(false);

    const handleLogout = () => {
        // Handle logout logic here
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <div>
                    <InputBase placeholder="Search..." sx={{ mr: 1 }} />
                    <IconButton color="inherit" aria-label="search" sx={{ p: "10px" }}>
                        <SearchIcon />
                    </IconButton>
                </div>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
                {isAdmin && (
                    <Button component={Link} to="/add-products" color="inherit">
                        Add Products
                    </Button>
                )}
                {isLoggedIn ? (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Button component={Link} to="/login" color="inherit">
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
