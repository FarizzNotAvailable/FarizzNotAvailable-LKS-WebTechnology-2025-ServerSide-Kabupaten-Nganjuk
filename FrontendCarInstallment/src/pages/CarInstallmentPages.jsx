import { useEffect, useState } from "react";
import Header from "../components/Header";
import Spot from "../components/Spot";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CarInstallmentPages(){
    const url = import.meta.env.VITE_BASE_URL

    const [Data,setData] = useState()

    const navigateTo = useNavigate()

    useEffect(()=>{
        axios({
           method:'get',
           url:url+"/installment_cars",
           headers:{
              'Authorization':'Bearer '+localStorage.getItem('auth0')
              }
           })
        .then(response=>{
           setData(response.data.body.cars)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])

    return(
        <>

            <Header title={"Cars"} />
            <div className="container mb-5">

                    <div className="section-header mb-4">
                        <h4 className="section-title text-muted font-weight-normal">List of Cars</h4>
                    </div>

                    <div className="section-body">
                        {
                            Data?
                            Data.map((data)=>(
                                <Spot isApply={data.is_apply} car={data.car} description={data.description}  months={data.available_month} key={data.id} navigate={()=>{navigateTo(''+data.id)}}/>
                            ))
                            :
                            <>
                            </>
                        }
                    </div>

                </div>
        </>
    )
}