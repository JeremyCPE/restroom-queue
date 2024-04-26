import Urinal from "./Urinal";

function Urinals()
{
    return(
        <>
        <h1>List : </h1>
        <ul className="container">
            <li className="child"><Urinal id={1}/></li>
            <li className="child"><Urinal id={2}/></li>
            <li className="child"><Urinal id={3}/></li>
            <li className="child"><Urinal id={4}/></li>
            <li className="child"><Urinal id={5}/></li>
        </ul>
        </>
    );
}
export default Urinals