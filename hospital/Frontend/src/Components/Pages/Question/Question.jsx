import React from 'react'
import './Question.css'
import { Link } from 'react-router-dom'
const question = () => {
  return (
    <div>

        <div className="container- section-of-faq">
            {/* <div className='head-of-faq text-center'> Frequently Asked Questions</div>

        <Link to="/book"><button className='footer-button2'>Book An  Appointment</button></Link> */}




        <div className="container-fuild accordians mt-5">
<div className="accordion " id="accordionExample">
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <div className='question'>Frequently Asked Questions</div>
      <button className="accordion-button me-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong className='head-of-accordian'>What is the process for rescheduling or cancelling appointments?</strong>      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
      To reschedule or cancel an appointment, call us at +91 8828828100      </div>
    </div>
  </div>
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className='head-of-accordian'>  How can I obtain information about billing and payment options?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      For any information related to billing and payments, you can connect with our team at +91 8828828100    </div>
    </div>
  </div>

  
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className='head-of-accordian'>  What are the hospital's policies regarding privacy and confidentiality?</strong>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, certain lifestyle modifications can help to manage asthma in some cases. You will be briefed about these by your child’s pediatrician based on their specific symptoms.       </div>
    </div>
  </div>

  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      <strong className='head-of-accordian'>  How can I obtain information about billing and payment options?</strong>      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, certain lifestyle modifications can help to manage asthma in some cases. You will be briefed about these by your child’s pediatrician based on their specific symptoms.       </div>
    </div>
  </div>
  
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      <strong className='head-of-accordian'>Is there a waiting area for family and friends?</strong>      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, we have a dedicated waiting area for patients and visitors to ensure a comfortable and hassle-free experience. Yes, we have a dedicated waiting area for patients and visitors to ensure a comfortable and hassle-free experience.       </div>
    </div>
  </div>


  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      <strong className='head-of-accordian'>What expenses are typically covered by your medical policy?
    </strong>      </button>
    </h2>
    <div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Your medical policy may cover several hospitalization expenses, which are subject to some terms and conditions. These include medical investigations, procedures, follow-up visits, prescription medication and further investigations.      </div>
    </div>
  </div>

  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseven" aria-expanded="false" aria-controls="collapseven">
      <strong className='head-of-accordian'>Will health insurance cover the expense of your medical emergency?
    </strong>      </button>
    </h2>
    <div id="collapseven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, your health insurance will either pay the expenses directly or reimburse the payment made by you in case of any medical emergency.    </div>
    </div>
  </div>
</div>
</div>


<div className="need-help">
    
    <div className="row">
        
          <div className="col-sm-8">
            <div className='need-head'> Still have a Question</div>
            <div className='need-para'> Looking for assistance? . We're here to provide personalized care and genuine support every step of the way. Whether you have questions or need guidance, our team is more than just healthcare providers <br /> we're your dedicated companions on your journey to wellness.
            </div>
          </div>
          <div className="col-sm-4">
        <Link to="/contact">  <button className='contact-button'>Contact Us</button></Link>
    
          </div>
          </div>
    
          </div>

        </div>

    </div>
  )
}

export default question