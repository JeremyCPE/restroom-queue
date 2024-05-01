import urinal_img from './assets/urinal.png'
import Character from './Character'

function Urinal(props)
{
    const answer = false;
    // props.selected == props.list.id ? "Clicked !" : "Click";
    return(
    <>
    <div>
        <img className="img" src = {urinal_img} alt="urinal"></img>
        <h2>N°{props.list.id}</h2>
        {props.list.charact.map((_,index) => (
            <Character key={index} id={index} />
        ))}
        <button onClick={() => {props.handleOnClick(props.list.id)}}>Add !</button>
    </div>
    </>
    );
}
export default Urinal