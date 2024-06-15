import React from 'react'
import './Ophthalmology.css'
import eye from '../../../assets/eye.avif'
import eyetwo from '../../../assets/eyetwo.jpg'

import { Link } from 'react-router-dom'
const Ophthalmology = () => {
  return (
    <div>

                <img src={eye} alt="" className='hero-disease'/>
                <h2 className='headdisease'>Ophthalmology</h2>
                <Link to="/book" > <button className='appointment'> Book an Appointment</button></Link>
                <div className="col-sm-12 m-3">
      <div className="row">
      <b className='infection'>  Ophthalmology</b><br />

        <div className='damy-text'>
        At Ophthalmology Department, we focus on comprehensive eye care, dedicated to preserving and enhancing your vision


        </div>
      </div>
    </div>


    <div className="row m-3 mt-5">
      <div className="col-sm-6">
        <img src={eyetwo} alt="" className='book-img' />
      </div>
      <div className="col-sm-6">
     <br />
    <p className='asthma-msg'>
            <b className='ashtma-head'>
            1. Cataract Surgery:</b>
            <br /> Phacoemulsification & Foldable / Bifocal / Multifocal / Toric IOL with state of the art Pharos Cataract Phacoemulsification system Femto assisted cataract surgery and Micro incision Cataract surgery. <br />

 <br />

            <b className='ashtma-head'>
         </b>            Eye bank and facilities for Lameller Corneal Transplants, Penetrating Corneal Transplants available.
 <br />
            From minor, self-limiting conditions like the common cold and flu, to more serious, possibly fatal conditions like HIV/AIDS, TB, and Ebola, infectious diseases can range in their severity. <br /> While certain infectious infections can be treated with antibiotics or antiviral drugs, others can be prevented by immunisation and taking necessary precautions. </p>

    
      </div>
    </div>

    <div className="row">
  <div className="col-sm-12">
  

  <h5 className='type-of'>  Salient Features:</h5>

 <ul className='ul-list'> 
 <li className='li-style'>OT with HEPA Filter & structured sterile area.</li>
   <li className='li-style'>Treatment of acute diseases like gastrointestinal infections and respiratory tract infections.</li>
   <li  className='li-style'>Steam Vac Cleaning, Routine Culture sampler and Deep cleaning done at regular intervals.

   </li>
   <li className='li-style'>Sturdy autoclaves, ETO sterlizer with automated sealing machines.
</li>
</ul>
    <b className='consider'>Instruments Available:</b> 
    <br />
   <p className='paraofashtma'>Intacs and Corneal Transplant patients available.
</p>


  <ul className='ul-list'>
    <li className='li-style'> Retinoscopy</li>

 <li className='li-style'>Lens star / A-scan</li>
 <li className='li-style'>Automated Perimetry (HFA / Humphrey)</li>
 <li className='li-style'>Corneal Topography Keratron Scout Galilei G4
</li>
 <li className='li-style'> HRT3 (Heidelberg)
</li>
 <li className='li-style'>Green Laser (Iridex)


 </li>
 <li className='li-style'>  Rebound Tonometer
</li>
 <li className='li-style'> Synaptophore</li>
 <li className='li-style'>Chart Projector
</li>
<li className='li-style'>LASIK-Cutting edge Technology

</li>
<li className='li-style'>Phakic IOL assessment & Surgery


</li>
</ul>
 
 <b className='consider' > Service Available:
</b> <br />
 <p className='paraofashtma'> Trained technicians with computerized medical records.
 <br />

</p>

<ul className='ul-list'> 
 <li className='li-style'><b className='text-danger'>Cataract Surgery:</b></li>
 <p className='paraofashtma'>Phacoemulsification & Foldable / Bifocal / Multifocal / Toric IOL with state of the art Pharos Cataract Phacoemulsification system Femto assisted cataract surgery and Micro incision Cataract surgery.</p>
   <li className='li-style'><b className='text-danger'>Laser Vision Correction Surgery</b></li>
   <p className='paraofashtma'>Refractive surgery – Removal of spectacle number (+or-) with Excimer Laser (LASIK, Schwind) with six dimensional eye tracker with wave front.</p>
   <li  className='li-style'><b className='text-danger'>Glaucoma:</b>
   </li>
   <p className='paraofashtma'>Rebound, Tonometry, Autoperimetry, Digital Gonioscopy, Argon Laser trabeculoplasty with Glaucoma Surgeries,HRT III Optic nerve head scan Available. MIGS surgery available.</p>

   <li className='li-style'> <b className='text-danger'>atina & UVEITIS:</b></li>

   <p className='paraofashtma'>State of the art digital Fundus photography and FFA (Fundus fluorescein Angiography), B-Scan, Green Laser,Confocal Retinal Scan and Retinal surgery.</p>
   <li className='li-style'> <b className='text-danger'>CORNEA:</b></li>
   <p className='paraofashtma'>Corneal graft surgery (Corneal Transplant) Lamellar Corneal Surgeries, Penetrating Keratoplasty (Pkp’s), Corneal InTacs, PDEK, DMEK, DALK, Inlays to correct presbyopia, Corneal Confocal Microscopy.</p>

   <li className='li-style'> <b className='text-danger'>OCULOPLASTY:</b>
</li>
   <p className='paraofashtma'>Eye bags (Swelling of lids), Ptosis Corrections (drooping of eyelids), Eyelid Abnormalities.

</p>
<li className='li-style'> <b className='text-danger'>SQUINT:</b></li>

   <p className='paraofashtma'>Assessment of squint, exercises & Surgical Treatment Available.

</p>

</ul>

  </div>
</div>
<div className="need-help">
    
    <div className="row">
        
          <div className="col-sm-8">
            <div className='need-head'> Still have a Question</div>
            <div className='need-para'> It's important to maintain a balance between curiosity about your health and seeking professional advice to address any concerns. While curiosity can drive understanding, consulting experts ensures accurate information and appropriate guidance. If you have health-related inquiries, it's wise to reach out to healthcare professionals for reliable answers and reassurance.
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

export default Ophthalmology