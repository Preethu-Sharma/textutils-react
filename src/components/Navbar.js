import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  
  const btnHome = ()=>{
    document.title = "TextUtils - Home";
  }
  const btnAbout = ()=>{
    document.title = "TextUtils - About";
  }
  const themeRed = ()=>{
    props.toggleMode('#6a1212');
  }
  const themeGreen = ()=>{
    props.toggleMode('#054f05');
  }
  const themeBlue = ()=>{
    props.toggleMode('#101052');
  }
  const themeLight = ()=>{
    props.toggleMode('light');
  }
  const themePurple = ()=>{
    props.toggleMode('#4a074a');
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={btnHome}>
          <strong>{props.title}</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={btnHome}>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={btnAbout}>
              <Link className="nav-link" to="/about">
                {props.aboutSection}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <button style={{backgroundColor: 'red', borderRadius: '50%', width:'25px', height:'25px'}} onClick={themeRed}></button>
          <button className="mx-2" style={{backgroundColor: 'green', borderRadius: '50%', width:'25px', height:'25px'}} onClick={themeGreen}></button>
          <button style={{backgroundColor: 'blue', borderRadius: '50%', width:'25px', height:'25px'}} onClick={themeBlue}></button>
          <button className="mx-2" style={{backgroundColor: 'white', borderRadius: '50%', width:'25px', height:'25px'}} onClick={themeLight}></button>
          <button className="me-2" style={{backgroundColor: 'purple', borderRadius: '50%', width:'25px', height:'25px'}} onClick={themePurple}></button>
          <p className={`my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{fontWeight: "bold", fontSize: "1.1rem"}}>Try different color Themes</p>
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>        
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.setToogleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Try Different Color Themes</label>
          </div> */}

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutSection: PropTypes.string
}

Navbar.defaultProps = {
  title: "Your title",
  aboutSection: "About"
}