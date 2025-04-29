import { useState, useEffect } from 'react'

const url_albums = "https://taylor-swift-api.sarbo.workers.dev/albums"

function MostrarInfos(){
  const [albums, setAlbums] = useState([])
    useEffect(() => {
      fetch('https://taylor-swift-api.sarbo.workers.dev/albums')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setAlbums(data);
        });
    }, []);

  /*
  useEffect(() => {
    console.log("useEffect")
    // Carregar álbuns
    carregarAlbums()
  }, [])

  async function getAlbums() {
    console.log("getAlbums")
    try {
      const response = await fetch(url_albums);
      console.log("response:")
      console.log(response)
      return [response];
    } catch (err) {
      console.error("Erro ao buscar álbuns:", err);
      return [];
    }
  }
  async function carregarAlbums() {
    console.log("carregarAlbums")
    const albums = await getAlbums().then;
    setAlbums(albums)
  }
*/

  return (
    <>
      <div>
        {albums.map((album) => (
          <li key={album.album_id}>
            {album.title} ({album.release_date})
          </li>
        ))}
      </div>
    {/*
      <button onClick={carregarAlbums}>Carregar</button>
      <ol>
        {albums.map((album)=>(
          <li key={album.album_id}>
            {album.title} ({album.release_date})
          </li>
        ))}
      </ol>
      */}
    </>
  )
}

export default MostrarInfos;