import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../../context/CardContext'

const Cart = () => {
const { cart, deleteAll, deleteOne,totalPrecio } = useContext(CardContext);

if(cart.length === 0){
  
  return(
   
      <div className='MainContainer directionContainer'>
        <div className='MarginButtoncart'>
          <span className='textCart'>No tienes productos agregados, agrega productos y vuelve para finalizar tu compra</span>
        </div>
        <div>
          <Link to='/' className="btn btn-dark">Home</Link>
        </div>
      </div>
 
    
  ) 
}
  
  return (
    <>

    {
      cart.map((prop) =>(

        

        <div className='itemCartContainer row'>


      <div className="col-xl-4" >
         
        </div>
        <div className="col-xl-4"  >
        <div key={prop.id} style={{display:"inline-flex"}}>
            <img className='imgCartContainer' src={prop.image} alt={prop.title} />
            <h3 className='inputCountCart'>{prop.cantidad}</h3>
            <div className='divCartInfoContainer'>
              <h3 className='textCart' style={{ marginTop: "15px;" }}>{prop.title}</h3>
              <button className="btn btn-outline-danger"  onClick={()=> deleteOne(prop.id)}>Eliminar</button>
            </div>
          
          </div>
        </div>
        <div className="col-xl-4"  >
         
        </div>


        </div>
      ))
    }

<div className='itemCartContainer row'>


<div className="col-xl-4" >
   
  </div>
  <div className="col-xl-4"  >
    <h2>Total $: {totalPrecio()}</h2>
    <button className="btn btn-dark" style={{marginRight: "10px"}} onClick={deleteAll}>Borrar carrito</button>
    <Link to='/checkout' className="btn btn-secondary">checkout</Link>
  </div>
  <div className="col-xl-4"  >
   
  </div>


  </div>



      
     
    </>
  )
}

export default Cart