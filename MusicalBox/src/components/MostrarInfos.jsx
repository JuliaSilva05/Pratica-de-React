import { useState, useEffect } from 'react'

const url_musica = "https://musicbrainz.org/ws/2/artist/?query=gender:female%20AND%20type:person%20AND%20area:brazil&fmt=json"

function MostrarInfos(){
  const [artistas, setArtista] = useState([]);

  async function carregar(url){
    try {
      const response = await fetch(url);
      if (response.ok){
        const data = await response.json();
        setArtista(data.results);
      }else {
        console.log("response status", response.status);
        console.log("response status text", response.statusText);
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }

  function handleBtCarregarClick() {
    carregar(url_musica);
  }

  return (
    <>
      <button onClick={handleBtCarregarClick}>Carregar</button>
      <ol>
        {artistas.map((artista) => (
          <li key={artista.index}>
            {artista.name} ({artista.begin-area})
          </li>
        ))}
      </ol>
    </>
  )

}

export default MostrarInfos