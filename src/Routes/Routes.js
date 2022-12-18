import React from "react";
import { BrowserRouter , Routes as ComponentRoutes ,Route} from "react-router-dom";
import  {SignIn}  from "../Pages/SignIn/SignIn";
import {SignUp} from "../Pages/SignUp/SignUp";
function Routes(params) {
    return <BrowserRouter>
        <ComponentRoutes>
            <Route path="/"element={<SignUp/>}/>
            <Route path="/signup"element={<SignUp/>}/>
            <Route path="/signin"element={<SignIn/>}/>

            
        </ComponentRoutes>
    </BrowserRouter>
}
export {Routes}