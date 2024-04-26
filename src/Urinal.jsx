import urinal_img from './assets/urinal.png'

function Urinal(props)
{
    return(
    <div>
        <img className="img" src = "" alt="l"></img>
        <h2>N°{props.id}</h2>
        <button onClick={() => {props.handleOnClick(props.id)}}>Select</button>
    </div>
    );
}
export default Urinal