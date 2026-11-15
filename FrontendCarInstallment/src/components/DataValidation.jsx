export default function DataValidation({status, job, income, validator, validator_notes}){
    return(
        <>
            <div className="col-md-4">
                            <div className="card card-default">
                                <div className="card-header border-0">
                                    <h5 className="mb-0">Data Validation</h5>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-striped mb-0">
                                        <tr>
                                            <th>Status</th>
                                            <td>
                                                <span className={`badge ${status == 'accepted'?
                                                            'badge-success'
                                                            :
                                                            status == 'pending'?
                                                            'badge-info'
                                                            :
                                                            'badge-danger'
                                                            }`}>
                                                    {status}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Job</th>
                                            <td className="text-muted">{job}</td>
                                        </tr>
                                        <tr>
                                            <th>Income/Month</th>
                                            <td className="text-muted">{income}</td>
                                        </tr>
                                        <tr>
                                            <th>Validator</th>
                                            <td className="text-muted">
                                                {
                                                validator ?
                                                validator.name :
                                                "No Validator yet"
                                            }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Validator Notes</th>
                                            <td className="text-muted">{
                                                validator_notes ?
                                                validator_notes :
                                                "No Notes"
                                            }</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
        </>
    )
}