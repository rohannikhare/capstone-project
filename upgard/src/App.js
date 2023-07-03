import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./component/SignUp";
import SignIn from "./component/SignIn";
import ProductsPage from "./component/ProductPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route exact path="/users" element={<Signup />} />
          <Route path="/auth" element={<SignIn />} />
          <Route exact path="/products" component={ProductsPage} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;