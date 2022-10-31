import React from 'react'
import ItemCount from '../ItemCount'
import { NavLink } from 'react-router-dom'
import { products } from '../ItemList'

const ItemDetail = ({prodcut}) => {
    function add(value){
        console.log(`hola tengo ${value}`)
     }
  return (
    <div className='detailContainer'>
        <div className='detailImg'>
          <img src={prodcut.image} alt="" height={600} />
        </div>
      <div style={{padding:"105px"}}>
        <div>
            <div className=''>
                  
              <NavLink className="nav-link btnPreviewMargin" to={`/category/${prodcut.category}`}>
                <span className="material-symbols-outlined" >keyboard_return</span>
                <span className='nextButtonText' >sigue en la busqueda de guitarras {prodcut.category}</span>
              </NavLink>
             

            </div>
        </div>
        <div>
            <h2>{prodcut.title}</h2>
            <h4 className='priceDetails'>${prodcut.price}</h4>
            <p className='pdescription'>{prodcut.description}</p>
        </div>
        <ItemCount stock={10} initial={0} onAdd={add}/>

         <div className="video-responsive">
            <iframe
              width="500"
              height="300"
              src={`https://www.youtube.com/embed/${prodcut.video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail                           