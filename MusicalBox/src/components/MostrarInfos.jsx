import { useState, useEffect } from 'react'

const url_albums = "https://taylor-swift-api.sarbo.workers.dev/albums"

function MostrarInfos(){
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    // Carregar álbuns
    carregarAlbums()
  }, [])

  async function getAlbums() {
    try {
      const response = await axios.get(url_albums);
      return response.data.results || [];
    } catch (err) {
      console.error("Erro ao buscar álbuns:", err);
      return [];
    }
  }
  async function carregarAlbums(params) {
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