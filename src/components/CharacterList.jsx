import {useEffect, useState} from "react";
import {Character, NavPage} from "./index.jsx";

const CharacterList = () => {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setLoading(false)
            setCharacter(data.results);
        }

        fetchData();
    }, [page])

    if(loading){
        return (
            <div>Loading</div>
        )
    }

    return(
        <div className='container'>
            <NavPage page={page} setPage={setPage}/>
            {
                loading ? ( <h1>loading...</h1> ) :
                    (  <div className='row'>
                        {
                            characters.map(character => {
                                return(
                                    <div className='col-md-4' key={character.id}>
                                        <Character  character={character}/>
                                    </div>
                                )
                            })
                        }
                    </div> )
            }
            <NavPage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterList;