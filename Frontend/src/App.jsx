import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
  import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/Contact/ContactUs'
import CaseStudies from './Components/CaseStudies/CaseStudies'

import Page from './Components/Pages/Page'
import Form from './Components/Form/Form'
const App = () => {
  return <>
  <BrowserRouter>
  <Header/>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<ContactUs/>}/>
   <Route path='/Casestudies' element={<CaseStudies/>}/>
   {/* added new route for Form  */}
   <Route path='/Form' element={<Form/>}/>
   <Route path='/Page' element={<Page/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}

export default App