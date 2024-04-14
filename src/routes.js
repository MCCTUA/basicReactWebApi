import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

const MyRoutes = () => {
    return (
        < Routes >

            {/* Frontend */}
            <Route exact={true} path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />

            {/* Backend */}
            {/* <Route path="/" element={<Dashboard />} /> */}

            <Route path='*' element={<PageNotFound />} />
        </ Routes >
    )
}

export default MyRoutes