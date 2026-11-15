export default function Button({text, onclick, additional}){
    return(<div class={`btn btn-primary ${additional}`} onClick={onclick}>{text}</div>)
}