import character_default from './assets/character.png'
function Character(props)
{
    if(props == undefined)
    {
        props.type = character_default;
    }
    return(
    <div>
        <img className="img" src = {character_default} alt="character"></img>
    </div>
    );
}
export default Character;