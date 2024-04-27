import React from 'react'
import  './Footer.css';
import logo from '../../assets/logo.jpg';
import { MdFacebook } from "react-icons/md";
import nabh from '../../assets/nabh.png';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import secondlogo from '../../assets/secondlogo.png';
const Footer = () => {
  return (<><div>

        <div className="container-fuild footer-contain">
        <div className="row m-5">
            <div className="col-sm-3">
                <div className="footer-main">
                    <img src={logo} alt="" className='footer-image'/>
                </div>
                <div className="footer-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione sapiente ducimus nulla aut assumenda asperiores expedita, velit id dolor voluptatum dolores quo tempore est repellat exercitationem! Nisi, voluptatum placeat.
                </div>
                <button className='footer-button'>Find A Doctor </button> <br />

                <button className='footer-button2'>Book An  Appointment</button>

            </div>
            <div className="col-sm-3">

                <div className="footer-head">
                    Our Services
                </div>
                <h6>Department of Pediatrics</h6>
                <h6>Department of Neonatology</h6>
                <h6>Department of Pediatric Intensive Care</h6>
                <h6>Pediatric Super Specialities</h6>
                <h6>Department of Obesterics</h6>
                <h6>Department of Gynecology</h6>
                <h6>Department of IVF</h6>
                <button className='footerbutton'>View All</button>



            </div>
            <div className="col-sm-3">
                <div className="footer-first-head">
                    Resources
                </div>
                <h6>Testimonials</h6>
                <h6>Blogs</h6>
                <h6>CSR</h6>
                <h6>Disclosure</h6>
                <h6>FAQs</h6>
                <h6>New & Media</h6>
                <h6>Career</h6>
            </div>
            <div className="col-sm-3">
                <div className="footer-location">
                    Locations
                </div>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <div className="nabh">
                    <img src={nabh} alt="" className='nabh' />
                </div>
            </div>
            <div className="line text-light">   <hr /></div>


            <div className="footer-footer">
                
                <div className='footermain'>
                    <div className='col-sm-2 footercontact '><MdFacebook /></div>
                    <div className='col-sm-2 footercontact'><FaYoutube /></div>
                    <div className='col-sm-2 footercontact'><FaInstagram /></div>
                    <div className='col-sm-4 footer-para'>Privacy Policy | Terms & Conditions | © Copyright 2024 Shubham hospital, All rights reserved.</div>
                    <div className='col-sm-2 seclogo'><img src={secondlogo} alt="" className='seclogo'/></div>
                </div>
            
        </div>
        </div>

       

        </div>

        
    </div>
    </>
    
  )
}

export default Footer