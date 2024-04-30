import urinal_img from './assets/urinal.png'
import Character from './Character'

function Urinal(props)
{
    const answer = props.selected == props.list.id ? "Clicked !" : "Click";
    return(
    <>
    <div>
        <img className="img" src = "" alt="urinql"></img>
        <h2>N°{props.list.id}</h2>
        <button disabled={answer=="Clicked !"} onClick={() => {props.handleOnClick(props.id)}}>{answer}</button>
    </div>
    <div>
        {props.list.charact.map((_,index) => (
            <Character key={index} id={index} />
        ))}
    </div>
    </>
    );
}
export default Urinal