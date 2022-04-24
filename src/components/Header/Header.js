import React from 'react';
import {  NavLink } from "react-router-dom"; 
import './Style.css'
import logo from '../../media/logo.jpeg'
  
const Header = () => {
    return ( 
        <>

<header className='sticky-top'>
<nav className="navbar navbar-expand-lg   " id='home'>
  <div className="container">
    <a className="navbar-brand" href="./"> 
    <img src={logo} alt="logo"/>    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""></span>
      <span className="middle"></span>
      <span className=""></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <a href='#home' className="nav-links  " >Home</a>
          {/* <NavLink to="./"  className="nav-link active" >Home</NavLink> */}
        </li>
        {/* <li className="nav-item"> 
          <NavLink to="/aboutus"  className="nav-link  " >About Us</NavLink>
        </li>  */}
        <li className="nav-item">
          <a href='#finance' className="nav-links  " >Finance</a>
          {/* <NavLink to="/finance"  className="nav-link  " >Finance</NavLink> */}
        </li>
         
        <li className="nav-item">
          <a href='#faq' className="nav-links  " >FAQ's</a>
          {/* <NavLink to="?#faq"  className="nav-link  " >Faq</NavLink> */}
        </li>
        <li className="nav-item">
          <a href='#contact' className="nav-links  " >Contact Us</a>
          {/* <NavLink to="/contact"  className="nav-link  " >Contact</NavLink> */}
        </li>
      </ul>
      
    </div>
  </div>
</nav>

            {/* <header>
                <div className='container grid grid-header'>
                    <div className='logo'>
                        <a href='./'>
                            <img src={logo} alt="logo"/>    
                        </a> 
                    </div>
                    <nav>
                        <ul className='d-flex'>
                            <li>
                                <NavLink to="./">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus">About Us</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/finance">Finance</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/faq">Faq</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li> 
                        </ul> 
                    </nav>
                </div> */}
            </header>
        </>
             
    );
};

export default Header;