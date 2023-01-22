import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes as ComponentRoutes,
} from "react-router-dom";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Panier from "../Pages/Panier/Panier";
import Products from "../Pages/Products/Products";
import { SignIn } from "../Pages/SignIn/SignIn";
import { SignUp } from "../Pages/SignUp/SignUp";
import PrivateRoute from "./Privateroute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
function Routes(props) {
  const [token, setToken] = useState(null);
  const auth = useSelector((state) => state.auth);
  console.log("auth :", auth);
  return (
    <BrowserRouter>
      <ComponentRoutes>
        <Route path="/" element={<PublicRoute component={<SignIn />} />} />
        <Route
          path="/signup"
          element={<PublicRoute component={<SignUp />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute component={<SignIn />} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={<Dashboard token={token} />} />}
        />
        <Route
          path="/product"
          element={<PrivateRoute component={<Products token={token} />} />}
        />
        <Route
          path="/product/add"
          element={<PrivateRoute role={"admin"} component={<AddProduct />} />}
        />
        <Route
          path="/panier"
          element={<PrivateRoute  component={<Panier />} />}
        />
      </ComponentRoutes>
    </BrowserRouter>
  );
}
export { Routes };
