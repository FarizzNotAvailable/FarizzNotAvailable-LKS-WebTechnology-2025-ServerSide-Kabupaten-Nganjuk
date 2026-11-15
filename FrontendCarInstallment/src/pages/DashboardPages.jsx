import { useState } from "react";
import Header from "../components/Header";
import DataValidation from "../components/DataValidation";
import Button from "../components/Button";
import axios from "axios";
import Installment from "../components/InstallmentData";
import { useNavigate } from "react-router-dom";
import Warn from "../components/Warn";

export default function DashboardPages(){

    const [DataVal,setDataVal] = useState()
    const [Instalment,setInstalment] = useState()
    const [Data,setData] = useState()

    const navigateTo = useNavigate()
    
    useState(()=>{

        const url = import.meta.env.VITE_BASE_URL
        axios({
           method:'get',
           url:url+"/application",
           headers:{
              'Authorization':'Bearer '+localStorage.getItem('auth0')
              }
           })
        .then(response=>{
           setInstalment(response.data.body.installment)
        })
        .catch(error=>{
           console.log(error)
        })
        axios({
           method:'get',
           url:url+"/validation",
           headers:{
              'Authorization':'Bearer '+localStorage.getItem('auth0')
              }
           })
        .then(response=>{
           setDataVal(response.data.body.validation)
        })
        .catch(error=>{
           console.log(error)
        })

        
    },[])



    return(
        <>
            <Header title={'Dashboard'} />

                <div className="container">
                    <section className="validation-section mb-5">
                        <div className="section-header mb-3">
                            <h4 className="section-title text-muted">My Data Validation</h4>
                        </div>
                        <div className="row">
                            {
                                DataVal?
                                    <DataValidation status={DataVal.status} job={DataVal.job} income={DataVal.income} validator_notes={DataVal.validator_notes} validator={DataVal.validator}  />
                                :
                                <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h5 className="mb-0">Data Validation</h5>
                                        </div>
                                        <div className="card-body">
                                            <Button text={'+ Request validation'} onclick={()=>{navigateTo('/data-validation')}} additional={'btn-block'}/>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </section>
                    <section className="validation-section mb-5">
                        <div className="section-header mb-3">
                            <div className="row">
                                <div className="col-md-8">
                                    <h4 className="section-title text-muted">My Installment Cars</h4>
                                </div>
                                {
                                    Instalment ?
                                    ""
                                    :
                                    <div className="col-md-4">
                                        <Button text={'+ Add Installment Cars'} onclick={()=>{navigateTo('/car-installment')}} additional={'btn-lg btn-block'}/>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="section-body">
                            <div className="row mb-4">
                                {
                                    DataVal ?
                                    DataVal.status == "accepted"?
                                    <Warn text={'Your validation must be approved by validator to Installment Cars.'}/>
                                    :
                                    ""
                                    :
                                    <Warn text={'Your validation must be approved by validator to Installment Cars.'}/>
                                }

                                {
                                    Instalment?
                                    <Installment car={Instalment.car} description={Instalment.description}  price={Instalment.price} status={Instalment.status} notes={Instalment.notes} month={Instalment.month + " Months"} apply={Instalment.date}/>
                                    :
                                    ""
                                }


                            </div>
                            </div>
                </section>

                </div>
        </>
    )
}