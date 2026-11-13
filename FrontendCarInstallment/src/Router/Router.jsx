import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path:'/',
        element:'sdfl'
    },
    {
        path:'*',
        element:'404 Not Found'
    }
])

export default Router