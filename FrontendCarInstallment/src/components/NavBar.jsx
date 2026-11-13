import { useNavigate } from "react-router-dom"

export default function NavBar({auth}){

    const navigateTo = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('auth0')
        localStorage.removeItem('authName')
        navigateTo('/')
    }

    return(
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div className="container">
                    <a className="navbar-brand text-white">Installment Cars</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        auth ? 
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white">{auth}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" onClick={()=>{handleLogout()}} >Logout</a>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white">Login</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>

        </>
    )
}