import React, {memo} from 'react'
import Item from './Item'

const ItemList = memo(
  
 

  ({items}) => {
  return (
    <>
    {items.map((producto) =>{
        return(
          <Item producto={producto} key={producto.id} />
        )
      })

      }
    </>
  )
},(a,b)=> a.items === b.items);


export default ItemList