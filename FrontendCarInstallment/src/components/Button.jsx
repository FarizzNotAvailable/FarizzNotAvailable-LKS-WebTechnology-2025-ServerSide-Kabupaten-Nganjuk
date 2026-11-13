export default function Button({text, onclick}){
    return(<div class="btn btn-primary" onClick={onclick}>{text}</div>)
}