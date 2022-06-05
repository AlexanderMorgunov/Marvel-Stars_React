import './characters-list.css'
import CharactersListItem from '../characters-list-item/characters-list-item';

const CharactersList = ({data}) =>{

    const elements = data.map(item=>{

        let {id, ...itemProps} = item;

        return (
            <CharactersListItem key={id}{...itemProps}/>
        )
        
    })

    return (
<div className="container">
<h1 className = ' pt-3 pb-3'>Персонажи Marvel</h1>
<div className="row">
{elements}
</div>
</div>
    )
}

export default CharactersList;