import React from 'react'
import  './Footer.css';
import logo from '../../assets/logo.jpg';
import { MdFacebook } from "react-icons/md";
import nabh from '../../assets/nabh.png';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import secondlogo from '../../assets/secondlogo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (<><div>

        <div className="container-fuild footer-contain">
        <div className="row m-5">
            <div className="col-sm-3">
                <div className="footer-main">
                    <img src={logo} alt="" className='footer-image'/>
                </div>
                <div className="footer-text">
                From the delicate needs of newborns to the complex concerns of women's health, we are committed to delivering personalized care that prioritizes your well-being above all else. With a legacy built on trust and expertise, Surya Hospitals is your trusted partner on the journey to optimal health.                </div>
                <Link to='/doctor'><button className='footer-button'>Find A Doctor </button>
</Link>

                 <br />

                {/* <button className='footer-button2'>Book An  Appointment</button> */}
                <Link to="/book">  <button className='footer-button2'>Book An  Appointment</button></Link>


            </div>
            <div className="col-sm-3">

                <h6 className="footer-head">
                    Our Services
                </h6>
            <Link to='/pediatrics' style={{textDecoration:'none'}}>    <h6>Department of Pediatrics</h6></Link>
                <Link to='/about' style={{textDecoration:"none"}}><h6>About us</h6></Link>
                <Link to="/best" style={{textDecoration:"none"}}><h6>Center Of Excellence</h6></Link>
                {/* <h6>Pediatric Super Specialities</h6> */}
               <Link to='/Department' style={{textDecoration:"none"}}> <h6>Department of Obesterics</h6></Link>
               <Link to='/ophthalmology' style={{textDecoration:"none"}}> <h6>Ophthalmology</h6></Link>
                
                <button className='footerbutton'>View All</button>



            </div>
            <div className="col-sm-3">
                <h6 className="footer-first-head">
                    Useful Links
                </h6>
                <h6><Link to='/home' style={{textDecoration:'none'}}>Home</Link></h6>
                <h6><Link to='/about' style={{textDecoration:'none'}}>About</Link></h6>
                <h6><Link to='/doctor' style={{textDecoration:'none'}}>Doctor</Link></h6>
                <h6><Link to='/contact' style={{textDecoration:'none'}}>Contact us</Link></h6>
                <h6> <Link to='/question' style={{textDecoration:'none'}}>FAQs</Link></h6>
                <h6> <Link to='/casestudies' style={{textDecoration:'none'}}>Case Studies</Link></h6>
                {/* <h6>Career</h6> */}
            </div>
            <div class="col-sm-3 col-sm-3 footer-newsletter">
            <h6 >Our Newsletter</h6>
            <h6>Experience compassionate care and expert medical services tailored to your needs at our hospital, where your health and well-being come first.</h6>
            <form action="" >
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

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