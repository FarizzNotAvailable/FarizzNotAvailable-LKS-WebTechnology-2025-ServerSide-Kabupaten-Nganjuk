export default function Input({placeholder, onchange}){
    return(<input type="text" placeholder={placeholder} onChange={onchange} class="form-control mt-2 mb-2"/>)
}