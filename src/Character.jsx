import character_default from './assets/character.png'
function Character(props)
{
    if(props == undefined)
    {
        props.type = character_default;
    }
    return(
    <div>
        <h2> id {props.id} </h2>
        <img className="img" src = {character_default} alt="character"></img>
    </div>
    );
}
export default Character;