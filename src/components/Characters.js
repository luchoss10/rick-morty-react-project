export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1>Characters</h1>
            <span className="back-home" onClick={resetCharacters}>Go back Home </span>
            <div className="container-characters">
                {
                characters.map((character, index) => (
                    <div key={index} className="character-container">
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h2>{character.name}</h2>
                            <h6>
                                {
                                    character.status === 'Alive' ? (
                                        <>
                                            <span role="img" aria-label="Vivo" className="Alive">🟢 Alive</span>
                                        </>
                                    ) : (
                                        <>
                                            <span role="img" aria-label="Muerto" className="Dead">🔴 Dead</span>
                                        </>
                                    )
                                }
                            </h6>
                            <p> 
                                <span className="text-grey"> Episopdies: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey"> Species: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))
            }
            </div>
            <span className="back-home" onClick={resetCharacters}>Go back Home </span>
        </div>
    );
}