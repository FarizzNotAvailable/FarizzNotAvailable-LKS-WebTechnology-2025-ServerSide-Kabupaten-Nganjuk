import { createBrowserRouter } from "react-router-dom";
import TemplateUi from "../components/TemplateUi";
import LoginPages from "../pages/LoginPages";
import DataValidationPages from "../pages/DataValidationPages";
import CarInstallmentPages from "../pages/CarInstallmentPages";

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
            {
                path:'/data-validation',
                element:<DataValidationPages/>
            },
            {
                path:'/car-installment',
                element:<CarInstallmentPages/>
            }
        ]
    },
    {
        path:'*',
        element:'404 Not Found'
    }
])

export default Router