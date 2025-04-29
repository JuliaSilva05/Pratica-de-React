import { useState, useEffect } from 'react'

const token = "https://taylor-swift-api.sarbo.workers.dev/albums"

function MostrarInfos(){


  function handleBtCarregarClick() {
    console.log("oioioi")
    carregar(url_musica);
  }
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