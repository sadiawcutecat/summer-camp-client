
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home";
import Error from "../Component/Pages/Error";
import Login from "../Component/Pages/Login/Login";
import Signup from "../Component/Shared/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
        ]
    },
]);

