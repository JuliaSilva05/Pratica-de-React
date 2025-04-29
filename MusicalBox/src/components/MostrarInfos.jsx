import { useState, useEffect } from 'react'

//const url_albums = "https://taylor-swift-api.sarbo.workers.dev/albums"

function MostrarInfos(){
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    // Carregar álbuns
    fetch('https://taylor-swift-api.sarbo.workers.dev/albums')
      .then(response => response.json())
      .then(data => setAlbums(data.results))

  }, [])


  return (
    <>
      {/*<button onClick={handleBtCarregarClick}>Carregar</button>*/}
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