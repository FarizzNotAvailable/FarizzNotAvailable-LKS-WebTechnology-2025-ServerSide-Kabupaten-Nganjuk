import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DataValidationPages(){

    const [Job,setJob] = useState()
    const [Income,setIncome] = useState()
    const [Reason,setReason] = useState()
    const [Description,setDescription] = useState()
    const url = import.meta.env.VITE_BASE_URL


    const navigateTo = useNavigate()

    const handleSubmit = ()=>{
        axios({
           method:'post',
           url:url+"/validation",
           headers:{
              'Authorization':'Bearer '+localStorage.getItem('auth0')
              },
           data:{
              'job':Job,
                'job_description':Description,
                'income':Income,
                'reason_accepted':Reason
              }
           })
        .then(response=>{
           console.log(response.data)
           alert("Data has been sent")
            navigateTo('/dashboard')
        })
        .catch(error=>{
            if(error.response.status == 422){
                alert(error.response.data.message)
            }else{
                alert("Error Unknown")
            }
        })
    }


    return(
        <>
            <main>
                <Header title={"Request Data Validation"}/>

                <div className="container">
                    <form action="">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="d-flex align-items-center mb-3">
                                        <label className="mr-3 mb-0">Are you working?</label>
                                        <select className="form-control-sm">
                                            <option value="yes">Yes, I have</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <Input placeholder={"Your Job"} onchange={(e)=>{setJob(e.target.value)}}/>
                                    <TextArea placeholder={"describe what you do in your job"} onchange={(e)=>{setDescription(e.target.value)}}/>
                                    <Input placeholder={"Income (Rp)"} onchange={(e)=>{setIncome(e.target.value)}}/>
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="d-flex align-items-center mb-3">
                                        <label className="mr-3 mb-0">Reason Accepted</label>
                                    </div>
                                    <TextArea placeholder={"Explain why you should be accepted"} onchange={(e)=>{setReason(e.target.value)}}/>
                                </div>
                            </div>
                        </div>

                        <Button text={'Send Request'} onclick={()=>{handleSubmit()}}/>
                    </form>

                </div>

            </main>       
        </>
    )
}