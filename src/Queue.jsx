import Character from "./Character";
import './Queue.css';
function Queue(props) {

    console.log("> props : " + props.listCharact);
    return (
        <>
        <h1>Nb character {props.listCharact.length}</h1>
            {props.listCharact.map((_, index) => (
                <Character key={index}/>
            ))}
        </>
    );
}

export default Queue;