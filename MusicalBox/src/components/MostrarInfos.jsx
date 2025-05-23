import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function MostrarAlbums(){
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])

    useEffect(() => {
      fetch('https://taylor-swift-api.sarbo.workers.dev/albums')
        .then((res) => {
          return res.json();
        })
        .then((albums_data) => {
          console.log(albums_data);
          setAlbums(albums_data);
        });
      

    }, []);
  async function concatenar(){

  }

  return (
    <>
      <ol>
        {albums.map((album) => (
          <li key={album.album_id}>
            {album.title} ({album.release_date}) {album.album_id}
            <ul>{album.album_id}</ul>
          </li>
        ))}
      </ol>
      
    </>
  )
}

export default MostrarAlbums;