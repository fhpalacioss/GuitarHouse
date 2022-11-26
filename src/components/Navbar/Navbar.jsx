import React from 'react';
import CardtWidget from './CardtWidget';
import { Link,NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig'
import {  getDocs } from 'firebase/firestore'


const NavBar = () => {

  const [categories,setCategories] = useState([]);

useEffect(()=>{

  const collectionCategories = collection(db,'categorias')

  getDocs(collectionCategories)
  .then((res) =>{
    const secciones  = res.docs.map((prod) =>{
      return {
        id:prod.id, ...prod.data()
      }
    });
    setCategories(secciones)

    console.log(res.docs)
  })
  .catch((error)=>{
    console.log(error)
  })

},[])


  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <img src="logo.jpg" alt="Bootstrap" width="100" height="90" />
     <span className="NameStyle">Guitar House</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
          categories.map((prod)=>(
            <li className="nav-item" key={prod.id}>
              <NavLink className="nav-link " aria-current="page" to={`/category/${prod.path}`}>{prod.title}</NavLink>
            </li>
         ))
        }
      </ul> 
        {/*<li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to="/category/Clasica">Clasica</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to="/category/Electrica">Electrica</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to="/category/ElectroAcustica/">Electro Acustica</NavLink>
        </li>*/}
      
    </div>
    <div>
    <NavLink className="nav-link " to="/cart">
      <CardtWidget/>
    </NavLink>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar