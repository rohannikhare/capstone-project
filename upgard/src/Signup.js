
// Method:1 using simple HTML and Material Ui at button and Textfield

 import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

 const SignupPage = (props) => {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState("");
   const [error, setError] = useState("");

  const handleUserNameChange = (e) => {
     setUserName(e.target.value);
   };

   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };

   const handleRePasswordChange = (e) => {
     setRePassword(e.target.value);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     const data = new FormData(e.currentTarget);
    if (password !== rePassword) {
       setError("Passwords do not match");
     } else if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
       setError("Password must contain at least one special character");
     } else {
       setUserName("");
       setPassword("");
     setRePassword("");
      setError("");
      console.log("passed");
       console.log({
       email: data.get('email'),
         password: data.get('password'),
       });
     }
  };

   return (
     <div>
       <form onSubmit={handleSubmit}>
         <h2>Signup</h2>
         <div>
         <TextField
             variant="standard"
             label="UserName"
            type="text"
             value={userName}
             placeholder="Enter Username"
             onChange={handleUserNameChange}
          />
        </div>

       <div>
         <TextField
           variant="standard"
             label="Password"
            type="password"
            value={password}
            placeholder="Enter Password"
             onChange={handlePasswordChange}
           />
         </div>

         <div>
           <TextField
            variant="standard"
            label="Re-password"
            type="password"
            value={rePassword}
            placeholder="Re-enter Password"
            onChange={handleRePasswordChange}
          />
          {error && <p>{error}</p>}
        </div>

         <div>
           <Button variant="contained" type="submit">
             Submit
          </Button>
         </div>
      </form>
    </div>
   );
};

 export default SignupPage;

