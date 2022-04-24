import React from 'react';
import './Style.css';

import shape from '../../media/highlight.svg';
import arrow from '../../media/arrow.svg';
import shape1_about from '../../media/shape1_about.svg'
import shape2_about from '../../media/shape2_about.svg'
import shape3_about from '../../media/shape3_about.svg'


import OODLE_WEB_ABOUT_US_ILLUSTRATIONS_THUMBS from '../../media/OODLE_WEB_ABOUT_US_ILLUSTRATIONS_THUMBS UP.svg'
import OODLE_WEB_ABOUT_US_ILLUSTRATIONS_TROPHY from '../../media/OODLE_WEB_ABOUT_US_ILLUSTRATIONS_TROPHY.svg'
import OODLE_WEB_ABOUT_US_ILLUSTRATIONS_DEALERSHIP from '../../media/OODLE_WEB_ABOUT_US_ILLUSTRATIONS_DEALERSHIP.svg'

import book2  from '../../media/book2.png'
import book1  from '../../media/book1.jpg'

const AboutUs = () => {
    return (
        <>
            <section className='aboutus'>
                <img src={shape1_about} alt="shape1_about" className='shape1_about' />
                <img src={shape2_about} alt="shape2_about" className='shape2_about' />
                <img src={shape3_about} alt="shape3_about" className='shape3_about' />
                <div className='container'>
                    <img src={shape} alt="shape" />
                    <h1>ABOUT OODLE CAR FINANCE</h1>
                    <img src={arrow} alt="arrow" />
                    
                    <p>We’re the fastest growing motor finance company in the UK, and we're on a mission to inspire car buying confidence at every step.</p>
                </div>
             </section>

             <section className='aboutus-section py-5'>
                 <div  className='container'>
                     <div className='about'>
                         <div className='icon-column'>
                             <img src={OODLE_WEB_ABOUT_US_ILLUSTRATIONS_THUMBS} alt="" /> 
                         </div>
                         <div className='doc-column'>
                             <h3>CAR BUYING CONFIDENCE</h3>
                             <p>We believe that when you sort the finance first, you can go on to choose and buy a used car with confidence. That's why we've flipped car buying on its head to give customers the control and convenience of a pre-approved budget; car finance which can be used to buy a car online or in-person from any trusted dealer. With support from our team of Oodle Experts every step of the way. <br/>We've already helped over 150,000 customers get the best car for their budget, and we're over the moon to be rated five stars on Trustpilot.</p>
                             <a className="btn" href="./">How it Works</a>
                         </div>
                     </div>
                     <div className='about'>
                         <div className='icon-column'>
                             <img src={OODLE_WEB_ABOUT_US_ILLUSTRATIONS_TROPHY} alt="" /> 
                         </div>
                         <div className='doc-column'>
                             <h3>CAR BUYING CONFIDENCE</h3>
                             <p>We believe that when you sort the finance first, you can go on to choose and buy a used car with confidence. That's why we've flipped car buying on its head to give customers the control and convenience of a pre-approved budget; car finance which can be used to buy a car online or in-person from any trusted dealer. With support from our team of Oodle Experts every step of the way. <br/>We've already helped over 150,000 customers get the best car for their budget, and we're over the moon to be rated five stars on Trustpilot.</p>
                             <a className="btn" href="./">How it Works</a>
                         </div>
                     </div>
                     <div className='about'>
                         <div className='icon-column'>
                             <img src={OODLE_WEB_ABOUT_US_ILLUSTRATIONS_DEALERSHIP} alt="" /> 
                         </div>
                         <div className='doc-column'>
                             <h3>CAR BUYING CONFIDENCE</h3>
                             <p>We believe that when you sort the finance first, you can go on to choose and buy a used car with confidence. That's why we've flipped car buying on its head to give customers the control and convenience of a pre-approved budget; car finance which can be used to buy a car online or in-person from any trusted dealer. With support from our team of Oodle Experts every step of the way. <br/>We've already helped over 150,000 customers get the best car for their budget, and we're over the moon to be rated five stars on Trustpilot.</p>
                             <a className="btn" href="./">How it Works</a>
                         </div>
                     </div>
                 </div>
             </section>

             <section className='book-section'>
                 <div className='container'>
                     <h2>GETTING NOTICED FOR ALL THE RIGHT REASONS</h2>
                     <p>We’re proud to have won a host of awards and oodles of positive feedback from customers.</p>
                     <div className='gallery'>
                         <div>
                            <img  src={book1} alt="book"/>
                         </div>
                         <div>
                            <img  src={book2} alt="book"/>
                         </div>
                         <div>
                            <img  src={book1} alt="book"/>
                         </div>
                         <div>
                            <img  src={book2} alt="book"/>
                         </div>
                     </div>
                 </div>
             </section>




             <section className='timeline aboutusTimeline'>

                 <h1>THE STORY SO FAR...</h1>

                 <div className='timeline-box'>
                     <div className='line'></div>
                     <ul>
                         <li>
                             <div className='ball'></div>
                             <div className='left'>
                                 <div className='number'>
                                 <svg role="presentation" viewBox="0 0 154 128" className="style__SVG-sc-eu8tjn-0 bGDLlp"><title>UI/Numerals/Decorative Numeral 1</title><g fill="none" fill-rule="evenodd" id="1.1-How-it-works" stroke="none" stroke-width="1"><g id="3.-How-It-Works-Desktop-V1" transform="translate(-465.000000, -795.000000)"><g id="5-steps-line" transform="translate(200.000000, 675.000000)"><g id="Step-1" transform="translate(252.000000, 29.000000)"><g id="UI/Numerals/Decorative-Numeral" transform="translate(0.000000, 91.000000)"><rect fill="#FB9F1E" height="128" id="Circle" rx="64" width="128" x="38.9858687" y="0"></rect><text fill="#312F43" font-family="GT-Walsheim, sans-serif" font-size="130" font-style="italic" font-weight="700" id="4" letter-spacing="-2.5"><tspan x="4" y="117">1</tspan></text></g></g></g></g></g></svg>
                                 </div>
                             </div>

                             <div  className="right">
                                 <h2 >March 2016</h2>
                                 <div   >
                                     <p>We help our first ever Oodle customer finance a car!</p>
                                </div>
                             </div>
                         </li>
                         <li className='reverse'>
                             <div className='ball'></div>
                             <div className='left'>
                                 <div className='number'>
                                 <svg role="presentation" viewBox="0 0 159 134" className="style__SVG-sc-eu8tjn-0 bGDLlp"><title>UI/Numerals/Decorative Numeral 2</title><g fill="none" fill-rule="evenodd" id="1.1-How-it-works" stroke="none" stroke-width="1"><g id="3.-How-It-Works-Desktop-V1" transform="translate(-824.000000, -1162.000000)"><g id="5-steps-line" transform="translate(200.000000, 675.000000)"><g id="Step-2" transform="translate(0.000000, 411.000000)"><g id="UI/Numerals/Decorative-Numeral-Copy" transform="translate(616.000000, 76.000000)"><rect fill="#0AD2A0" height="134" id="Circle" rx="64" width="128" x="38.9858687" y="0"></rect><text fill="#312F43" font-family="GT-Walsheim, sans-serif" font-size="130" font-style="italic" font-weight="700" id="4" letter-spacing="-2.5"><tspan x="4" y="120">2</tspan></text></g></g></g></g></g></svg>
                                 </div>
                             </div>

                             <div  className="right">
                                 <h2 >March 2016</h2>
                                 <div   >
                                     <p>We help our first ever Oodle customer finance a car!</p>
                                </div>
                             </div>
                         </li>


                         <li className=' '>
                             <div className='ball'></div>
                             <div className='left'>
                                 <div className='number'>
                                 <svg role="presentation" viewBox="0 0 158 134" className="style__SVG-sc-eu8tjn-0 bGDLlp"><title>UI/Numerals/Decorative Numeral 3</title><g fill="none" fill-rule="evenodd" id="1.1-How-it-works" stroke="none" stroke-width="1"><g id="3.-How-It-Works-Desktop-V1" transform="translate(-461.000000, -1556.000000)"><g id="5-steps-line" transform="translate(200.000000, 675.000000)"><g id="Step-3" transform="translate(252.000000, 817.000000)"><g id="UI/Numerals/Decorative-Numeral-Copy-5" transform="translate(0.000000, 64.000000)"><rect fill="#EC608A" height="134" id="Circle" rx="64" width="128" x="38.9858687" y="0"></rect><text fill="#312F43" font-family="GT-Walsheim, sans-serif" font-size="130" font-style="italic" font-weight="700" id="4" letter-spacing="-2.5"><tspan x="4" y="120">3</tspan></text></g></g></g></g></g></svg>
                                 </div>
                             </div>

                             <div  className="right">
                                 <h2 >March 2016</h2>
                                 <div   >
                                     <p>We help our first ever Oodle customer finance a car!</p>
                                </div>
                             </div>
                         </li>


                         <li className='reverse'>
                             <div className='ball'></div>
                             <div className='left'>
                                 <div className='number'>
                                 <svg role="presentation" viewBox="0 0 155 134" className="style__SVG-sc-eu8tjn-0 bGDLlp"><title>UI/Numerals/Decorative Numeral 4</title><g fill="none" fill-rule="evenodd" id="1.1-How-it-works" stroke="none" stroke-width="1"><g id="3.-How-It-Works-Desktop-V1" transform="translate(-828.000000, -1902.000000)"><g id="5-steps-line" transform="translate(200.000000, 675.000000)"><g id="Step-4" transform="translate(0.000000, 1175.000000)"><g id="UI/Numerals/Decorative-Numeral" transform="translate(616.000000, 52.000000)"><rect fill="#FB9F1E" height="134" id="Circle" rx="64" width="128" x="38.9858687" y="0"></rect><text fill="#312F43" font-family="GT-Walsheim, sans-serif" font-size="130" font-style="italic" font-weight="700" id="4" letter-spacing="-2.5"><tspan x="4" y="120">4</tspan></text></g></g></g></g></g></svg>
                                 </div>
                             </div>

                             <div  className="right">
                                 <h2 >March 2016</h2>
                                 <div   >
                                     <p>We help our first ever Oodle customer finance a car!</p>
                                </div>
                             </div>
                         </li>


                     </ul>
                 </div>
             </section>

         </> 
        
    );
};

export default AboutUs;