import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../All-Couse/Blogs/Blogs";
import Course from "../../All-Couse/Course/Course";
import Home from "../../All-Couse/Home/Home";
import Login from "../../Athentiction/Login/Login";
import SingUp from "../../Athentiction/Sing-Up/SingUp";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/ ',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            }
        ]

    }
]) 