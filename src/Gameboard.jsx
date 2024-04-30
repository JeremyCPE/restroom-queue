import React from 'react'
import GameControl from './GameControl';
import Urinals from './Urinals';
import Queue from './Queue';
import Validate from './Validate';

function Gameboard() {
  const listCharact = [
    { id: 0, charact:[0,1,2]},
    { id: 1, charact:[3]},
    { id: 2, charact:[]},
    { id: 3, charact:[]},
    { id: 4, charact:[4]},
  ];
  return(
    <>
    <GameControl></GameControl>
    <Urinals list={listCharact}></Urinals>
    <Queue nb={5} />
    <Validate></Validate>
    </>
    )
}
export default Gameboard;