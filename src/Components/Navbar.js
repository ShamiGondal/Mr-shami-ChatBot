import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-2">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Shami's Bot</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className='navbar-nav me-auto'></ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/">About</Link>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <button className="btn btn-primary mx-md-2 rounded-5 px-3" type="button">Login</button>
        <button className="btn btn-primary  rounded-5 px-3 mx-2 mx-md-0" type="button">Signup</button>
      </div>
    </div>
  </div>
</nav>
    </div>;
}


export default Navbar;