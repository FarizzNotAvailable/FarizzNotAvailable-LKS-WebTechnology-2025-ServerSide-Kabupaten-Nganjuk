import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function TemplateUi(){

    const {pathname} = useLocation()

    const navigateTo = useNavigate()

    useEffect((()=>{
       const token = localStorage.getItem('auth0')
       if(token && pathname == "/"){
            navigateTo('/dashboard')
        }else if(!token && pathname != "/"){
            navigateTo('/')
        }
       }),[])

    return(
        <>
            <NavBar auth={localStorage.getItem('authName')}/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </>
    )
}