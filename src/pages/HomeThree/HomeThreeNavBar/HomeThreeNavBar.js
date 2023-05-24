import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Shared/Sidebar/Sidebar";
import useGlobalContext from "../../../hooks/useGlobalContext";

const HomeThreeNavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();
  const patient_id = sessionStorage.getItem("patient_id");
  const provider_id = sessionStorage.getItem("provider_id");
  console.log("afterlogin==>", patient_id);
  console.log("afterlogin==>", provider_id);
  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.removeItem("patient_id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("provider_id");
    sessionStorage.removeItem("name");
    navigate("/");
  };

  return (
    <>
      <header>
        <div
          className={
            stickyMenu
              ? "sticky_menu top-bar-white top-bar-3 lg-pt-30 lg-pb-30 h3_topBar"
              : "top-bar-white top-bar-3 pt-30 pb-30 h3_topBar"
          }
        >
          <div className="container">
            <div className={"row align-items-center"}>
              <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                <div className="logo logo-3 pos-rel">
                  <Link to="/">
                    <img src="img/logo/logo-3.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-6 d-lg-none">
                <div
                  onClick={handleShow}
                  className="side-menu-icon d-lg-none text-end"
                >
                  <button className="side-toggle border-0 bg-transparent">
                    <i className="fas fa-bars"></i>{" "}
                  </button>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 d-none d-lg-block">
                {provider_id === null && patient_id === null && (
                  <div className="header-lang f-right pos-rel d-none d-lg-block p-0">
                    <Link to="/login" className="primary_btn btn-icon ml-0">
                      <span>+</span>Login
                    </Link>
                  </div>
                )}

                {provider_id !== null && (
                  <div className="header-lang f-right pos-rel d-none d-lg-block p-0">
                    <Link
                      to={"/"}
                      onClick={onLogout}
                      className="primary_btn btn-icon ml-0"
                    >
                      <span>+</span>Logout
                    </Link>
                  </div>
                )}
                {patient_id !== null && (
                  <>
                    <div className="header-lang f-right pos-rel d-none d-lg-block p-0">
                      <Link
                        to={"/"}
                        onClick={onLogout}
                        className="primary_btn btn-icon ml-0"
                      >
                        <span>+</span>Logout
                      </Link>
                    </div>
                    <div className="header-lang f-right pos-rel d-none d-lg-block p-0">
                      <Link to={"/"} className="primary_btn btn-icon ml-0">
                        <span>+</span>Profile
                      </Link>
                    </div>
                  </>
                )}

                <div className="header-cta-info header-cta-info-3 d-flex f-left">
                  <div className="header-cta-icon">
                    <img src="img/cta/message-icon.png" alt="" />
                  </div>
                  <div className="header-cta-text">
                    <h5 className="theme-color">Email Address</h5>
                    <span className="primary-color">infomail@medidove.com</span>
                  </div>
                </div>
                <div className="header-cta-info header-cta-info-3 d-flex f-left">
                  <div className="header-cta-icon">
                    <img src="img/cta/phone-icon.png" alt="" />
                  </div>
                  <div className="header-cta-text">
                    <h5 className="theme-color">Phone Number</h5>
                    <span className="primary-color">+87 (676) 6765 764</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            stickyMenu
              ? "sticky_menu header-menu-area header-menu-blue theme-bg sticky_navBar_bg"
              : "header-menu-area header-menu-blue theme-bg h3_navBar"
          }
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="header__menu menu-dark">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link to="/">Home </Link>
                      </li>
                      <li>
                        <Link to="/login">Provider </Link>
                      </li>
                      <li>
                        <Link to="/doctorDetails">Doctors </Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-right f-right">
                  <div className="header-social-icons f-right d-none d-lg-block p-0">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeThreeNavBar;
