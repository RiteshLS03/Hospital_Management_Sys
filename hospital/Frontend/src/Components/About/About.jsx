import React from 'react'
import './About.css'
import about from '../../assets/about.avif';
import about5 from '../../assets/about5.avif';
import about3 from '../../assets/about3.avif';
import ab from '../../assets/ab.avif';
import about4 from '../../assets/about4.avif';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import aboutmain from '../../assets/aboutmain.jpg';
import cor from '../../assets/cor.avif';
import cor2 from '../../assets/cor2.jpg';
import cor3 from '../../assets/cor3.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
    {/* <div> */}
<div className="main">
  <div className="heading">
  <h1> 20+ Years of Excellence in <br />
  Women and Child Care</h1>
  {/* <button className='contact'>Contact US</button> */}
  <Link to="/contact">  <button className='contact'>Contact Us</button></Link>

  </div>



  <div className="imagediv">
<div className="col-md-4 colimage m-2">
 <div className="row p-2 ml-2">
 <img src={about} alt="" className='ab-image'/> 
 <span className='span2'>  <FaLocationDot />PISO. </span>
  </div>  
</div>
<div className="col-md-4 colimage m-2">
  <div className="row ml-2">
 <img src={about5} alt=""  className='ab-image' /> 
 <span className='span2'> <FaLocationDot /> Nursing Care.  </span>
  </div>
</div>
<div className="col-md-4 colimage m-2">
  <div className="row ml-2">
  
 <img src={about3} alt=""  className='ab-image'/>
 <span className='span2'>  <FaLocationDot /> Ours Services.</span>
  </div>
</div>

</div>



<div className="row twoimage">
  <div className="col-sm-8">
    <div className="row">
    <div className="col-sm-6 about-col">
 <img src={ab} alt="" className='ab-image'/>
 <div className="location">

 <span>   <FaLocationDot />  ours services </span>
 </div>
</div>

<div className="col-sm-6 about-coltwo">
  
<img src={about4} alt="" className='ab-image' />
<div className="location">
<span className='span2'>  <FaLocationDot />  Ours services </span>

</div>
   
</div>
    </div>
  </div>
</div>





</div>
{/* healthcare session start */}

<div className="health">
  <div className="col-md-4 colfirst me-2">
    <h2>More than Healthcare, it's a Promise:</h2>
<p>Shubham Hospitals excellence in healthcare services tailored for the unique needs of women and children. With a storied legacy, we have expanded into a distinguished network of hospitals, earning a reputation as a beacon of trust and compassion. We are honored to be the preferred choice for patients seeking top-tier care, as we strive to nurture healthy beginnings and foster bright futures for every individual under our care.</p> 
 <Link to="/doctor"> <button className='browse'>Browse Our Experts <FaArrowTrendUp /></button></Link>
 {/* <Link to="/contact">  <button className='contact'>Contact Us</button></Link> */}


  </div>

  <div className="col-md-8 colsecond">
    <h3>Healthcare Services for Women and Children - </h3><p> our dedication to providing exceptional healthcare services for women and children has been unwavering. Embracing the latest medical advancements and cutting-edge technology, we consistently deliver best-in-class clinical outcomes and patient experiences. From our humble beginnings as a 22-bed pediatric nursing home in Mumbai, we have grown into a prominent chain of hospitals, proudly recognized as one of Asia's fastest-growing single-specialty hospital chains. Recent milestones, such as the launch of our Chembur unit , underscore our commitment to expanding access to high-quality care. <br />
    In addition to our clinical services, we prioritize knowledge dissemination through government-approved academic courses in Pediatrics, Gynaecology, and Obstetrics. This initiative has established us as one of Western India's largest academic institutes in these specialized fields. As we continue to grow, our dedication to enhancing the patient experience remains steadfast. We are committed to introducing more super-specialty services, further strengthening our leadership in neonatal and pediatric care, asas well as women's healthcare.
    </p>
  </div>
</div>

<div className="container">
  <img src={aboutmain} alt="" className='about-main' />
</div>


{/* main mission start here  */}

<h1 className='about-mission'>Our Mission</h1> <br />

<p className="text">
We aim to provide “excellence” in healthcare through the 
highest standards of expertise and strive towards empowering people to make better health choices.</p>




<div className="container contain-about">
  <div className="row">
  
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={cor} class="d-block about-cor-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={cor2} class="d-block about-cor-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={cor3} class="d-block about-cor-image" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
  
  </div>
</div>
</>
    
  )
}

export default About