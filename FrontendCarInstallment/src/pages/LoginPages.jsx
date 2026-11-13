import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

export default function LoginPages(){

    const url = import.meta.env.VITE_BASE_URL

    const [IdCard, setIdCard] = useState()
    const [Password, setPassword] = useState()

    const navigateTo = useNavigate()

    const handleSubmit = ()=>{
        axios({
           method:'post',
           url:url+"/auth/login",
           data:{
              'id_card_number':IdCard,
              'password':Password
              }
           })
        .then(response=>{
           localStorage.setItem('auth0',response.data.body.token)
           localStorage.setItem('authName',response.data.body.name)
           alert('Login Success')
           navigateTo('/dashboard')
        })
        .catch(error=>{
           if(error.response.status == 401){

            alert(error.response.data.body.message)
           }
        })
    }


    return(
        <>
            <Header title={"Installment Cars"}/>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="card card-default">
                            <div className="card-header">
                                <h4 className="mb-0">Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">ID Card Number</div>
                                    <div className="col-8"><input type="text" className="form-control" onChange={(e)=>{setIdCard(e.target.value)}}/></div>
                                </div>
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">Password</div>
                                    <div className="col-8"><input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                                </div>
                                <div className="form-group row align-items-center mt-4">
                                    <div className="col-4"></div>
                                    <div className="col-4 btn btn-primary" onClick={()=>{handleSubmit()}}>Login</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}