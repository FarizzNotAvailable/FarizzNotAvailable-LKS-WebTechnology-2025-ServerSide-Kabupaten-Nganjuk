export default function Installment({car, description, price, apply, notes, month, status}){
    return(
        <>
            <div className="col-md-6">
                <div className="card card-default">
                    <div className="card-header border-0">
                        <h5 className="mb-0">{car}</h5>
                    </div>
                <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                        <tr>
                            <th>Description</th>
                            <td className="text-muted">{description}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td className="text-muted">Rp. {price}</td>
                        </tr>
                                                    <tr>
                                                        <th>Installment</th>
                                                        <td className="text-muted">
                                                            {month} <span className={`badge ${status == 'accepted'?
                                                            'badge-success'
                                                            :
                                                            status == 'pending'?
                                                            'badge-info'
                                                            :
                                                            'badge-danger'
                                                            }`}>{status}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Apply Date</th>
                                                        <td className="text-muted">{apply}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Notes</th>
                                                        <td className="text-muted">{notes? notes:"no notes"}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
        </>
    )
}