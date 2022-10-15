import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='MainContainer'>
        <span className='TextListContainer'>
            {greeting}
        </span>
    </div>
  )
}

export default ItemListContainer