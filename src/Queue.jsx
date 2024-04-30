import Character from "./Character";
import './Queue.css';
function Queue(props) {
    const characters = new Array(props.nb).fill(null);

    return (
        <>
        <h1>Nb character {props.nb}</h1>
            {characters.map((_, index) => (
                <Character key={index} id={index} />
            ))}
        </>
    );
}

export default Queue;