import React from 'react'
import './Diseases.css'
import disease from '../../../assets/disease.avif'
import { Link } from 'react-router-dom';
import cold from '../../../assets/cold.jpg'
const Diseases = () => {
  return (
    <div>
               
        <img src={disease} alt="" className='hero-disease'/>

        <h2 className='headdisease'>Infectious Diseases</h2>
                <Link to="/book" > <button className='appointment'> Book an Appointment</button></Link>
                <div className="col-sm-12 m-3">
      <div className="row">
      <b className='infection'>  Infection Diseases </b><br />

        <div className='damy-text'>
        Our treatments are personalized, informed by precise assessments and diagnoses conducted in our dedicated labs. Additionally, we offer supportive treatments such as intravenous nutritional support and oxygen therapy for cases requiring a more comprehensive approach to potentially serious infections. Your child's health and well-being are our top priorities, and we are committed to providing the highest standard of care at every step of their treatment journey.
        our Department of Pediatrics is dedicated to providing comprehensive and exceptional medical care for the management of various infectious diseases in children. We adhere to strict protocols for infection control to prioritize the safety of your little ones.
        </div>
      </div>
    </div>

    <div className="row m-3 mt-5">
      <div className="col-sm-6">
        <img src={cold} alt="" className='ashtma-img' />
      </div>
      <div className="col-sm-6">
     <br />
 <p className='asthma-msg'>
 <b className='ashtma-head'>
What is Infectious Diseases?</b>
<br /> Infectious diseases encompass a range of illnesses caused by the invasion of harmful microorganisms or pathogens into the body. These pathogens include viruses, bacteria, fungi, and parasites, among others. <br /> Infectious diseases can vary widely in severity, from minor and self-limiting conditions such as the common cold and flu to more serious and potentially fatal illnesses like HIV/AIDS, tuberculosis, and Ebola. <br />Treatment for infectious diseases may involve antibiotics or antiviral drugs, depending on the specific pathogen involved.  <br /> Additionally, preventive measures such as immunization and practicing good hygiene can help reduce the risk of contracting certain infectious diseases. </p>
      </div>
    </div>

   

   

<div className="row">
  <div className="col-sm-12">
  

  <h5 className='type-of'>Types of Infectious Diseases:</h5>
 <p className='ashtma-para'>There is a wide spectrum of infectious diseases that can affect children. The most common types include:</p> <br />

 <ul className='ul-list'> <li className='li-style'>Respiratory infections, that target the organs and structures of the respiratory gland. These include common cold, influenza and bronchiolitis.</li>
   <li className='li-style'>Gastrointestinal infections, which are typically caused by viruses and bacteria, and characterized by symptoms like diarrhea and vomiting.</li>
   <li  className='li-style'> <strong className='text-success'>Chickenpox:</strong> It is a very common and contagious viral infection in kids, characterized by high fever and development of itchy rashes all over the body
   </li>
   <li className='li-style'> <strong className='text-success'>Measles:</strong> It is a viral and highly contagious infection that affects kids. It can be easily prevented with vaccination.</li>
   <li  className='li-style'> <strong className='text-success'>Mumps:</strong>  It is a viral infection marked by the swelling of the parotid glands that are present on each side of the face.
   </li>
   <li  className='li-style'> <strong className='text-success'>Pertussis: </strong>Commonly referred to as whooping cough, the bacterial infection is characterized by persistent cough and respiratory problems.
   </li>
   <li className='li-style'> <strong className='text-success'> Rotavirus:</strong> The viral infection generally affects infants and small children and is characterized by severe diarrhea and vomiting.</li>
   <li  className='li-style'> <strong className='text-success'>Strep Throat:</strong>  It is a bacterial infection caused by Streptococcus pyogenes. It targets the throat and tonsils, leading to throat soreness and discomfort.
   </li>
   <li  className='li-style'> <strong className='text-success'> Pneumonia:</strong> It is a serious infection marked by inflammation of air sacs in either one or both lungs. 
   </li>
   

</ul>
    <b className='consider'>When should you consider seeing our experts?</b> 
    <br />
   <p className='paraofashtma'>It is crucial to go for proper medical evaluations if your little one is experiencing any of the following symptoms:

:</p>


  <ul className='ul-list'>
    <li className='li-style'> Persistent fever</li>

 <li className='li-style'> Coughing and sneezing</li>
 <li className='li-style'>Runny/stuffy nose</li>
 <li className='li-style'>Throat soreness and discomfort</li>
 <li className='li-style'>Discharge from ears</li>
 <li className='li-style'> Diarrhea and vomiting
 </li>
 <li className='li-style'>Breathing difficulties</li>
 <li className='li-style'> Headaches</li>
 <li className='li-style'> Visible spots and rashes</li>

</ul>
 <b className='consider'>What causes Infectious Diseases?</b>
 <br />
 <p className='paraofashtma'>
 Infectious diseases are caused by the invasion of harmful pathogens like bacteria, viruses, fungi and parasites. These can either spread via direct contact or indirect contact. The most common modes of transmission include:


</p>

<ul className='ul-list'>
    <li className='li-style'> Direct contact with an infected person.</li>

 <li className='li-style'>Hugging or kissing an infected person.</li>
 <li className='li-style'>Infected mucus droplets. </li>
 <li className='li-style'>Animal and insect bites.</li>
 <li className='li-style'>Contaminated food and water.</li>
 <li className='li-style'> Playing with soil.
 </li>
 <li className='li-style'>From an infected mother to her baby.</li>
 

</ul>


<br />
  <b className='consider' >How do we diagnose your little one?</b>
  <br />
<p className='paraofashtma'>There is a wide range of diagnostic interventions that may be used for detecting infectious diseases. These include:</p>

 <ul className='ul-list'> <li>Medical history analysis</li>
 <li className='li-style'>Physical examination
</li>
 <li className='li-style'>Symptom evaluation</li>
 <li className='li-style'>Blood tests</li>
 <li className='li-style'>Serum test</li>
 <li className='li-style'>Antibody testing</li>
</ul>
 <b className='consider' > How we treat your little one</b> <br />
 <p className='paraofashtma'>There is a wide range of diagnostic interventions that may be used for detecting infectious diseases. These include:</p>

<ul className='ul-list'> <li>Antibiotic treatments</li>
<li className='li-style'>Antiviral therapy
</li>
<li className='li-style'>Intravenous fluids</li>
<li className='li-style'>Oxygen therapy.</li>
<li className='li-style'>Nutritional support</li>

</ul>
  </div>
</div>


<div className="container-fuild accordians mt-5">
<div className="accordion " id="accordionExample">
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <div className='question'>Frequently Asked Questions</div>
      <button className="accordion-button me-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong className='head-of-accordian'>How can infectious diseases be prevented in kids?</strong>      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body p-2">
        
      Good hygiene practices including routine hand washing, covering the mouth while coughing or sneezing, and avoiding direct contact with sick people can stop the spread of infectious diseases. In kids, infectious diseases can be prevented by   
      <ul className='ul-list'> <li>Immunisation</li>
<li className='li-style'>Respiratory Protocol
</li>
<li className='li-style'>Safe food handling</li>
<li className='li-style'>clean living conditions.</li>
<li className='li-style'>maintaining immunisation records</li>

</ul>   </div>
    </div>
  </div>
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className='head-of-accordian'>What are the symptoms of pneumonia in kids?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body p-2">
      Various symptoms that have been associated with pneumonia in kids include:
      <ul className='ul-list'> <li>high fever</li>
    <li className='li-style'>cough
    </li>
    <li className='li-style'>Chills</li>
    <li className='li-style'>Breathlessness.</li>
    <li className='li-style'>wheezing while breathing</li>
    <li className='li-style'>chest discomfort</li>

</ul>
          </div>
          </div>
  </div>

  
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className='head-of-accordian'>  Is it important to vaccinate kids?</strong>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, it is extremely important to vaccinate kids as this helps to protect them against the risks of serious, life-threatening infections.      </div>
    </div>
  </div>


  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      <strong className='head-of-accordian'>  Can a child develop the same infection more than once?</strong>      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, there are certain infections that a child can develop more than once, while others do not generally recur.       </div>
    </div>
  </div>
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      <strong className='head-of-accordian'> How common is pneumonia in kids?</strong>      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Pneumonia is very common in kids, affecting around 150 to 156 million kidneys who are under 5 years old.       </div>
    </div>
  </div>
  
</div>
</div>


<div className="need-help">
    
    <div className="row">
        
          <div className="col-sm-8">
            <div className='need-head'> Still have a Question</div>
            <div className='need-para'> Looking for assistance?  We're here to provide personalized care and genuine support every step of the way. Whether you have questions or need guidance, our team is more than just healthcare providers <br /> we're your dedicated companions on your journey to wellness.
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

export default Diseases