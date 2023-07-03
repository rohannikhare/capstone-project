import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import CopyRight from "./Asset/CopyRight";
import LoggedPage from "./Asset/LoggedPage";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send signup data to the API
      const response = await axios.post("http://localhost:3001/api/v1/auth", {
        email,
        password,
      });

      // Send login data to the API for authentication
      // const response = await axios.post("/api/v1/auth", { email, password });

      setIsLoggedIn(true);
      setIsAdmin(response.data.isAdmin);

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    // If there is saved data, set it in the component state
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);

  const HandleSignupClick = async (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      window.location.href = "/products";
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      {isLoggedIn ? (
        <div className="header-container">
          <LoggedPage />
          {isAdmin && <Link to="/add-products">Add Products</Link>}
        </div>
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={HandleSignupClick}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CopyRight sx={{ mt: 5 }} />
        </Container>
      )}
    </ThemeProvider>
  );
}
