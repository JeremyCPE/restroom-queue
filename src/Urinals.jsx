import Urinal from "./Urinal";
import React, {useState} from 'react';


function Urinals()
{
    const[selected, setSelected]=useState();

    const onClickUpdate = (value) =>{
        console.log("clickUpdated called!")
        setSelected(value);
    }

    return(
        <>
        <h1>List : {selected}</h1>
        <ul className="container">
            <li className="child"><Urinal id={1} handleOnClick = {onClickUpdate}/></li>
            <li className="child"><Urinal id={2} handleOnClick = {onClickUpdate}/></li>
            <li className="child"><Urinal id={3} handleOnClick = {onClickUpdate}/></li>
            <li className="child"><Urinal id={4} handleOnClick = {onClickUpdate}/></li>
            <li className="child"><Urinal id={5} handleOnClick = {onClickUpdate}/></li>
        </ul>
        </>
    );
}
export default Urinals