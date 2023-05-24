import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import ChangePasswordArea from "../../ChangePassword/ChangePasswordArea/ChangePasswordArea";
import ProviderProfile from "../../ProviderProfile/ProviderProfileArea/ProviderProfileArea";
import AddNewProcedureArea from "../../AddNewProcedure/AddNewProcedureArea/AddNewProcedureArea";
import UpdateProcedureArea from "../../UpdateProcedure/UpdateProcedureArea/UpdateProcedureArea";
import DoctorProfileArea from "../../DoctorProfile/DoctorProfileArea/DoctorProfileArea";
// import AddNewDoctorArea from '../../DoctorProfile/DoctorProfileArea/AddNewDoctorArea';

const ProviderLandingPageArea = () => {
  // const [Procedure_Name, setProcedure_Name] = useState("");
  const [showAddNewProcedureArea, setShowAddNewProcedureArea] = useState(false);
  const [showUpdateProcedureArea, setShowUpdateProcedureArea] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showChangePassword, setshowChangePassword] = useState(false);
  const [showProfile, setshowProfile] = useState(false);
  const [showProcedure, setshowProcedure] = useState(true);
  const [showDoctor, setshowDoctor] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [procedures, setProcedures] = useState([]);
  const [showAddNewArea, setshowAddNewArea] = useState(false);
  const [name, setUsername] = useState("");
  const [pId, setPId] = useState("");
  const navigate = useNavigate();

  const [procedureOne, setprocedureOne] = useState([]);
  const [selectedProcedurelist, setselectedProcedurelist] = useState("");

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("name");
    if (storedUsername) {
      setUsername(storedUsername);
      console.log("provider name", storedUsername);
    }
    const storedPId = sessionStorage.getItem("provider_id");
    if (storedPId) {
      setPId(storedPId);
      console.log("provider id", storedPId);
    }

    const fetchData = async () => {
      try {
        // console.log(providers_id);
        await fetch(
          `http://65.2.132.105:8080/provider/procedure/search/${storedPId}`
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("procedure==>", procedures);
            console.log("==>", result.procedure);
            setProcedures(result.procedure);
            console.log("new1==>", setProcedures(result.procedure));
            // console.log("Procedure:",procedures);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchprocedure = async () => {
      try {
        // console.log(providers_id);
        if (selectedProcedurelist) {
          await fetch(
            `http://65.2.132.105:8080/provider/procedures/search/${selectedProcedurelist}`
          )
            .then((res) => res.json())
            .then((data) => setprocedureOne(data.procedure))
            .catch((err) => console.log(err));
        } else {
          setprocedureOne([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchprocedure();
    // Adding a timeout of 2 seconds before executing the fetchProcedure function
    const timeoutId = setTimeout(() => {
      fetchprocedure();
    }, 2000);

    // Clean up the effect and clear the timeout
    return () => clearTimeout(timeoutId);
  }, [selectedProcedurelist]);

  const handlesetselectedProcedurelistChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected Procedure:", selectedValue);
    setselectedProcedurelist(selectedValue);
    setShowResult(true);
  };

  const handleDelete = async (index) => {
    await fetch(`http://65.2.132.105:8080/procedures/delete/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Procedure Deleted");
          // resetForm();
          // navigate("/ProviderLandingPage");
        } else {
          alert("Procedure Delete Failed");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while Deleteing the procedure");
      });
  };

  const handleShowUpdateProcedureArea = (procedure) => {
    setshowDoctor(false);
    setSelectedProcedure(procedure);
    setShowAddNewProcedureArea(false);
    setShowUpdateProcedureArea(true);
    setshowChangePassword(false);
    setshowProfile(false);
    setshowProcedure(false);
  };
  const handleshowAddNewProcedureArea = () => {
    setshowDoctor(false);
    setShowAddNewProcedureArea(true);
    setShowUpdateProcedureArea(false);
    setshowChangePassword(false);
    setshowProfile(false);
    setshowProcedure(false);
  };
  const handleChanegePassword = () => {
    setshowDoctor(false);
    setshowChangePassword(true);
    setShowAddNewProcedureArea(false);
    setShowUpdateProcedureArea(false);
    setshowProfile(false);
    setshowProcedure(false);
  };
  const handleProfile = () => {
    setshowDoctor(false);
    setshowProfile(true);
    setshowChangePassword(false);
    setShowUpdateProcedureArea(false);
    setshowProcedure(false);
    setShowAddNewProcedureArea(false);
  };
  const handleProcedure = () => {
    setshowDoctor(false);
    setshowProcedure(true);
    setshowProfile(false);
    setshowChangePassword(false);
    setShowUpdateProcedureArea(false);
    setShowAddNewProcedureArea(false);
  };
  const handleshowDoctorArea = () => {
    setshowDoctor(true);
    setShowAddNewProcedureArea(false);
    setShowUpdateProcedureArea(false);
    setshowChangePassword(false);
    setshowProfile(false);
    setshowProcedure(false);
  };

  const handlelogout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="service-details-area pt-20 pb-60">
        <div className="container">
          <div className="row">
            <div
              class="col-auto col-md-3 col-xl-3 px-sm-2 px-0 text-white"
              style={{ backgroundColor: "#8fb569" }}
            >
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                  href="/"
                  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <i class="fs-4 bi-house text-white text-center"></i>
                  &nbsp;&nbsp;&nbsp;
                  <span class="fs-5 d-none d-sm-inline">
                    Welcome Our Website
                  </span>
                </a>
                <ul
                  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li class="nav-item" onClick={handleProfile}>
                    <a href="#" class="nav-link align-middle px-0 text-white">
                      <i class="fs-4 bi-person" style={{ size: "200" }}></i>
                      &nbsp;{" "}
                      <b>
                        <span class="ms-1 d-none d-sm-inline text-white">
                          Profile
                        </span>
                      </b>
                    </a>
                  </li>
                  <li onClick={handleChanegePassword}>
                    <a href="#" class="nav-link px-0 align-middle text-white">
                      <i class="fs-4 bi-key-fill"></i>{" "}
                      <b>
                        <span class="ms-1 d-none d-sm-inline text-white">
                          Change Password
                        </span>
                      </b>
                    </a>
                  </li>
                  <li onClick={handleProcedure}>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle text-white"
                    >
                      <i class="fs-4 bi-grid"></i>
                      <b>
                        {" "}
                        <span class="ms-1 d-none d-sm-inline text-white">
                          Procedure Details
                        </span>{" "}
                      </b>
                    </a>
                  </li>
                  <li onClick={handleshowDoctorArea}>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle text-white"
                    >
                      <i class="fs-4 bi-grid"></i>
                      <b>
                        {" "}
                        <span class="ms-1 d-none d-sm-inline text-white">
                          Doctors details
                        </span>{" "}
                      </b>
                    </a>
                  </li>
                  <li onClick={handleProcedure}>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle text-white"
                    >
                      <i class="fs-4 bi-grid"></i>
                      <b>
                        {" "}
                        <span class="ms-1 d-none d-sm-inline text-white">
                          Add Hospital Images
                        </span>{" "}
                      </b>
                    </a>
                  </li>
                  <li onClick={handleProcedure}>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle text-white"
                    >
                      <i class="fs-4 bi-grid"></i>
                      <b>
                        {" "}
                        <span class="ms-1 d-none d-sm-inline text-white">
                          Show Image Gallary
                        </span>{" "}
                      </b>
                    </a>
                  </li>
                  <li onClick={handlelogout}>
                    <a href="#" class="nav-link px-0 align-middle text-white">
                      <i class="fs-4 bi-box-arrow-right"></i>{" "}
                      <span class="ms-1 d-none d-sm-inline text-white">
                        Logout
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <article className="service-details-box">
                <div className="service-details-thumb mb-80">
                  {showAddNewProcedureArea && <AddNewProcedureArea />}
                  {showChangePassword && <ChangePasswordArea />}
                  {showProfile && <ProviderProfile />}
                  {showUpdateProcedureArea && (
                    <UpdateProcedureArea procedure={selectedProcedure} />
                  )}
                  {/* <img className="img" src="img/services/service-details-thumb1.jpg" alt="" /> */}
                  {showDoctor && <DoctorProfileArea />}
                  {/* {showAddNewArea && showAddNew} */}
                  {showProcedure && (
                    <div className="section-title pos-rel mb-45">
                      {/* <div className="section-icon">
                                    <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                                 </div> */}
                      <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                          <h3 className="widget-title text-center">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register
                            Procedure
                          </h3>
                        </div>
                        <form className="service-contact-form" action="">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="contact-input contact-icon contact-hourglass">
                                <select
                                  onChange={
                                    handlesetselectedProcedurelistChange
                                  }
                                  className="form-select select_style  form-group"
                                  aria-label="Default select example"
                                >
                                  <option
                                    defaultValue="Select Procedure"
                                    value=""
                                  >
                                    Select Procedure
                                  </option>
                                  {procedures.map((procedure) => (
                                    <option
                                      key={procedure.id}
                                      value={procedure.id}
                                    >
                                      {procedure.pname}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="ser-form-btn text-center mt-40 form-group">
                              <a
                                onClick={handleshowAddNewProcedureArea}
                                className="primary_btn btn-icon ml-0"
                                style={{ animationDelay: "0.6s" }}
                                tabIndex="0"
                              >
                                <span>+</span>Add New Procedure
                              </a>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            {showResult && (
                              <section id="contact" class="contact">
                                <div class="container " data-aos="fade-up">
                                  <div class="row gx-lg-0 gy-4">
                                    <div>
                                      <div class="row gx-lg-0 gy-4 mt-5">
                                        <div
                                          class="col-lg-12"
                                          style={{ marginTop: "-112px" }}
                                        >
                                          <table class="table table-striped table-hover select_style">
                                            <thead>
                                              <tr>
                                                <th>Procedure Name</th>
                                                <th>Procedure Price</th>
                                                <th>Procedure Discount</th>
                                                <th>Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {procedureOne.map(
                                                (procdure, index) => (
                                                  <tr key={procdure.id}>
                                                    <td>{procdure.pname}</td>
                                                    <td>{procdure.price}</td>
                                                    <td>{procdure.discount}</td>
                                                    <td>
                                                      <button
                                                        class="btn btn-primary"
                                                        onClick={() => {
                                                          handleShowUpdateProcedureArea(
                                                            procdure
                                                          );
                                                          // handleUpdate(procedure.id);
                                                        }}
                                                      >
                                                        Update
                                                      </button>
                                                      &nbsp;
                                                      <button
                                                        class="btn btn-danger"
                                                        onClick={() =>
                                                          handleDelete(
                                                            procdure.id
                                                          )
                                                        }
                                                      >
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                )
                                              )}
                                            </tbody>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderLandingPageArea;
