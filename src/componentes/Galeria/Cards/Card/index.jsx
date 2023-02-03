import React from 'react';
import favorito from './favorito.png'
import open from './open.png'

export default function Card({fotos, styles}) {
  return (
   <li 
      key={fotos.id} 
      className={styles.galeria__card}
   >
      <img
         className={styles.galeria__imagem}
         src={fotos.imagem}
         alt={fotos.titulo}
      />
      <p className={styles.galeria__descricao}>{fotos.titulo}</p>
      <div>
         <p>{fotos.creditos}</p>
         <span>
            <img 
               src={favorito} 
               alt="ícone coração de curtir" 
            />
            <img 
               src={open} 
               alt="ícone de abrir modal" 
            />
         </span>
      </div>
   </li>
  )
}
