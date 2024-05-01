import React, {useState} from 'react';
import GameControl from './GameControl';
import Urinals from './Urinals';
import Queue from './Queue';
import Validate from './Validate';

function Gameboard() {

  const listCharact = [0,1,2,3,4]
  const list = [{id: 0, charact:[]},
  { id: 1, charact:[]},
  { id: 2, charact:[]},
  { id: 3, charact:[]},
  { id: 4, charact:[]}];

  const[dictionnary, setListCharact]=useState(list);
  const[characts, setList]=useState(listCharact);

  const onChangeUpdate = (value) => {
    console.log("> value :" + value);
    console.log("> listCharact :" + listCharact);
    let temp = listCharact[value];
    let temp2 = list;
    temp2.map(item => {
      if (item.id == value) {
        item.charact.push(temp);
        listCharact.pop();
        console.log("> item" + item);
      }
    });
    console.log("> list :" + temp2);
    setListCharact(temp2);
    setList(listCharact);
}
  return(
    <>
    <GameControl></GameControl>
    <Urinals list={dictionnary} handleOnChange = {onChangeUpdate}></Urinals>
    <Queue listCharact={characts} />
    <Validate></Validate>
    </>
    )
}
export default Gameboard;