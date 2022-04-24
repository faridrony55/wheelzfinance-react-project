import React from 'react';
import './Style.css'
import logo from '../../media/logo.jpeg'
import {  NavLink } from "react-router-dom"; 
const Footer = () => {
    return (
        <>
        {/* <footer>
            <div className='container'>
                <div className='flex'>
                    <div className='col-4'>

                    </div>
                </div>
            </div>
        </footer>  */}

        <div className="navbar-color ">
    <div className="container col-md-11 col-text-center footer-logo">
        
        <div className="footer-item d-md-flex nav align-items-centerf">
            <div className="col-12 col-md-3">
            <a href="./">
                <img className="website-logo " src={logo} alt="" />
            </a> 
            </div>
            <div className="col-12 col-md-3     footer-Items">
                <h6 className="footer-head">
                 <NavLink to="/terms-and-conditions"  className="nav-link  " >Terms & Conditions</NavLink>  
                </h6>

                <div id='contact' className="     footer-Items contactus">
                <h6 className="footer-head"> 
                Contact us
                 <a href="mailto:info@wheelz.finance"  className="nav-link  " >info@wheelz.finance</a>
                 
                </h6>
                
            </div> 
                
            </div>
            
            <div className="col-12 col-md-3      footer-Items">
                 <h6 className="footer-head"> 
                    <NavLink to="/complaints-procedure"  className="nav-link  " > complaints procedure</NavLink>
                   </h6>
            </div>
            <div className="col-12 col-md-3      footer-Items">
                <h6 className="footer-head"> 
                 <NavLink to="/cookies-privacy-policy"  className="nav-link  " >Cookies & Privacy Policy</NavLink>
                </h6>
                
            </div> 


            
        </div>
         
        <div className="footer-last d-md-flex ">
            <div className="col-md-1   p-md-0"><img className="finance-img" src="https://oodlecarefinance.netlify.app/static/media/finnacial%20footter.e62f7015c595d83f57ed6e5add5a4bd7.svg" alt="" /></div>
            <div className="col-11  ">
                <p>&copy;  2022 Pura Performance LTD</p>
                <p>Wheelz Car Finance is a trading name of Pura Performance LTD which is registered in England &amp; Wales, under Registered No. 12924517. Its Registered Office is Bradford Road, Cottingley, Bingley, West Yorkshire, England, BD16 1PA.</p>
                <p>Pura Performance LTD is authorised and regulated by the Financial Conduct Authority (Reference Number 937351). Pura Performance is a member of the Finance &amp; Leasing Association and complies with its Lending Code, a copy of which we will provide on request.</p>
            </div>
        </div>
    </div>
    {/* <div className="last-section"><img className="car-img px-2" src="https://oodlecarefinance.netlify.app/static/media/car.9d9893ddce0c3bbd57b052dc153a0325.svg" alt="" /></div>
    <div></div> */}
</div>

        </>
    );
};

export default Footer;