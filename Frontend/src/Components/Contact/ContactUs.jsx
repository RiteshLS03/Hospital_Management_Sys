import React from 'react'
import './ContactUs.css';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
const ContactUs = () => {
  return (
    <div>

        
        <div className="container-fuild session-main">
<div className="row mt-5">
<div className="col-sm-8 ml-2">
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide2} class="d-block image-slide" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block image-slide" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide4} class="d-block image-slide" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>

<div className="col-sm-4 slide-back">
    <div className="main-slide">
        <p className='col-footer-frist'>Contact Information</p>
        <h6 className='six'>OPD/Enquiry  <small className='smallfooter'>-54554545454</small></h6>
        <h6 className='six'>PICU: <small className='smallfooter'>-54554545454</small></h6>
        <h6 className='six'>NICU: <small className='smallfooter'>-54554545454</small></h6>
        <h6 className='six'>Emergency: <small className='smallfooter'>-878787887/5420000</small></h6>
        <h6 className='six'>Ambulance <small className='smallfooter'>-54554545454</small></h6>
        <h5 className='largefooter'>Email Support</h5>
        <p>info@shubhamhospital.com</p>
        <h5  className='largefooter'>Direction</h5>
        <p>shubham hospital,
            <small>12151-5</small>
            <p className='aurangabad'>Aurangabad</p>
        </p>
</div>
</div>
        </div>
        </div>

        {/* contact session start here  */}

       <div className="container- contact-another">
      
         

        {/* contact us session start here  */}
      <div className="enquiry-contact">
        <div className="row">
        
        <h1 className='enquiryone'>Enquiry now</h1>
       <small className='msgcontact'> Have questions or seeking specialized care? Your health journey begins with a simple enquiry.
       <br /> Connect with us now, and let Surya Hospitals be your trusted partner in wellness.</small>
            
        <div className="col-sm-4">
      
          <h6 className='enquiry-head'>Your Name</h6>
          <input type="text" name='your name' placeholder='Your Name' id='name' />
        </div>
        <div className="col-sm-4">
            <h6 className='enquiry-head'>Phone Number</h6>
            <input type="text" name="your number" placeholder='Your Number' id="your-number" />
        </div>
        <div className="col-sm-4">
            <h6 className='enquiry-head'>Email Address</h6>
            <input type="text" name="your email" placeholder='Your Email' id="your-Email" />

        </div>
        <div className="col-sm-12">
          <h6 className='enquiry-head'>Subject</h6>
        <input type="subject" name="subject" id="subject" placeholder='subject' />  
        </div>
        <div className="col-sm-12">
        <textarea name="comment" className='textarea-contact' form="usrform">Your message goes here...</textarea>
        </div>
        </div>
        <button className='contact-button'>Submit Now</button>
</div>

<div className="need-help">
    
<div className="row">
    
      <div className="col-sm-8">
        <div className='need-head'>Need Help</div>
        <div className='need-para'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Aspernatur cumque aut ut alias id facere vero molestias, <br />suscipit, magnam placeat ab illo iusto. Minus ducimus beatae cum sunt dolores odit!
          Loremeos, iusto obcaecati optio, <br />illum ea aut magnam neque asperiores modi.
        </div>
      </div>
      <div className="col-sm-4">
      <button className='contact-button'>Contact Us</button>

      </div>
      </div>

      </div>
       </div>
        </div>

  )
}

export default ContactUs