import { useState, useEffect } from 'react'

const url_musica = "https://musicbrainz.org/ws/2/artist?query=gender:female%20AND%20type:person%20AND%20country:br&fmt=json&limit=5"

function MostrarInfos(){
  const [artistas, setArtista] = useState([{name: ['']}]);

  if (artistas.name == undefined){
    console.log("undefined");
  } else {
    console.log("deboas");
  }
/*
  useEffect(() => {
    fetch("https://musicbrainz.org/ws/2/artist?query=gender:female%20AND%20type:person%20AND%20country:br&fmt=json&limit=5")
    .then(response => response.json())
    .then(data => setArtista(data.results))
  },[])

*/
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
    console.log("oioioi")
    carregar(url_musica);
  }


  return (
    <>
      <button onClick={handleBtCarregarClick}>Carregar</button>
      <ol>
        {artistas.name.map((artista) => (
          <li key={artista.id}>
            {artista.name}
          </li>
        ))}
      </ol>
    </>
  )

}

export default MostrarInfos