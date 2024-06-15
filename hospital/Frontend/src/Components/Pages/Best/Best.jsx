import React from 'react'
import './Best.css'
import best from '../../../assets/best.avif'
import { Link } from 'react-router-dom'
import bestone from '../../../assets/bestone.avif'
const Best = () => {
  return (
    <div>
      <div id="center">
        <a href="#center">Center of execellence</a>
        <img src={best} alt="" className='hero-disease'/>

        <h2 className='headdisease'>Best Pediatrician</h2>
                <Link to="/book" > <button className='appointment'> Book an Appointment</button></Link>
                <div className="col-sm-12 m-3">
      <div className="row">
      <b className='infection'>  Best Pediatrician</b><br />

        <div className='damy-text'>
        Our hospital is proud to house a dedicated Department of Pediatrics, where we provide specialized care for a wide range of health issues in children. Our team comprises experts with extensive training and experience in pediatric medicine, ensuring that your child receives the highest standard of care. We understand the importance of creating a child-friendly environment, and our services are tailored to ensure the comfort and well-being of your little ones throughout their journey to good health. At our hospital, we strive to make every moment of your child's care experience worth cherishing.

        </div>
      </div>
    </div>

    <div className="row m-3 mt-5">
      <div className="col-sm-6">
        <img src={bestone} alt="" className='book-img' />
      </div>
      <div className="col-sm-6">
     <br />
      <p className='asthma-msg'>
      <b className='ashtma-head'>
      What is General Pediatrics?</b>
      <br /> General Pediatrics is the field of medicine that focuses on addressing the wide spectrum of health issues that affect infants, toddlers, adolescents and teens. <br />

      General pediatricians work in close collaboration with experts from various pediatric specialities to curate the most effective treatment plans based on the thorough evaluation of every child. <br />

      <b className='ashtma-head'>
      What does General Pediatrics involve?</b> <br />
      From minor, self-limiting conditions like the common cold and flu, to more serious, possibly fatal conditions like HIV/AIDS, TB, and Ebola, infectious diseases can range in their severity. <br /> While certain infectious infections can be treated with antibiotics or antiviral drugs, others can be prevented by immunisation and taking necessary precautions. </p>

    
      </div>
    </div>


    
<div className="row">
  <div className="col-sm-12">
  

  <h5 className='type-of'> It includes:</h5>

 <ul className='ul-list'> 
 <li className='li-style'>Conducting well-child exams to detect potential health risks and diagnosing and concerning health issues</li>
   <li className='li-style'>Treatment of acute diseases like gastrointestinal infections and respiratory tract infections.</li>
   <li  className='li-style'>Developmental screening for tracking the childs progress through developmental milestones
   </li>
   <li className='li-style'>Management of chronic conditions in kids such as diabetes, allergies, asthma and autoimmune abnormalities.</li>
</ul>
    <b className='consider'>When should you consider seeing our experts?</b> 
    <br />
   <p className='paraofashtma'>You should consider seeing our specialists if your child is presenting with any unusual symptoms. These include:</p>


  <ul className='ul-list'>
    <li className='li-style'> Fever that lasts for more than 3 days</li>

 <li className='li-style'>Irritability and crankiness</li>
 <li className='li-style'>Loss of appetite</li>
 <li className='li-style'>Reduced urine output</li>
 <li className='li-style'> Dark and pungent-smelling urine</li>
 <li className='li-style'> Persistent couch
 </li>
 <li className='li-style'>  Abdominal discomfort</li>
 <li className='li-style'> Unusual rashes and bumps on the skin</li>
</ul>
 <b className='consider'>How we diagnose your little one</b>
 <br />
 <p className='paraofashtma'>
 Based on the symptoms and physical evaluation the child may need to undergo further screening or tests to confirm the diagnosis. Various diagnostic interventions that may be recommended by our pediatric experts:
</p>
<br />
  

 <ul className='ul-list'> <li>Blood & urine tests</li>
 <li className='li-style'>Angiogram</li>
 <li className='li-style'>Pulse oximetry</li>
 <li className='li-style'>Auditory testing</li>
 <li className='li-style'>Computed tomography or CT scan/</li>
 <li className='li-style'>Ultrasound</li>
 <li className='li-style'>Electromyogram or EMG</li>
 <li className='li-style'>Stress test</li>
 <li className='li-style'>ECMO</li>
 <li className='li-style'>Magnetic resonance imaging or MRI</li>
 <li className='li-style'>X-ray</li>


</ul>
 <b className='consider' > Treatments:</b> <br />
 <p className='paraofashtma'> Our dedicated team of pediatric experts specialize in offering the most comprehensive and personalized treatment approaches to manage a wide spectrum of health issues in kids. This involves: <br />

</p>

<ul className='ul-list'> 
 <li className='li-style'>Treatment and symptom relief with medication</li>
   <li className='li-style'>Lifestyle and dietary modifications</li>
   <li  className='li-style'>Laparoscopic and conventional surgeries
   </li>
   <li className='li-style'>Regular health assessments and monitoring.</li>
</ul>

  </div>
</div>


<div className="container-fuild accordians mt-5">
<div className="accordion " id="accordionExample">
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <div className='question'>Frequently Asked Questions</div>
      <button className="accordion-button me-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong className='head-of-accordian'>How often should a newborn be fed?</strong>      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
      It is advisable to feed your newborn around 1 to 2 ounces of milk every 2 to 3 hours.      </div>
    </div>
  </div>
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className='head-of-accordian'> Is it normal if a baby does not wake up to feed at night?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, it is quite common for babies to wake up less frequently for feeding as they grow, this is due to the development of healthy sleeping patterns. If the baby presents with other unusual symptoms alongside, you should consider seeing an expert.       </div>
    </div>
  </div>

  
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className='head-of-accordian'>  What are the common indications to see a Pediatrician?</strong>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Common indications that may call for the need to see a pediatrician include fever, breathlessness, vomiting, cough, loss of appetite, crankiness and irritability.      </div>
    </div>
  </div>

  
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
    </div>
  )
}

export default Best