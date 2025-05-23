import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function MostrarAlbums(){
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

  return (
    <>
      <ol>
        {albums.map((album) => (
          <li key={album.album_id}>
            {album.title} ({album.release_date})
            <ul>oi</ul>
          </li>
        ))}
      </ol>
      
    </>
  )
}

export default MostrarAlbums;