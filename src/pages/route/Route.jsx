import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Contact from "../contact/Contact";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../home/Home";
import Login from "../login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router