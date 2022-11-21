import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./assets/images/logo.png" class="img w-50 ms-5" alt="..."/></a>
    <button className="navbar-toggler text-white ms-4 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">
     <i class="fas fa-navicon" style={{color:'#fff', fontSize:'28px'}}></i>
</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-4 text-white navbar-home" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-4 navbar-home" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-4 navbar-home" href="#">Workshop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-4 navbar-home" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex me-5">
        <input className="input-1" type="text" placeholder="Search"/>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
