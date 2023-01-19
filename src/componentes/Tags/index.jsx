import React from 'react'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div>
      <p>Filtre por tags:</p>
      <ul>
         {tags.map((tag) => {
          return <li key={tag} onClick={filtrarFotos(tag)}>{tag}</li>
         })}
         <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  )
}
