import React from 'react'
import './Page.css';
import baby4 from '../../assets/baby4.avif'
const Page = () => {
  return (
    <div>

        <div className="container-fuild pages">

           <div className="col-sm-12"> <img src={baby4} alt=""  className="babythree" /></div>
          

           
        </div>
        <div className='page-div'>
        <h3 className='page-head'>Meet Nikita</h3>
        <p className='para-page'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt nemo, ab nihil, excepturi animi voluptates quos nulla libero recusandae vero natus voluptatibus a neque reprehenderit voluptas minima praesentium.  Magni! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima  quam nobis dolorem, tenetur obcaecati dolore ad alias aut perspiciatis sint quae minus perferendis dolorum itaque fuga. Sunt aliquam maxime accusantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quidem dicta perspiciatis repellendus qui sint natus eligendi. Magni aliquam odit ut provident. Magnam aspernatur adipisci sint voluptatum inventore vitae voluptas?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta corporis ab error quia odio, dignissimos ipsa illo eveniet doloribus omnis dolor molestiae vitae aspernatur, excepturi earum laborum quibusdam magni!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum nulla corrupti alias commodi adipisci distinctio laboriosam at soluta totam porro debitis officiis quasi non quisquam natus facere, ipsa sed?
        </p>
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
          <button className='contact-button'>Contact Us</button>
    
          </div>
          </div>
    
          </div>
    </div>
  )
}

export default Page