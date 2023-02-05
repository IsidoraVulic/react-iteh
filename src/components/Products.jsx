import React from 'react'
import OneProduct from './OneProduct'

function Products({products, onAdd}) {
  //const name = "Naziv proizvoda";
//  const desc = "Ovo je malo duzi opis proizvoda";


  return (
    <div className="all-products">

      {products.map((prod)=>(
        <OneProduct product={prod} key={prod.id} onAdd={onAdd}/>
      ))}

    </div>
  )
}

export default Products