import Urinal from "./Urinal";
import React, {useState} from 'react';


function Urinals(props)
{
    const[selected, setSelected]=useState();

    const onClickUpdate = (value) =>{
        setSelected(value);
        props.handleOnChange(value);
    }
    return(
        <>
        <h1>Last click : {selected}</h1>
        <ul className="container">
            <li className="child"><Urinal list={props.list[0]} handleOnClick = {onClickUpdate} selected={selected}/></li>
            <li className="child"><Urinal list={props.list[1]} handleOnClick = {onClickUpdate} selected={selected}/></li>
            <li className="child"><Urinal list={props.list[2]} handleOnClick = {onClickUpdate} selected={selected}/></li>
            <li className="child"><Urinal list={props.list[3]} handleOnClick = {onClickUpdate} selected={selected}/></li>
            <li className="child"><Urinal list={props.list[4]} handleOnClick = {onClickUpdate} selected={selected}/></li>
        </ul>
        </>
    );
}
export default Urinals