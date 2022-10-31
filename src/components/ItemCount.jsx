import React, { useState } from 'react'

const ItemCount = (props) => {

    const {stock,initial,onAdd} = props;

   const [count,setCount] = useState(initial);


   const addCount = () =>{
        setCount(count +1)
   }
   const restCount = () =>{
        setCount(count -1);
   }
   const reset  = () => {
    setCount(initial)
   }

  return (
    <div>
        <div className='btndetailContainer'>
           
            <button className="btn btn-light" onClick={addCount} disabled={count === stock}>+</button>
            <div>
            <p className='contadorrText'>{count}</p>
            </div>
            <button className="btn btn-light"  onClick={restCount} disabled={count === initial}>-</button>
            <div className='IconCleanContainer'>
                <span className="material-symbols-outlined" onClick={reset}>cleaning_services</span>
            </div>
            
        </div>
        <div>
            <button className="btn btn-dark" type="submit" onClick={() => onAdd(count)}>Agregar al carrito</button> 
        </div>
         
    </div>
  )
}

export default ItemCount