import React from 'react'
import logo from '../Assets/logo3.png'

const Navbar = ({setGenre}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
        <a class="navbar-brand pt-1 p-0" href="#">
      <img src={logo} alt="Logo" width="30" class="d-inline-block align-text-top"/>
     <h4 className='p-0 d-inline-block  align-text-top'>BuzzNews</h4>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-autoborder">
        <li className="nav-item" onClick={()=> setGenre("general")}>
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=> setGenre("business")}>Business</a></li>
            <li><a className="dropdown-item" onClick={()=> setGenre("entertainment")}>Entertainment</a></li>
            <li><a className="dropdown-item" href="#" onClick={()=> setGenre("technology")}>Technology</a></li>
            <li><a className="dropdown-item" href="#" onClick={()=> setGenre("health")}>Health</a></li>
            <li><a className="dropdown-item" href="#" onClick={()=> setGenre("science")}>Science</a></li>
            <li><a className="dropdown-item" href="#" onClick={()=> setGenre("sports")}>Sports</a></li>
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
