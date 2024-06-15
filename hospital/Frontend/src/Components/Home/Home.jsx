import React from 'react'
import './Home.css'

import image1 from '../../assets/image1.jpg'
import hopsital2 from '../../assets/hopsital2.avif'
import hopsital3 from '../../assets/hopsital3.avif'
import { FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import child1 from '../../assets/child1.avif';
import child2 from '../../assets/child2.avif';
import child3 from '../../assets/child3.avif';
import head from '../../assets/head.webp';
import head2 from '../../assets/head2.webp';
import head3 from '../../assets/head3.webp';
import head4 from '../../assets/head.webp';
import { FaGreaterThan } from "react-icons/fa6";
import { MdWifiCalling1 } from "react-icons/md";
import location from '../../assets/location.avif';
import location2 from '../../assets/location2.avif';
import location3 from '../../assets/location3.avif';
import location4 from '../../assets/location4.avif';
import location5 from '../../assets/location5.avif';
import millionimage from '../../assets/millionimage.avif';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Home = () => {
  return(<>
         <img src={image1} class="d-block w-100 heroimage" alt="..."/>

   



      <div className="container-fuild contain-home">
        {/* <div className="row "> */}
            <div className="col-sm-3 m-2 ">
              <div className="icon"><TbHandClick /></div>
              <h4 className='headoftext'>Simplify your wellness</h4>
              <h4>journey with a click</h4>
            </div>
{/* <hr /> */}
            <div className="col-sm-3">
           <div className="icon"> <FaPlus /></div>
            <Link to='/doctor' style={{textDecoration:'none'}}>  <h4>Find a Doctor</h4>
              <h4 className='headoftext'>For exceptional care & expertise</h4></Link>
            </div>
            <div className="col-sm-3">
          <div className="icon">  <FaBookmark /> </div>
            <Link to='/book'style={{textDecoration:'none'}}>  <h4>Book an Appointment</h4>
              <h4 className='headoftext'>For World-className assistance</h4></Link>
            </div>

            <div className="col-sm-3">
          <div className="icon">  <FaUserAlt /> </div>
              <h4 className='headoftext'>Get a Second Opinion</h4>
              <h4 className='headoftext'>For well-informed medical decision</h4>
            </div>
            {/* </div> */}
      </div>
      <div className="head-home">
      <h2>Welcoming lives with Expertise</h2>
  <h5> Beautiful stories of Hope, Resilience and Recovery shared by families who have experienced our Excellence
  </h5>
  {/* <button className="btn btn-outline-danger">View All <FaArrowRight /></button> */}
  </div>

<div className="container main-home p-3">
  <div className="col-lg-4 me-5">
    <div className="row">
      <div className="name"><b>Meet Shivani</b></div>
      <img src={child2} alt="" className='pic'/>
      <p>shivani's remarkable journey embodies the triumph of life over daunting odds. Born prematurely at just 22 weeks and weighing a mere 610 grams, his survival stands as a testament to the incredible strides in medical science. </p>
    </div>
   <Link to='/casestudies'> <button className='learn'>Learn More <FaArrowRight /></button></Link>
  </div>

  <div className="col-lg-4 me-5">
    <div className="row">
      <div className="name"><b>Meet Reshma</b></div>
      <img src={child1} alt="" className='pic' />
      <p>grecy charlie's resilience in the face of a rare and severe form of pneumonia is nothing short of extraordinary. Diagnosed with bilateral pneumonia at the tender age of 2.5 years old, he embarked on a courageous battle against this debilitating illness..</p>
    </div>
    <Link to='/casestudies'> <button className='learn'>Learn More<FaArrowRight /></button></Link>
  </div>

  <div className="col-lg-4">
    <div className="row " >
      <div className="name"><b>Meet Nikita</b></div>
      <img src={child3} alt=""  className='pic'/>
      <p>
nikita's miraculous journey from a premature birth to thriving infancy is a testament to the strength of the human spirit and the wonders of modern medicine. Born at just 24 weeks and weighing a mere 400 grams, she faced incredible odds from the moment .</p>
    </div>
    <Link to='/casestudies'>  <button className='learn'>Learn More <FaArrowRight /></button></Link>
  </div>



  </div> 
<div className="head1">
  <h1 className='excellebce'>Excellence, Recognized</h1>
  <h5 style={{fontSize:"20px"}}>Our commitment to world-class care is reflected in our numerous certifications, awards, and partnerships. Trust in our proven track record of excellence.</h5>
  {/* <button className="btn btn-outline-danger" style={{marginTop:"10px"}}>View All <FaArrowRight /></button> */}

  </div>
  <div className="row p-5 m-2">

  <div className="col-md-3">
<div className="card card-design">
    <img src={head} alt="" />
    <div className="card-text"> <h5 className='text-center mt-2'><b>
National Hospital Excellence Rankings</b></h5></div>
  </div>
  </div>
  <div className="col-md-3">
  <div className="card card-design">

    <img src={head2} alt="" />
    <div className="card-text"> <h5 className='text-center mt-2'><b>Hospital Management Conference.</b></h5></div>


  </div>

  </div>
<div className="col-md-3">
  <div className="card card-design">
    <img src={head3} alt="" />
    <div className="card-text"> <h5 className='text-center mt-2'><b>
Medscape India Healthcare .</b></h5></div>

</div>
</div>
<div className="col-md-3">
  <div className="card card-design">
  <img src={head4} alt="" />
  <div className="card-text"> <h5 className='text-center mt-2'><b>
Healthcare  Excellence Awards by ABP .</b></h5></div>

</div>
</div>
</div>
{/* location session start  */}
<div className="container- home-container-location m-5">
<div className="row">
  
  <div className="col-md-4 firstlocation p-2">
    <h5 className='location-heading me-2'>Locations</h5>
    <div className='location-text ml-2 p-2'> Seeking Expert Care Nearby? Your Search Ends Here.</div>
    
    <Link to="/contact"><button className='about-button '>Contact Us  <FaGreaterThan /></button></Link>

  </div>

  <div className="col-md-4 mr-2">
    
    <img src={location} className='w-200 about-image' alt="" />
    <div className='aboutparagraph'>
      
     {/* <b> </b><FaGreaterThan /> */}
</div>
   <div className='about-call'> <MdWifiCalling1 /> 91-5554545412.</div>
  </div>
  <div className="col-md-4 mr-2">
    <img src={location2} className='w-200 about-image' alt="" />
    {/* <div className='aboutparagraph'><b>Lorem ipsum dolor sit amet.</b><FaGreaterThan /></div> */}
   <div className='about-call'> <MdWifiCalling1 />91-2115444120.</div>
  </div>
</div>  

<div className="row mt-4" >
  <div className="col-sm-4">
    <img src={location3} alt="" className='about-image'/>
    {/* <div className='aboutparagraph'><b>Lorem ipsum dolor sit amet.</b><FaGreaterThan /></div> */}
     <div className='about-call'> <MdWifiCalling1 /> 91-5554545412.</div>

  </div>

  <div className="col-sm-4">
    <img src={location4} alt="" className='about-image' />
    {/* <div className='aboutparagraph'><b>Lorem ipsum dolor sit amet.</b><FaGreaterThan /></div> */}
     <div className='about-call'> <MdWifiCalling1 /> 91-5554545412.</div>
    
  </div>

  <div className="col-sm-4">
    <img src={location5} alt="" className='about-image' />
    {/* <div className='aboutparagraph'><b>Lorem ipsum dolor sit amet.</b><FaGreaterThan /></div> */}
     <div className='about-call'> <MdWifiCalling1 /> 91-5554545412.</div>
  </div>
</div>
</div>
 

 <div className="container-fluid other-session">

<h1 className='million-image'>Millions</h1>
<div className="million-text">
   <b className='textfirst text-light'> of lives changed and counting <br />
    Our commitment to women’s and children's health is reflected in the numbers</b>
</div>


 <div className="mmimage m-0 text-center"><img src={millionimage} alt="" className='mimage p-2'/></div>
 </div>

 <div className="container-fuild session-main">
<div className="row mt-5">
<div className="col-sm-8">
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
      <button className='slide-button'> <b>Aurangabad</b></button>
      <div className='contact-name'>
        contact information
      </div>
      <div className='slide-msg'>
      Want to connect with our experts to plan a hassle-free journey to better health? Call us now.
      </div>
      <div className='slide-call'>
      
      <MdWifiCalling1 /> +4545454545454
      </div>
      <div className='slide-call'>
      <IoMailOpenOutline />  abc@gmail.com
      </div>
      <div className='slide-msg'>
      <FaLocationDot /> shubham hospital <br />
      cidco <br />
      Aurangabad - 431001

      </div>
      <button className='button-slidemain'>Emergency + 91-4545454-25650</button>
    </div>
    <div>
       {/* <button className='button-slidemain'>Contact Us</button> */}
       <Link to="/contact">  <button className='button-slidemain'>Contact Us</button></Link>

    </div>
</div>
</div>
 </div>
 
</>

  )
}

export default Home