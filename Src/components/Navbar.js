 import React from 'react'
 import PropTypes from 'prop-types'
 
 
 export default function Navbar(props) {
   return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary`} data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.text1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.title}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" data-bs-theme="dark">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 mx-4" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button> {/* theses primary(blue) success(green) are the classes of bootstarp*/}
      </form>

      <div className="form-check form-switch text-light mx-3">
  <input className="form-check-input" onClick= {props.enableDarkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
    </div>
  </div>
</nav>
   )
 }
  Navbar.prototype={titile:PropTypes.string,
    text:PropTypes.string} // string.isrequired used krte hai jab hmko pass
                                             // krna he h0ga prpos ko beside default props 



//Navbar.defaultProps={     
  //  title:"home",
   // text1:"contact"    //making the default prpos when the prpos is not passed in app.js


//}