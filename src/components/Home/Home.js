import React from 'react';
import HeroBanner from '../Snippets/HeroBanner/HeroBanner';
import './Style.css'
import car1 from '../../media/car.svg';
import icon1 from '../../media/icon1.svg';
import search from '../../media/search.svg'
import circle from '../../media/circle.svg'
import car from '../../media/car.gif'
import car_icon from '../../media/car_icon.svg'
import dollar_icon from '../../media/dollar_icon.svg'
import support_icon from '../../media/support_icon.svg' 
import Faqs from '../Snippets/Faqs/Faqs';
import doddle from '../../media/doddle.svg'


const Home = () => {
    return (
       <>
        <HeroBanner/>
        <section className='homeSection' id='finance'>
            <section className='steps'>
                <div className=''>

                <h2>  <img className='circle' src={circle} alt="circle" />  New car in  24 hours? </h2> 
                  
                <br/><br/> 
                <br/> 
                <div>
                <img src={car} alt="car"/>
                 
                </div>
              <h2> <span>The Wheelz Way 🥳</span> </h2>   
                    <ul className='step'>
                        <li>
                            <div>
                                <span>Decide how much you want to borrow</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Get an instant decision</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Choose your car</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Celebrate and drive away!</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className=''>
                <div className='container colum d-flex'>
                   

                    <h2>Pay monthly for your dream car.  </h2>
                    <p className='text-xl'>  We work with a wide variety of lenders to compare and get you the best possible deal, the lowest rate and most affordable monthly payments. Once we've done that we work with a wide variety of dealerships to find you the best car and service. <br/><br/>
                     Buying a new car on finance can seem daunting. We make getting new Wheelz easy, hassle-free, quick and pleasant. </p>
                     {/* <h1>Wheelz gets you the best deal.</h1> */}



                     <section className='features-section'>
                <div className='container'>
                    <div className='d-flex'>
                        <div className='col-sm-4 '>
                            <div className='card'>
                                <img src={car_icon} alt="car_icon"/>
                                <h3>Same day driveaway</h3>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check-circle mr-3"></i>We work with a wide range of dealerships to find you the best car</li>
                                    <li><i className="fas fa-check-circle mr-3"></i>Leave the hard work to us</li>
                                    <li><i className="fas fa-check-circle mr-3"></i>Get your car delivered anywhere in the UK</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-4 '>
                            <div className='card'>
                                 
                                <svg className='dollar_icon' fill="none" height="58" width="76" viewBox="0 0 68 65" xmlns="http://www.w3.org/2000/svg"> <path d="m39.454 46.673-15.5 9.8489-22.545-15.544" strokeLinecap="round" strokeLinejoin="round"></path> <path d="m43.681 14.13v2.8261"></path> <path d="m23.954 26.848v2.826"></path> <path d="m39.453 32.415-23.193-15.727 10.441-6.3163 24.025 15.12v22.609l-11.273 7.2914z" strokeLinecap="round" strokeLinejoin="round"></path> <path d="m46.0757 22.5662 8.0599-5.1152c-1.2259-.7772-1.4796-1.8793 0-2.812l-8.8631-5.62386c-1.4795.93261-3.2126.77717-4.4385 0l-8.1162 5.14346"></path> <path d="m22.2906 20.7856-8.8208 5.5816c1.4796.9326 1.24 2.0206.0141 2.7978l8.8631 5.6239c1.2258-.7772 2.9449-.9326 4.4244.0141l8.3558-5.2989"></path> <g strokeLinecap="round" strokeLinejoin="round"> <path d="m39.454 32.542-15.5 9.8489-22.545-14.13 16.669-10.344"></path> <path d="m28.265 11.347 15.415-9.9337 22.545 14.13-15.584 9.8913"></path> <path d="m39.454 39.636-15.5 9.8207-22.545-15.544"></path> <path d="m66.226 22.609-15.5 9.8348"></path> <path d="m39.454 53.738-15.5 9.8489-22.545-15.543"></path> <path d="m66.226 36.739-15.5 9.8489"></path> <path d="m66.226 29.674-15.5 9.8489"></path> </g> </svg>

                                <h3>Finance to suit you</h3>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check-circle mr-3"></i>£0 deposit deals</li>
                                    <li><i className="fas fa-check-circle mr-3"></i>All credit types accepted, 95% approval</li>
                                    <li><i className="fas fa-check-circle mr-3"></i>Affordable monthly payments</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-4 '>
                            <div className='card'>
                                <img src={support_icon} alt="support_icon"/>
                                <h3>Dedicated finance expert</h3>
                                 
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check-circle mr-3"></i>Your personal expert with you throughout the process</li>
                                    <li><i className="fas fa-check-circle mr-3"></i>Specialists in customisable finance</li>
                                    <li><i className="fas fa-check-circle mr-3"></i>PCP and HP Finance available</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


                     <h2>Got existing car finance?</h2>
                     <p>Great! We look forward to lowering your monthly payments and upgrading your car. Our experts will find you the best finance deal, our goal is to maximise value for you. The lowest rates combined with the best car.</p>  
                     <p>Some people actually want to stay in their car however don't want to pay the balloon payment, our refinancing options are great with some of the best rates. Stay in your car, pay lower monthly payments.</p>


                     <h2>New to car finance?</h2>

                     <p>We can help, you're with the specialists. Car finance made easy, our experts will be with you every step of the process. You're never alone, we do the hard work and are with you every step of the way. Getting you your dream car for an affordable monthly budget, is our mission.</p>

                    <div className='space-sm'></div>
                     <h2>Get car finance in minutes with Wheelz</h2>
                    {/* <p>Representative APR 15%. Finance subject to status. 18+. Terms and Conditions apply.</p> */}

                    <p className=''>Wheelz is a credit broker, not a lender. Our rates start from 8.9% APR. The rate you are offered will depend on your individual circumstances.</p> 
                    <p>Representative Example: Borrowing £7,000 over 48 months with a representative APR of 19.3%, the amount payable would be £205 a month, with a total cost of credit of £2,831 and a total amount payable of £9,831.</p>

                    <a className='btn bottom-btn' href='./' data-bs-toggle="modal" data-bs-target="#modal">Get your quote <img src={doddle} alt="doddle" /> </a>

                    <div className='space'></div> 
                </div>
            </section>

      
 


            {/* <section className='d-flex colum'>
                
                <div className='help'>
                    <h2>Help me choose</h2>
                    
                    <p>Not sure which car is best for you? Use our handy search tool to tell us what matters.</p>
                    <p>We'll help you find your perfect match based on:</p>
                    <ul className='feature'>
                        <li>
                            <div className='icon'>
                                <img src={icon1} alt="icon1"/>
                            </div>
                            <strong>Cost</strong>
                        </li>
                        <li>
                            <div className='icon'>
                                <img src={icon1} alt="icon1"/>
                            </div>
                            <strong>Cost</strong>
                        </li>
                        <li>
                            <div className='icon'>
                                <img src={icon1} alt="icon1"/>
                            </div>
                            <strong>Cost</strong>
                        </li>
                        <li>
                            <div className='icon'>
                                <img src={icon1} alt="icon1"/>
                            </div>
                            <strong>Cost</strong>
                        </li>
                    </ul>
                    <p>And anything else that’s important to you…</p>
                    <a className='btn' href='./'>Find my Match</a>
                    <img className='search' src={search} alt="icon1"/>
                </div>
            </section> */}



            
        </section>

        <Faqs/>
       </>
    );
};

export default Home;