import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Sellect from "../components/Sellect";

export default function CarInstallmentDetailPages(){

    const {id} = useParams()
	const url = import.meta.env.VITE_BASE_URL

    const navigateTo = useNavigate()

    const [Data,setData] = useState()
    const [Nominal,setNominal] = useState()

    useEffect(()=>{
        axios({
           method:'get',
           url:url+"/installment_cars/"+id,
           headers:{
              'Authorization':'Bearer '+localStorage.getItem('auth0')
              }
           })
        .then(response=>{
           setData(response.data.body.installment)
           setNominal(response.data.body.installment.available_month[0].nominal/response.data.body.installment.available_month[0].month)
        })
        .catch(error=>{
           console.log(error)
        })
    },[])

    const handleNominal = (e)=>{
        const [a, b] = e.split(" ").map(Number)
        
        setNominal(b/a)

        setMonth(a)
    }

    const [Month,setMonth] = useState()
    const [Notes,setNotes] = useState()

    const handleSubmit = ()=>{

        console.log(Month)
        console.log(Notes)

        axios({
           method:'post',
           url:url+"/applications",
           headers:{
              'Authorization':'Bearer '+localStorage.getItem('auth0')
              },
           data:{
              'installment_id':id,
              'month':Month,
              'notes':Notes 
              }
           })
        .then(response=>{
           console.log(response)

           alert(response.data.body.message);

           navigateTo('/dashboard')
        })
        .catch(error=>{
            console.log(error)
           if(error.response.status == 401){
            
            alert(error.response.data.body.message);
            
           }
        })
    }

    return(
        <>
        {
            Data ?
            <>

            <Header title={
                <div className="container text-center">
                    <div>
                        <h1 className="display-4">{Data.car}</h1>
                        <span className="text-muted">Brand : {Data.brand}</span>
                    </div>
                </div>
            } />
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <h3>Description</h3>
                            {Data.description}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <h3>Price : <span className="badge badge-primary">Rp. {Data.price}</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="form-group">
                            <h3>Select Months</h3>
                            <Sellect data={Data.available_month} onchange={(e)=>{handleNominal(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <h3>Nominal/Month : <span className="badge badge-primary">Rp. {Nominal}</span></h3>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="d-flex align-items-center mb-3">
                                <label className="mr-3 mb-0">Notes</label>
                            </div>
                            <TextArea placeholder={"Explain why your installment should be approved"} onchange={(e)=>{setNotes(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="d-flex align-items-center mb-3">
                                <Button text={'Apply'} onclick={()=>{handleSubmit()}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
            :

            ""
        }
    </>
    )
}