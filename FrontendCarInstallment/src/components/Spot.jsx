export default function Spot({isApply, car, description, months, navigate}){
    return(
        <>
        <article className={`spot ${isApply ?'unavailable':''} `}>
            <div className="row">
                    <div className="col-5">
                    <h5 className="text-primary">{car}</h5>
                    <span className="text-muted">{description}</span>
            </div>
            <div className="col-4">
                    <h5>Available Month</h5>
                    <span className="text-muted">

                    {
                        months.map((mon, index, ma)=>(
                            ma.length - 1 == index?
                            mon.month + "Months"
                            :
                            mon.month + "Months, "
                        ))
                    }                    
                    </span>
                </div>
                {
                    
                    isApply == 2 ?
                    <div className="col-3">
                        <div className="bg-success text-white p-2">
                            Vacancies have been submitted
                        </div>
                    </div>
                    :
                    isApply?
                        <div className="col-3">
                            <div className="btn btn-danger btn-lg btn-block">
                                Detail
                            </div>
                        </div>
                    :
                        <div className="col-3" onClick={navigate}>
                            <button className="btn btn-danger btn-lg btn-block">
                                Detail
                            </button>   
                        </div>
                }
            </div>
        </article>
    </>
    )
}