import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../../context/CardContext'


const CardtWidget = () => {

  const {totalUnidades} = useContext(CardContext);

  return (
    <>
      <span className="material-symbols-outlined shoppingCard">shopping_cart_checkout</span>
      <span className='numericMargin'>{totalUnidades() !== 0 && totalUnidades() }</span>
    </>
    
  )
}

export default CardtWidget