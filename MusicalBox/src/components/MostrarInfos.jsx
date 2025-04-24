import { useState, useEffect } from 'react'

//const url_musica = "https://musicbrainz.org/ws/2/artist?query=gender:female%20AND%20type:person%20AND%20country:br&fmt=json&limit=5"
const token = "https://accounts.spotify.com/api/token"

function MostrarInfos(){
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body:JSON.stringify(body)
    });
    return await res.json();
  }
  async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
  }
  
  const topTracks = getTopTracks();
  console.log(
    topTracks?.map(
      ({name, artists}) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );
  //const [artistas, setArtista] = useState([]);
  

/*

  useEffect(() => {
    fetch("https://musicbrainz.org/ws/2/artist?query=gender:female%20AND%20type:person%20AND%20country:br&fmt=json&limit=5")
    .then(response => response.json())
    .then(data => setArtista(data.results))
  },[])

  async function carregar(url){
    try {
      const response = await fetch(url);
      if (response.ok){
        console.log("resp ok");
        const data = await response.json();
        console.log("length1:",Object.length);
        console.log("length2",data.length);
        console.log("name:",Object.name);
        console.log(Object.keys(data));
        console.log("data:",data);

        console.log("length1:",Object.length);
        console.log("length2",data.length);
        console.log("name:",Object.name);
        console.log(Object.keys(data));
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


  const itens = artistas.map((artista) => {
    return (
          {artista,artistas}
    )
  });
  */


  return (
    <>
      <button onClick={handleBtCarregarClick}>Carregar</button>
      <ol>
        oi
      </ol>
    </>
  )

}

export default MostrarInfos