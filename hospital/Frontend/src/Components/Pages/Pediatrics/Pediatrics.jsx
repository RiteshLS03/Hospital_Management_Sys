import React from 'react'
import './Pediatrics.css'
import peditrics from '../../../assets/peditrics.webp'
import { Link } from 'react-router-dom'
import ashtma from '../../../assets/ashtma.jpg'
const Pediatrics = () => {
  return (<>
    <div>


<img src={peditrics} alt="" className='hero-image'/>

<h1>Asthma Treatment</h1>

  <Link to="/book" > <button className='appointment'> Book an Appointment</button></Link>


    <div className="col-sm-12 m-3">
      <div className="row">
        <div>
          Asthma Treatment
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nam unde rerum officiis inventore repellat accusantium reprehenderit? Reiciendis nesciunt, sint provident maxime tempora harum sunt, explicabo ab nostrum incidunt adipisci!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptas ullam eligendi illo soluta nobis temporibus deleniti quia, voluptate molestias. Consequuntur dolore nam maxime autem quam praesentium, sit saepe dolor.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate vero eaque et minus dolore esse velit quasi quod tenetur, vel perferendis, animi aliquid maxime quisquam magnam sit. Aliquam, reiciendis!
        </div>
      </div>
    </div>

    
    <div className="row m-3 mt-5">
      <div className="col-sm-6">
        <img src={ashtma} alt="" className='ashtma-img' />
      </div>
      <div className="col-sm-6">
     <br />
 <p className='asthma-msg'>
 <b className='ashtma-head'> What is Asthma?</b>
<br /> Asthma is a chronic condition marked by inflammation in the lungs as a result of reaction to external factors and allergens. <br />

Regular monitoring, proper treatment and taking necessary preventive measures can help to ensure that pediatric asthma does not negatively impact your childs life. <br />

Pediatricians are key players in the management of childhood asthma, offering advice on drug use, dietary modifications, and emergency care. <br /> 

Regular monitoring, proper treatment and taking necessary preventive measures can help to ensure that pediatric asthma does not negatively impact your childs life. <br />
Regular monitoring, proper treatment and taking necessary preventive measures can help to ensure that pediatric asthma does not negatively impact your childs life. <br /></p>
      </div>
    </div>


<div className="row">
  <div className="col-sm-12">
  

  <h5 className='type-of'> Types of Asthma:</h5>
 <p className='ashtma-para'>Asthma can be broadly classified into 3 different types based on the underlying cause:</p> <br />

 <ul className='ul-list'> <li className='li-style'> Allergic asthma, which is triggered by a reaction to various allergens like dust, mites, pollen and moulds.</li>
   <li className='li-style'>Non-allergic asthma, which is caused by environmental factors and underlying conditions like smoke, flu, cold and inhalation of cold air.</li>
   <li  className='li-style'>Exercise-induced asthma, which is a result of exertion while indulging in a rigorous physical activity
   </li>
</ul>
    <b className='consider'>When should you consider seeing our experts?</b> 
    <br />
   <p className='paraofashtma'>It is important to seek proper medical help for timely evaluation and treatment if your little one is experiencing any of the following symptoms related to asthma:</p>


  <ul className='ul-list'>
    <li className='li-style'> Tightness in the chest</li>

 <li className='li-style'> Persistent coughing that aggravates in the morning</li>
 <li className='li-style'> Night time coughing</li>
 <li className='li-style'> Fatigue and tiredness</li>
 <li className='li-style'> Development of dark circles and sunken eyes</li>
 <li className='li-style'> Irritability and crankiness
 </li>
 <li className='li-style'>  Wheezing while breathing</li>
 <li className='li-style'>  Problem with latching and feeding in infants</li>
</ul>
 <b className='consider'>What causes Asthma?</b>
 <br />
 <p className='paraofashtma'>
Numerous factors, including genetics, environmental variables and viral infections, might contribute to childhood asthma.

Asthma is more likely to occur in kids who have allergies, asthma, or eczema in their family. Asthma symptoms can also be brought on by exposure to pollutants, dust mites, pet dander, and pollen, as well as secondhand smoke.

Underlying respiratory illnesses like the flu and common cold are also known to trigger and aggravate the symptoms of an asthma attack.
</p>
<br />
  <b className='consider' >How do we diagnose your little one?</b>
  <br />
<p className='paraofashtma'>Our expert Pediatricians employ a range of techniques to assess and diagnose children presenting with asthma symptoms. These include:</p>

 <ul className='ul-list'> <li>Evaluation of the child’s medical history</li>
 <li className='li-style'>Assessing the medical history of parents</li>
 <li className='li-style'>Physical assessment and symptom evaluation</li>
 <li className='li-style'>Lung function tests or LFT</li>
 <li className='li-style'>Spirometry</li>
 <li className='li-style'>Allergy testing</li>
</ul>
 <b className='consider' > Asthma Management for children at Surya Hospitals:</b> <br />
 <p className='paraofashtma'> Our expert Pediatricians, at Surya Hospitals, collaborate with families to create an action plan for asthma that specifies what to do in the event that a child has asthma symptoms or an asthma attack. This strategy will outline how to take medications, when to seek emergency medical attention, and how to deal with triggers like allergens and pollutants. <br />

Medication may be prescribed to treat and manage asthma symptoms. Families will be consulted to determine the best treatments and dosages for each child, as well as to keep an eye out for any potential adverse effects. <br />

Our experts also offer information and counselling on how to manage a child's asthma, including lifestyle modifications like avoiding triggers, remaining active, and eating a balanced diet. Additionally, they might offer advice on how to correctly utilize inhalers and other drugs, as well as how to identify and handle asthma symptoms <br /></p>
  </div>
</div>


<div className="container-fuild accordians mt-5">
<div className="accordion " id="accordionExample">
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <div className='question'>Frequently Asked Questions</div>
      <button className="accordion-button me-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong className='head-of-accordian'>How are Asthma Symptoms managed in youngsters?</strong>      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
      A combination of medication and lifestyle modifications is used for managing asthma symptoms in youngsters.      </div>
    </div>
  </div>
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className='head-of-accordian'>  Do children with Asthma need emergency care?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Although not all, but some children with asthma may need emergency care if their symptoms worsen and become unmanageable.      </div>
    </div>
  </div>

  
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className='head-of-accordian'>  Can lifestyle modifications help to manage Pediatric Asthma?</strong>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, certain lifestyle modifications can help to manage asthma in some cases. You will be briefed about these by your child’s pediatrician based on their specific symptoms.       </div>
    </div>
  </div>

  
</div>
</div>
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
      
      
      
      </>
    )
}

export default Pediatrics