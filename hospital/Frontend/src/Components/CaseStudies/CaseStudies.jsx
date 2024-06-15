import React from 'react'
import './CaseStudies.css'
import baby2 from '../../assets/baby2.jpg'
import baby4 from '../../assets/baby4.avif'
import baby5 from '../../assets/baby5.avif'
import baby6 from '../../assets/baby6.webp'
import baby7 from '../../assets/baby7.avif'
import { FaGreaterThan } from "react-icons/fa";
import { Link  } from 'react-router-dom'
const CaseStudies = () => {
  return (
    <div>
        {/* case studies start here  */}
        <div className="container-fuild case">
            <div className="casestudies">
            <div className="row m-2">
                <div className="col-sm-8 carecol">
                    <div className='carehead'> Celebrating Our journey of <br />
                        Outstanding Healthcare.
                    </div>
                    <div className='caremsg'>
                    When it comes to critical care, Shubham Hospitals stands as your <br /> trusted partner in excellence. <br /> In moments of crisis, you can rely on us to be your beacon of hope.                     </div>
                    {/* <button className='book-button'>Book An Appointment</button> */}
                    <Link to="/book">  <button className='book-button'>Book An  Appointment</button></Link>

                </div>
                <div className="col-sm-4">
                    <img src={baby2} alt="" className='careimage' />
                </div>
            </div>
            </div>

           
        </div>
 {/* another sesion start */}
 <div className="another-session">
                <div className='turining'> Turning Moment</div>
                <p className='anothermsg'>Embark on a journey of inspiration with us as we celebrate the triumphs of resilience, expertise, and unwavering hope. <br /> At Shubham Hospitals, we are privileged to witness the warrior spirit of little individuals who, against all odds, have emerged victorious over critical conditions. 
                </p>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <Link to="/Page" style={{textDecoration:"none"}}> <h4 className='meet-children'>Meet Nikita <FaGreaterThan /></h4></Link>
                 
                    <img src={baby4} alt=""  className='babythree'/>
                </div>
            </div>
            <div className="col-sm-12">
            <Link to="/Page" style={{textDecoration:"none"}}> <h4 className='meet-children'>Meet shivani <FaGreaterThan /></h4></Link>

                <img src={baby5} alt="" className='babysecond'/>
            </div>
            <div className="col-sm-12">
            <Link to="/Page" style={{textDecoration:"none"}}> <h4 className='meet-children'>Meet Grecy <FaGreaterThan /></h4></Link>

                <img src={baby6} alt="" className='babysix'/>
            </div>
            <div className="col-sm-12">
            <Link to="/Page" style={{textDecoration:"none"}}> <h4 className='meet-children'>Meet Shreya <FaGreaterThan /></h4></Link>

                <img src={baby7} alt=""className='babyseven' />
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
          <Link to="/contact"><button className='contact-button'>Contact Us</button></Link>
    
          </div>
          </div>
    
          </div>
    </div>
  )
}

export default CaseStudies