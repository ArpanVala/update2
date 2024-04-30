import React from 'react'
import logo from '../Assets/logo3.png'

const Navbar = ({setGenre}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
        <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="40" class="d-inline-block align-text-top"/>
     <h3 className='m-0 p-0 d-inline-block align-text-top'>BuzzNews</h3>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <lis><a className="dropdown-item">Business</a></lis>
            <li><a className="dropdown-item" href="#">Entertainment</a></li>
            <li><a className="dropdown-item" href="#">Technology</a></li>
            <li><a className="dropdown-item" href="#">Health</a></li>
            <li><a className="dropdown-item" href="#">Science</a></li>
            <li><a className="dropdown-item" href="#">Sports</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
