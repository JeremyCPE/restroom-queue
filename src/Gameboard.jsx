import React, {useState} from 'react';
import GameControl from './GameControl';
import Urinals from './Urinals';
import Queue from './Queue';
import Validate from './Validate';

function Gameboard() {

  const listCharacts = [{id: 0, type : "normal"},{id: 1, type : "normal"},
                        {id: 2, type : "normal"},{id: 3, type : "normal"},
                        {id: 4, type : "normal"},{id: 5, type : "normal"}];

  const listUrinals = [{id: 0, charact:[]},
  { id: 1, charact:[]},
  { id: 2, charact:[]},
  { id: 3, charact:[]},
  { id: 4, charact:[]}];

  const[urinals, setListCharact]=useState(listUrinals);
  const[characts, setList]=useState(listCharacts);


  // To improve
  const onChangeUpdate = c => {
    let temp2 = listUrinals;
    listUrinals.map(item => {
      if (item.id == c) {
        console.log(item);
        item.charact.push(listCharacts[0]);
        listCharacts.shift();
        console.log(listCharacts);
      }
    });
    setListCharact(t => temp2);
    setList(l => listCharacts);
  }

const onResetClick = c => {
 // TODO : Implement
}
  return(
    <>
    <GameControl></GameControl>
    <Urinals list={urinals} handleOnChange = {onChangeUpdate} handleOnReset = {onResetClick}></Urinals>
    <Queue listCharact={characts} />
    <Validate></Validate>
    </>
    )
}
export default Gameboard;