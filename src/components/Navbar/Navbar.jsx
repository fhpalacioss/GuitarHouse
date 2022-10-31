import React from 'react';
import CardtWidget from './CardtWidget';
import { Link,NavLink } from 'react-router-dom';


const NavBar = () => {
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
        <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to="/category/Clasica">Clasica</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to="/category/Electrica">Electrica</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to="/category/ElectroAcustica/">Electro Acustica</NavLink>
        </li>
      </ul>
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