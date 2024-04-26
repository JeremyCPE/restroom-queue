import React from 'react'
import GameControl from './GameControl';
import Urinals from './Urinals';
import Queue from './Queue';

function Gameboard() {
  return (
    <>
    <GameControl></GameControl>
    <Urinals></Urinals>
    <Queue></Queue>
    </>
    )
}
export default Gameboard;