export default function Sellect({data, onchange}){
    return(
        <>
            <select name="months" className="form-control" onChange={onchange}>
                {
                    data.map((da)=>(
                        <option value={da.month+" "+da.nominal} key={da.id}>{da.month}</option>
                    ))
                }
            </select>
        </>
    )
}