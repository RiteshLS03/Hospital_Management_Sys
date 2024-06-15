import React from 'react'
import './Doctor.css'
import expert from '../../../assets/expert.png'
import experttwo from '../../../assets/experttwo.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import expertthree from '../../../assets/expertthree.jpg'
import expertfour from '../../../assets/expertfour.jpg'
import expertfive from '../../../assets/expertfive.jpg'
import expertsix from '../../../assets/expertsix.jpg'
import { Link } from 'react-router-dom';
const doctor = () => {
  return (
    <div>

<section id="doctors" className="doctors">
      <div className="container">

        {/* <div className="section-title">
          <h2>Doctors</h2>
          <p>To curate your journey to better health in the most seamless and effective way, we bring together a team of highly skilled and experienced doctors. Meet our team..</p>
        </div> */}


          {/* <div className="section-title">Our Expert Doctors</div> */}
        <div className="row mt-5">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={expert} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Rozan Chitrakar</div>
                <span>Chief Medical Officer</span>
                <div>A medical officer provides crucial medical care and expertise to ensure the well-being.</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={expertthree} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Pratikshya Rai</div>
                <span>Anesthesiologist</span>
                <div>Anesthesia: the silent guardian of pain-free surgeries, gently guiding patients into a peaceful slumber.</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={experttwo} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Bratt Watson</div>
                <span>Cardiology</span>
                <div>Cardiology:where the heart's whispers are heard through the language of EKGs and echocardiograms.</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={expertfour} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Lauren Jones</div>
                <span>Neurosurgeon</span>
                <div>Neurosurgery: where sculpting hope amidst the tangled webs of the brain.</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={expertfive} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Reshma Dabhade</div>
                <span>Pediatrician</span>
                <div>Pediatricians: nurturing the future,with care as boundless as a child's imagination</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={expertsix} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Lauren Jones</div>
                <span>Gynecologist</span>
                <div>Gynecologists: guardians of women's health, empowering the journey of life from  motherhood and beyond.</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={expertthree} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Khan Mustafa</div>
                <span>Urologist</span>
                <div>Urologists: dedicated to safeguarding the silent heroes of urinary and reproductive health</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-6 mt-4 mb-2">
            <div className="member d-flex align-items-start bg-light">
              <div className="pic"><img src={experttwo} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <div>Lauren Jones</div>
                <span>Dermatologist</span>
                <div>Dermatologists: the skin whisperers restoring confidence with every gentle touch.</div>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><FaTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><FaInstagram /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><FaLinkedin /></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>



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
  )
}

export default doctor