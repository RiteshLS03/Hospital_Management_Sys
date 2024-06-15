import React from 'react'
import './Page.css';
import baby4 from '../../assets/baby4.avif'
import { Link } from 'react-router-dom';
const Page = () => {
  return (
    <div>

        <div className="container-fuild pages">

           <div className="col-sm-12"> <img src={baby4} alt=""  className="babythree" /></div>
          

           
        </div>
        <div className='page-div'>
        <h3 className='page-head'>Meet Nikita</h3>
        <p className='para-page'>Nikita's journey is a testament to the power of resilience and dedicated care. Born at just 22 weeks and weighing a mere 610 grams, he faced immense challenges from the start. Admitted to Shubham Hospital on an emergency basis, he was immediately placed in the Intensive Care Unit and supported by an incubator to aid his breathing. Nirvaan's underdeveloped lungs required multiple doses of surfactant injections to facilitate expansion, and he bravely battled complications like pneumothorax and brain bleeds. Despite the odds stacked against him, Nirvaan's spirit remained unwavering, fueled by the finest care provided by our team. After 132 days of fighting, Nikita emerged victorious, discharged from the hospital weighing 3.8 kg and in good health. His remarkable journey is a beacon of hope and inspiration for all, showcasing the remarkable resilience of the human spirit in the face of adversity.
        Throughout his 132-day stay at Surya Hospital, Nirvaan's progress was nothing short of miraculous. Each day was a testament to his resilience and the unwavering commitment of our team to his well-being. With each passing day, Nirvaan grew stronger, his tiny frame gaining strength and vitality.
        Finally, after months of intensive care and unwavering determination, Nirvaan was discharged from the hospital, weighing a healthy 3.8 kg. His journey from a fragile newborn to a thriving infant is a testament to the power of hope, perseverance, and compassionate care. As he leaves our hospital, Nikita carries with him not just the weight of his miraculous survival, but also the boundless potential for a bright and promising future.






        </p>
        </div>
        
<div className="need-help">
    
    <div className="row">
        
          <div className="col-sm-8">
            <div className='need-head'> Still Need Help?</div>
            <div className='need-para'> Looking for assistance? Reach out to us at Subham Hospitals. We're here to provide personalized care and genuine support every step of the way. Whether you have questions or need guidance, <br /> our team is more than just healthcare providers.
            </div>
          </div>
          <div className="col-sm-4">
          {/* <button className='contact-button'>Contact Us</button> */}
          <Link to="/contact"><button className='contact-button'>Contact Us</button></Link>

    
          </div>
          </div>
    
          </div>
    </div>
  )
}

export default Page