export default function Header({title}){
    return(
        <header className="jumbotron">
            <div className="container">
                <h1 className="display-4">{title}</h1>
            </div>
        </header>
    )
}