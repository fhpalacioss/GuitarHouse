import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
  return (

    <div key={producto.id} className="card" style={{width: "20rem"}}>
        <div className="imgcard" >
        <img src={producto.image} className="card-img-top" height="400px" alt={producto.title} style={{Maxwidth: "200px"}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <h2 className="card-text">$ {producto.price}</h2>
          
        </div>
        <Link to={`/detail/${producto.id}`} className="btnCard btn btn-dark">Conoce mas...
          {/* <a  className="btn btn-dark">Conoce mas...</a> */}
        </Link>
    </div>
  )
}

export default Item