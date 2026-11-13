export default function TextArea({placeholder, onchange}){
    return(<textarea class="form-control" cols="30" rows="6" placeholder={placeholder} onChange={onchange}></textarea>)
}