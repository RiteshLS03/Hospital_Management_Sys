import React from 'react'
import './Department.css'
import lady from '../../../assets/lady.avif'
import { Link } from 'react-router-dom'
import ladytwo from '../../../assets/ladytwo.jpg'
const Department = () => {
  return (
    <div>

    <img src={lady} alt="" className='hero-disease'/>
      <h2 className='headdisease'>Department of Obstetrics</h2>
                <Link to="/book" > <button className='appointment'> Book an Appointment</button></Link>
                <div className="col-sm-12 m-3">
      <div className="row">
      <b className='infection'>  Best Pediatrician</b><br />

        <div className='damy-text'>
        The Department of Obstetrics at Shubham Hospital is a hub of excellence, dedicated to helping you with unconditional support and unparalleled care on one of the most beautiful journeys of your life. With a highly experienced and skilled team of Obstetricians, we leave no stone unturned in providing you with exceptional care throughout your pregnancy, labour and at the time of birthing. Our team   


        </div>
      </div>
    </div>


    <div className="row m-3 mt-5">
      <div className="col-sm-6">
        <img src={ladytwo} alt="" className='book-img' />
      </div>
      <div className="col-sm-6">
     <br />
 <p className='asthma-msg'>
 <b className='ashtma-head'>
 Expertise:?</b>
<br /> We strive to give our patients a supportive and compassionate environment since we understand that pregnancy and childbirth can be challenging for many women. We offer expertise in a variety of obstetrics services, such as:. <br />

General pediatricians work in close collaboration with experts from various pediatric specialities to curate the most effective treatment plans based on the thorough evaluation of every child. <br />

<b className='ashtma-head'>
Prenatal Care:</b> <br />
 It primarily focuses on providing comprehensive health support to women during the span of pregnancy. We offer personalized pre-natal care that encompasses routine check-ups, medical history evaluation, risk assessment, ultrasounds, scans, nutritional guidance and symptom management </p>

    
      </div>
    </div>


    <div className="row">
  <div className="col-sm-12">
  

  <h5 className='type-of'> Postpartum Care:</h5>

 <ul className='ul-list'> 
 <li className='li-style'>To help new moms recover swiftly after giving birth, we offer postpartum care to manage potential complications and provide lactation support, information on newborn care, and postpartum check-ups for both the mother and the child</li>



   <li className='li-style'> The neonatal intensive care unit offers unparalleled clinical excellence and specialised treatment for premature or critically ill newborns. Our NICU is manned by skilled healthcare professionals committed to giving your little one the best care possible.</li>

   <li  className='li-style'>Our department offers a comprehensive range of medical and surgical services tailored to every stage of a woman’s life journey.
   </li>
   <li className='li-style'>From early intrauterine life to adolescence, childbearing age and postmenopausal years, we provide expert care and support.</li>
</ul>
    <b className='consider'>Area of Expertise</b> 
    <br />
   <p className='paraofashtma'>Addressing recurrent pregnancy loss and bad obstetric history:</p>


  <ul className='ul-list'>
    <li className='li-style'> Managing high-risk pregnancies with medical complications</li>

 <li className='li-style'>Providing premarital, preconceptional and genetic counseling</li>
 <li className='li-style'>Expertise in high-risk gynaecological surgeries</li>
 <li className='li-style'>Management of primary and secondary infertility</li>
 <li className='li-style'> Menopause care</li>
 <li className='li-style'> Persistent couch
 </li>
 <li className='li-style'>  Abdominal discomfort</li>
 <li className='li-style'> Unusual rashes and bumps on the skin</li>
</ul>
 <b className='consider'>Obstetrics Services:​</b>
 <br />
 <p className='paraofashtma'>
 Normal and assisted vaginal deliveries</p>
<br />
  

 <ul className='ul-list'> <li>Painless deliveries with labour analgesia</li>
 <li className='li-style'>Management of high-risk pregnancies and critical care</li>
 <li className='li-style'>Premarital, prenatal and genetic counseling</li>
 <li className='li-style'>Lactation consultation</li>
 <li className='li-style'>Computed tomography or CT scan/</li>
 <li className='li-style'>Ultrasound</li>
 <li className='li-style'>Electromyogram or EMG</li>
 <li className='li-style'>Stress test</li>
 <li className='li-style'>ECMO</li>
 <li className='li-style'>Magnetic resonance imaging or MRI</li>
 <li className='li-style'>X-ray</li>


</ul>
 <b className='consider' > Gynaecological Services:</b> <br />
 <p className='paraofashtma'> Our dedicated team of pediatric experts specialize in offering the most comprehensive and personalized treatment approaches to manage a wide spectrum of health issues in kids. This involves: <br />

</p>

<ul className='ul-list'> 
 <li className='li-style'>Addressing gynaecological problems</li>
   <li className='li-style'>Contraceptive advice</li>
   <li  className='li-style'>Benign gynaecological surgeries including ovaries, cysts, fibroids and prolapse
   </li>
   <li className='li-style'>Screening for gynaecological cancers including executive health check-ups.</li>
   <li className='li-style'>Endoscopic surgeries</li>
   <li className='li-style'>Infertility investigations and management</li>

</ul>

  </div>
</div>




<div className="container-fuild accordians mt-5">
<div className="accordion " id="accordionExample">
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <div className='question'>Frequently Asked Questions</div>
      <button className="accordion-button me-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong className='head-of-accordian'>What is the right age to start seeing a Gynaecologist?</strong>      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
      Experts suggest that girls should start seeing a gynaecologist at least once a year, after crossing 13 to 15 years of age. It is even more important if she is experiencing problems related to periods.      </div>
    </div>
  </div>
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className='head-of-accordian'> When should I consider consulting a Gynaecologist?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You should consider seeing a doctor if you have been experiencing any of the following symptoms:
      <ul className='ul-list'> 
 <li className='li-style'>Pain during periods</li>
   <li className='li-style'>Heavy menstrual flow.</li>
   <li  className='li-style'>Missing periods for more than 90 days</li>

   <li className='li-style'>Itching or burning sensation in the vagina</li>
   <li className='li-style'>Abnormal uterine bleeding</li>

</ul>
            </div>
    </div>
  </div>

  
  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className='head-of-accordian'>  Why is Gynaecological screening important?</strong>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Gynaecological screening plays a crucial role in helping you maintain optimal reproductive and overall health. These involve a series of tests and regular examinations that can help to assess your risks of developing serious health conditions, enabling you to take necessary measures to alleviate the same. Regular gynaecological screening is also important for catching early signs of various gynaecological problems, making it possible to facilitate timely treatment and effective management.      </div>
    </div>
  </div>

  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      <strong className='head-of-accordian'>  What to expect after Hysterectomy?</strong>      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Women undergoing abdominal hysterectomy are generally discharged within 2 to 3 days, whereas those undergoing laparoscopic/robotic hysterectomy can go home on the very next day. 
      <ul className='ul-list'> 
 <li className='li-style'>Complete recovery takes around 6 to 8 weeks. </li>
   <li className='li-style'>Since the uterus is removed, you can no longer conceive or have periods. </li>
   <li  className='li-style'>Pain and soreness may be experienced in the pelvic and abdominal area, which can be managed with prescribed medication </li>

   <li className='li-style'>You may experience hot flashes and mood swings, which are normal and temporary. </li>
   <li className='li-style'>Rigorous physical activities are to be avoided unless recommended by your doctor</li>

</ul>
      
            </div>
    </div>
  </div>

  <div className="accordion-item p-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      <strong className='head-of-accordian'>  Is it normal if I miss my periods?
</strong>      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Missing your period is often a sign that you are pregnant. However, if you have not conceived, it isn't generally a concern unless you miss your periods for 3 months or more in a row. In such cases, it is advisable to see a doctor.      </div>
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
  )
}

export default Department