import React from 'react';

import './Style.css';  


const Faqs = () => {
    return (
        <>
           
   
             <section id='faq' className='accordion-section'>
                    <h3> <span>FAQ's </span> </h3>
                 <div className='container'>
                     <div className='row justify-content-center'>
                         <div className='col-md-10'>
                         <div className="accordion accordion-flush" id="faq">

                         <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Am I eligible for a car loan?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>
                                    Your eligibility depends on your credit rating. The better your credit rating, the more chance you’ll have of being accepted for a loan or securing a better deal.</p>
                                    <p>It’s important to consider what you can afford and budget accordingly to factor in any monthly repayments and the costs of running your new vehicle.</p>
                                    <p>If you have a lower credit rating, you may still be able to secure a deal, but it might include higher monthly repayments or interest rates.
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Who owns a car if it’s on finance?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>Who owns the car will depend on the agreement. For hire purchase (HP) and personal contract purchase (PCP), the lender owns the car until you make the final payment (or balloon payment for PCP). </p>
                                </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                What credit rating do you need for car finance?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>There is no credit rating limit, but the better your score, the more likely you’ll get approved at a lower rate.</p>
                                </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Does applying affect my credit score?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>If you’re looking for initial quotes, no. When you apply with Wheelz, we run an initial assessment of your credit file and check this against our lenders’ criteria to see if you’re going to be eligible. This is what’s known as a ‘soft search’, and it won’t appear on your records or impact your credit score in any way.</p>
                                    <p>It’s then up to you which deal you choose to apply for – if at all. Once the application’s made and you’ve consented, the lender will need to perform a full credit search, and this will be noted on your credit history. But this never happens without your consent.</p>
                                </div>
                                </div>
                            </div>


                            

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Can I get car finance with poor credit?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>Yes! Just because your credit history isn’t perfect doesn’t mean lenders will turn you away. At Wheelz we're always helping customers get on the road and we work with a large panel of lenders, some of whom specialise in bad credit car finance. </p>
                                </div>
                                </div>
                            </div>

                            

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                What does a car finance broker do?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>A finance broker helps customers find finance deals – it doesn’t lend any money itself. At Wheelz, we work with a large panel of lenders and we share their finance offers with you.</p>
                                </div>
                                </div>
                            </div>




                            

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                What vehicles can I buy with finance from Wheelz?
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p>Our panel of lenders will finance cars, motorcycles and vans.</p>
                                    <p>We can also provide finance for more specialist vehicles, so whatever you’re thinking of buying, please fill out the Wheelz quote form and we can get started.</p>
                                    <p>If you don’t have a car in mind, but you’ve already been pre-approved for finance, our team of specialists can help source your dream car. When we find your car, you can add it to your shortlist and we’ll carry out the vehicle checks and provide a finance quote specifically for that car.</p>
                                </div>
                                </div>
                            </div>



                            </div>

                         </div>
                     </div>
                 </div>  
             </section>


            
        </>
    );
};

export default Faqs;