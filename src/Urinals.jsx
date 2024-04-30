import Urinal from "./Urinal";
import React, {useState} from 'react';


function Urinals(props)
{
    const[selected, setSelected]=useState(0);

    const onClickUpdate = (value) =>{
        setSelected(value);
    }
    console.log(props.list);
    console.log(props.list[0]);
    return(
        <>
        <h1>List : {selected}</h1>
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