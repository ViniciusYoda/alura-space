import React from 'react'
import fotos from '../Galeria/fotos.json'
import styles from "./Tags.module.scss";

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
         {tags.map((tag) => {
          return (
            <li 
              key={tag} 
              onClick={() => filtrarFotos(tag)}>{tag}
            </li>
          );
         })}
         <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  )
}
