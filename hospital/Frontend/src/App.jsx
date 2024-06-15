import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Contact/ContactUs";
import CaseStudies from "./Components/CaseStudies/CaseStudies";

import Page from "./Components/Pages/Page";
import Pediatrics from "./Components/Pages/Pediatrics/Pediatrics";
import Book from "./Components/Pages/Book/Book";
import Diseases from "./Components/Pages/Diseases/Diseases";
import Best from "./Components/Pages/Best/Best";
import Doctor from "./Components/Pages/Doctor/Doctor";
import Question from "./Components/Pages/Question/Question";
import Department from "./Components/Pages/Department/Department";
import Ophthalmology from "./Components/Pages/Ophthalmology/Ophthalmology";
import Form from "./Components/Form/Form";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Casestudies" element={<CaseStudies />} />

          <Route path="/Page" element={<Page />} />
          <Route path="/Pediatrics" element={<Pediatrics />} />
          <Route path="/book" element={<Book />} />
          <Route path="/Diseases" element={<Diseases />} />
          <Route path="/Best" element={<Best />} />

          <Route path="/doctor" element={<Doctor />} />
          <Route path="/question" element={<Question />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/ophthalmology" element={<Ophthalmology />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
