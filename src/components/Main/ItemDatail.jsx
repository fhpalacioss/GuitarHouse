import React,{ useState,useContext } from 'react'
import ItemCount from '../ItemCount'
import { Link, NavLink } from 'react-router-dom'
import {CardContext} from '../../context/CardContext'

const ItemDetail = ({prodcut}) => {
    
  const [show, setShow] = useState(true)

  const {addCart} = useContext(CardContext)

  const onAdd = (qty)=>{
    console.log(qty);
    setShow(false);
    addCart(prodcut,qty)
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
        {
          show
          ? <ItemCount stock={prodcut.stock} initial={0}  onAdd={onAdd}/>
          : <Link className="btn btn-dark"  to='/cart'>Ir al carrito</Link>
        }
        
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