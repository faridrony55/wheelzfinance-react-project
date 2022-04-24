import React from 'react';

import { Link } from "react-router-dom";
import './Style.css';  


const ComplaintsProcedure = () => {
    return (
        <>
           
   
          
        <section className='ComplaintsProcedure footerLink'>
            <div className='container'>
                
            <div className='heading head'>
                    <h2>Complaints  Procedure</h2>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-md-12'>

                        <div className='heading'>
                            <h2>Our Complaints Process</h2>
                        </div>
                        <p>
                        For complaints regarding a finance agreement or insurance product. We will provide written acknowledgement of your complaint within 5 working days. We will carry out a full investigation into your complaint and provide a Final or Other Response within eight weeks from the complaint being received, we will write to you with the outcome of the investigation outlining our reasons for making our decision. If for any reason we cannot complete our investigation within an 8-week time limit we will write to you with an explanation for the delay and advise you of an estimated time for our response.
                        </p>
                        <p>
                        If you are unhappy with our decision and wish to take your complaint further, you can ask the Financial Ombudsman Service to investigate your complaint for you.
                        </p>
                        <p>
                        The Financial Ombudsman is a free, independent service for resolving disputes between customers and financial services institutions. You will need to contact them within 6 months of our final response letter – and they'll ask to see the letter as summary of our investigation of your complaint.
                        </p>
                        <p>You can find more information at <a href='https://www.financial-ombudsman.org.uk/' target="_blank">www.financial-ombudsman.org.uk</a></p>
                        

                    </div>
                </div>
            </div>
        </section>

            
        </>
    );
};

export default ComplaintsProcedure;