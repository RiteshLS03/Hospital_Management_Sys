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
const About = () => {
  return (
    <>
    {/* <div> */}
<div className="main">
  <div className="heading">
  <h1> 20+ Years of Excellence in <br />
  Women and Child Care</h1>
  <button className='contact'>Contact US</button>
  </div>



  <div className="imagediv">
<div className="col-md-4 colimage m-2">
 <div className="row p-2 ml-2">
 <img src={about} alt="" className='ab-image'/> 
 <span className='span2'>  <FaLocationDot />Lorem ipsum dolor sit amet. </span>
  </div>  
</div>
<div className="col-md-4 colimage m-2">
  <div className="row ml-2">
 <img src={about5} alt=""  className='ab-image' /> 
 <span className='span2'> <FaLocationDot /> Lorem ipsum dolor sit amet.  </span>
  </div>
</div>
<div className="col-md-4 colimage m-2">
  <div className="row ml-2">
  
 <img src={about3} alt=""  className='ab-image'/>
 <span className='span2'>  <FaLocationDot /> Lorem ipsum dolor sit amet.</span>
  </div>
</div>

</div>



<div className="row twoimage">
  <div className="col-sm-8">
    <div className="row">
    <div className="col-sm-6 about-col">
 <img src={ab} alt="" className='ab-image'/>
 <div className="location">

 <span>   <FaLocationDot />  Lorem ipsum dolor sit amet. </span>
 </div>
</div>

<div className="col-sm-6 about-coltwo">
  
<img src={about4} alt="" className='ab-image' />
<div className="location">
<span className='span2'>  <FaLocationDot />  Lorem ipsum dolor sit amet. </span>

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
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus dolorem vero reprehenderit labore beatae dolore id totam accusantium ullam cumque voluptatem illo autem, rerum iusto vitae est quae quaerat?<br />
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo nihil. Quae nisi alias dicta, <br />   nulla unde officia quos officiis, mollitia pariatur laudantium aut minima ratione repudiandae eius at rerum?</p>
<button className='browse'>Browse Our Experts <FaArrowTrendUp /></button>
  </div>

  <div className="col-md-8 colsecond">
    <h3>Healthcare Services for Women and Children - </h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit
. Modi fugit reiciendis eligendi nulla assumenda? Placeat doloribus facilis explicabo aut vero similique reiciendis! Ea beatae nesciunt quidem. Optio quos eos voluptatum.
Sint et magni vitae, culpa at suscipit eum hic? Facilis recusandae nemo ipsa laudantium expedita qui repellat? Corporis repellat, veniam enim adipisci quod maxime repudiandae id quasi, libero voluptas nisi!
Tenetur placeat blanditiis sapiente beatae commodi voluptatibus vitae quaerat provident reprehenderit aspernatur . <br />
 Voluptate dolorem placeat temporibus, quae quisquam suscipit quam sit explicabo molestiae ullam, perspiciatis doloribus consequuntur eius, iusto doloremque!
Consequuntur earum rem pariatur placeat mollitia odit maiores, voluptates inventore at labore excepturi officiis beatae quibusdam a dolorem animi soluta praesentium et, dolor perferendis! Excepturi aliquam totam commodi molestiae sit!
Nam quis sed minus qui, dignissimos veritatis et in quia debitis, saepe eveniet. Iure odit excepturi nostrum quasi, corporis, eaque explicabo ipsum inventore doloremque rem ullam perspiciatis. Vero, eius quod!</p>
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