import React from "react";
import "./Header.css";
import { MdAddIcCall } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg header-scrolled header-design">
        <div className="container-fluid mainheader">
          {/* <div className="navbar-brand text-light">
    <Link to="/home">

      
      <img src={logo} alt="" className='header-logo'/>
    <b className='text-light' style={{textDecorationLine:"none"}}> Shubham Hospital</b>
</Link>

    </div> */}
          <nav class="navbar ">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/home">
                <img
                  src={logo}
                  alt="Logo"
                  width="50"
                  height="54"
                  class="d-inline-block align-text-center"
                />
                <b className="text-light bg-none  me-auto mb-2 mb-lg-0 ">
                  {" "}
                  Shubham Hospital
                </b>
              </Link>
            </div>
          </nav>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nikita">
              <li className="nav-item">
                <Link
                  className="nav-link active me-auto mb-2 mb-lg-0 text-light"
                  aria-current="page"
                  to="/about"
                >
                  <b>About</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active me-auto mb-2 mb-lg-0 text-light"
                  aria-current="page"
                  to="/form"
                >
                  <b>Form</b>
                </Link>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="#center"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b> Center of Excellence</b>
                </a>
                <ul class="dropdown-menu menu-drop">
                  <Link class="dropdown-item" to="/Pediatrics">
                    {" "}
                    <b>Department Of Pediatrics</b>
                  </Link>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <Link class="dropdown-item" to="Diseases">
                    {" "}
                    <b>Infection Diseases</b>
                  </Link>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <Link class="dropdown-item" to="/best">
                    <b>Best Pediatrician</b>
                  </Link>
                </ul>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link active me-auto mb-2 mb-lg-0 text-light" aria-current="page" to="/about"><b>Centre of Excellence</b></Link>
        </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b> Patient Resources</b>
                </a>
                <ul class="dropdown-menu">
                  <Link
                    class="dropdown-item"
                    aria-current="page"
                    to="/Casestudies"
                  >
                    {" "}
                    <b>Case Studies</b>
                  </Link>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <div className="dropdown-item">
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none", listStyle: "none" }}
                    >
                      {" "}
                      <b className="text-dark"> Connect With us</b>
                    </Link>
                  </div>
                </ul>
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
         <button className='call'><MdAddIcCall /></button>
         <input className="form-control me-2 inputdesign" type="search" placeholder="90-141146565" aria-label="Search" />

      </form> */}

            <form className="d-flex" role="search">
              {/* <button className='button-header'>Contact Us</button> */}
              <Link
                className="nav-link active me-auto mb-1 mb-lg-0 p-2  button-header"
                aria-current="page"
                to="/contact"
              >
                <b>Contact Us</b>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
