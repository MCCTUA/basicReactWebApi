import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

const routes = (
    < Routes >

        {/* Frontend */}
        <Route exact={true} path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}

        {/* Backend */}
        {/* <Route path="/" element={<Dashboard />} /> */}
    </ Routes >
)

export default routes