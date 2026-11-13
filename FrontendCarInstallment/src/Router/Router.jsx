import { createBrowserRouter } from "react-router-dom";
import TemplateUi from "../components/TemplateUi";
import LoginPages from "../pages/LoginPages";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<TemplateUi/>,
        children:[
            {
                path:'/',
                element: <LoginPages/>,
            },
            {
                path:'/dashboard',
                element: "sdfsaf",
            },
        ]
    },
    {
        path:'*',
        element:'404 Not Found'
    }
])

export default Router