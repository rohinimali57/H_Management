import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import useGlobalContext from "../../../hooks/useGlobalContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeThreeHeroSection = () => {
  const { setIsOpen } = useGlobalContext();
  const [freeProcedureSearch, setFreeProcedureSearch] = useState("");
  const [procedure, setProcedure] = useState("");
  const [location, setLocation] = useState("");
  const [speciality, setSpeciality] = useState("");
  const navigate = useNavigate();

  // Free Search Bar code
  const onChangefreeProcedureSearch = (e) => {
    setFreeProcedureSearch(e.target.value);
  };

  // submit handler - Free Search Bar

  const onSearch = async (e) => {
    e.preventDefault();
    const search = {
      procedure: freeProcedureSearch,
    };

    await fetch("http://65.2.132.105:8080/Procedure/searchProcedurehome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search),
    })
      .then((response) => response.json())
      .then((result) => {
        navigate("/shop", { state: { result } });
      })
      .catch((error) => {
        console.log("error found" + error);
      });
  };

  //Search by Options code
  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleProcedureChange = (e) => {
    setProcedure(e.target.value);
  };

  // submit handler - Search by Options code

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const searchOption = {
      procedure: procedure,
      location: location,
      speciality: speciality,
    };

    console.log(searchOption);

    await fetch(
      "http://65.2.132.105:8080/Procedure/speciality/searchProcedurehome",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchOption),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        navigate("/shop", { state: { result } });
      })
      .catch((error) => {
        console.log("error found" + error);
      });
  };

  return (
    <>
      <VideoPopup videoId="oU_GUAWz52w" />

      <section className="hero-area">
        <div className="hero-slider">
          <div className="slider-active">
            <div
              className="single-slider home_three slider-height slider-height-3 d-flex align-items-center"
              data-background="img/slider/slider-bg-3.jpg"
            >
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ marginTop: "-200px" }}
                >
                  <div className="col-xl-6 col-lg-6 col-md-10">
                    <div className="hero-text hero-text-2 pt-35">
                      <div className="hero-slider-caption hero-slider-caption-2">
                        <h5>We are here for your care.</h5>
                        <h1>Best Care & Better Hospital.</h1>
                      </div>
                      {/* // Free Search Bar form*/}
                      <div>
                        <form onSubmit={onSearch}>
                          <div class="p-1 bg-light p-3 rounded rounded-pill shadow-sm mb-4">
                            <div class="input-group">
                              <input
                                onChange={onChangefreeProcedureSearch}
                                value={freeProcedureSearch}
                                type="search"
                                placeholder="Search Procedures.."
                                aria-describedby="button-addon1"
                                class="form-control border-0 bg-light p-3 rounded rounded-pill"
                                required
                              />
                              <div class="input-group-append">
                                <button
                                  id="button-addon1"
                                  type="submit"
                                  class="btn btn-link text-primary btn btn-lg"
                                >
                                  <i class="fa fa-search"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Register Button */}
                      <div className="hero-slider-btn">
                        <Link
                          to="/register"
                          className="primary_btn btn-icon ml-0"
                        >
                          <span>+</span>Register Here.
                        </Link>
                        <button
                          onClick={() => setIsOpen(true)}
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Search by Options */}
                  <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
                    <div className="slider-right-2">
                      <div className="caregive-box">
                        <div className="search-form">
                          <span className="sub-heading">
                            We are here for you
                          </span>
                          <h3>Find A Care Giver</h3>
                        </div>

                        <div className="row">
                          <div className="col-xl-12">
                            <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                              <div className="appoint-ment-icon">
                                <img
                                  src="img/icon/caregive-option-icon-2.png"
                                  alt=""
                                />
                              </div>
                              <form
                                onSubmit={onFormSubmit}
                                className="appointment-form-2"
                                action="#"
                              >
                                <label htmlFor="speciality">
                                  select Specialty
                                </label>
                                <select
                                  name="speciality"
                                  id="speciality"
                                  className="postform"
                                  value={speciality}
                                  onChange={handleSpecialityChange}
                                  required
                                >
                                  <option>Choose A Specialty</option>
                                  <option value="Cardiology">Cardiology</option>
                                  <option value="Neurology">Neurology</option>
                                </select>
                              </form>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                              <div className="appoint-ment-icon">
                                <img
                                  src="img/icon/caregive-option-icon-2.png"
                                  alt=""
                                />
                              </div>
                              <form className="appointment-form-2" action="#">
                                <label htmlFor="location">
                                  select your location
                                </label>
                                <select
                                  name="location"
                                  id="location"
                                  className="postform"
                                  value={location}
                                  onChange={handleLocationChange}
                                  required
                                >
                                  <option>Choose A Location</option>
                                  <option value="Pune">Pune</option>
                                  <option value="hyderabad">Hyderabad</option>
                                  <option value="mumbai">mumbai</option>
                                </select>
                              </form>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                              <div className="appoint-ment-icon">
                                <img
                                  src="img/icon/caregive-option-icon-2.png"
                                  alt=""
                                />
                              </div>
                              <form className="appointment-form-2" action="#">
                                <label htmlFor="procedure">
                                  select your procedure
                                </label>
                                <select
                                  name="procedure"
                                  id="procedure"
                                  className="postform"
                                  value={procedure}
                                  onChange={handleProcedureChange}
                                  required
                                >
                                  <option>Choose A Procedure</option>
                                  <option value="Cardiac MRI">
                                    Cardiac MRI
                                  </option>
                                  <option value="Brain surgery">
                                    Brain surgery
                                  </option>
                                  <option value="X-ray">X-ray</option>
                                  <option value="Cardiac Catheterization">
                                    Cardiac Catheterization
                                  </option>
                                </select>
                              </form>
                            </div>
                          </div>
                          <div className="col-xl-12 mb-35">
                            <div className="inner caregive-btn text-center">
                              <button
                                className="primary_btn btn-icon ml-0"
                                onClick={onFormSubmit}
                              >
                                <span>+</span>
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThreeHeroSection;
