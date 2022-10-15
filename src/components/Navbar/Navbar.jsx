import React from 'react';
import CardtWidget from './CardtWidget';


const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:3000/">
    <img src="logo.jpg" alt="Bootstrap" width="100" height="90" />
     <span className="NameStyle">Guitar House</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/">Modelos</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="http://localhost:3000/">Marcas</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="http://localhost:3000/">TOP 10</a>
        </li>
      </ul>
    </div>
    <div>
      <CardtWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar