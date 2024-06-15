import React, { useEffect, useState } from "react";
import "./Book.css";
// import { IoIosCheckbox } from "react-icons/io";
const Book = () => {
  const [minDateTime, setMinDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const offset = tomorrow.getTimezoneOffset();
    const localDate = new Date(tomorrow.getTime() - offset * 60 * 1000);
    const formattedDate = localDate.toISOString().slice(0, 16);
    setMinDateTime(formattedDate);
  }, []);

  return (
    <div>
      {/* <h5 className='book-head'>Book an Appointment</h5>
        <p className='msg-book'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non quisquam expedita vitae nisi? Aut, delectus inventore! que cum. Voluptas, harum corporis. Optio!</p>
     */}

      <section id="appointment" className="appointment section-bg">
        <div className="container">
          {/* <div className="section-title">
          <b className='head-of-book'>Make an Appointment</b>
          <small className='para-of-book'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</small>
        </div> */}

          <form accept="" role="form" className="php-email-form mt-5">
            <div className="row mt-5">
              <div className="col-md-4 form-group">
                <input
                  type="text-one"
                  name="name"
                  className="form-control p-2"
                  id="name"
                  placeholder="Patient Name"
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="datetime-local"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  min={minDateTime}
                />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="age" id="age" className="form-select">
                  <option value="">Select Age</option>
                  <option value="Department 1">Below 18</option>
                  <option value="Department 2">18-40</option>
                  <option value="Department 3">40 above</option>
                </select>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="doctor" id="doctor" className="form-select">
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Your message goes here.."
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit">Request Appointment</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;
