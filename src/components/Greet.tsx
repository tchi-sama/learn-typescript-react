type GreetProps = {
    name:string,
    lang:string
}

export const Greet = (props:GreetProps) =>{
    return(
        <div>
            <h2>welcome {props.name} to {props.lang}</h2>
        </div>
    )
}