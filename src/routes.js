import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Dashboard from "./pages/backend/Dashboard";

const MyRoutes = () => {
    return (
        < Routes >

            {/* Frontend */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />

            {/* Backend */}
            <Route path="/backend/dashboard" element={<Dashboard />} />

            <Route path='*' element={<PageNotFound />} />
        </ Routes >
    )
}

export default MyRoutes