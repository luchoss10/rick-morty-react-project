import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const requestApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <hi className="App-title">Rick & Morty</hi>
        {
          characters ?(
            <Characters characters={characters} setCharacters={setCharacters}/>
          ):(
            <>
              <img src={imageRickMorty} alt="Rick & Morty" className='img-home'/>
              <button onClick={requestApi} className="btn-search">Ver personajes</button>
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
