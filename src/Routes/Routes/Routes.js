import { createBrowserRouter } from "react-router-dom";
import Course from "../../All-Couse/Course/Course";
import Home from "../../All-Couse/Home/Home";
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
            }
        ]

    }
]) 