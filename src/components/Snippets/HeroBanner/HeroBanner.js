import React from 'react';
import './Style.css';

import shape from '../../../media/highlight.svg'
import arrow from '../../../media/arrow.svg'
import underline from '../../../media/underline.svg'
import doddle from '../../../media/doddle.svg'
import wave from '../../../media/wave.svg'
// import arrowtext from '../../../media/arrowtextimg.png'


const HeroBanner = () => {
    return (
        <>


         <section className='herobanner'>
             <div className='container'>
                 {/* <img src={shape} alt="shape" /> */}
                 <h1>the <strong>easiest <img src={underline} alt="underline" /> </strong> way to get car finance</h1>

                  
                 <img className='arrow' src={arrow} alt="arrow" />
                 {/* <div className='arrowtextimg'> */}
                    <a className='btn' href='./' data-bs-toggle="modal" data-bs-target="#modal">Get a quote <img src={doddle} alt="doddle" /> 
                    <span>No impact on your credit score</span>
                    </a> 
                    {/* <img className='arrowtext' src={arrowtext} alt="icon1"/> */}
                 {/* </div> */}



                 <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                        <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            
                            <div id="iframe-container"></div>
                        </div>
                         
                        </div>
                    </div>
                    </div>



                    
 
                 


                 <p>Your new car is a few clicks away. Find out if you’ll be approved for finance with Wheelz in just two minutes.  </p>

                 
             </div>
         </section>   
                 <img className='wave' src={wave} alt="wave" />

        </>
    );
};

export default HeroBanner;