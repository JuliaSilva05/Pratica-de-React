import { useState, useEffect } from 'react'

const url_albums = "https://taylor-swift-api.sarbo.workers.dev/albums"

function MostrarInfos(){
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    console.log("useEffect")
    // Carregar álbuns
    carregarAlbums()
  }, [])

  async function getAlbums() {
    console.log("getAlbums")
    try {
      const response = await fetch(url_albums);
      print(response)
      console.log(response)
      return [response];
    } catch (err) {
      console.error("Erro ao buscar álbuns:", err);
      return [];
    }
  }
  async function carregarAlbums() {
    console.log("carregarAlbums")
    const albums = await getAlbums();
    setAlbums(albums)
  }

  return (
    <>
      <button onClick={carregarAlbums}>Carregar</button>
      <ol>
        {albums.map((album)=>(
          <li>
            {album.title} ({album.release_date})
          </li>
        ))}
      </ol>
    </>
  )
}

export default MostrarInfos