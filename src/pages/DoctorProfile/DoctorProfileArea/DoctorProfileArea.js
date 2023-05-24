import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddNewDoctorArea from "./AddNewDoctorArea";
import UpdateDoctorArea from "./UpadateDoctorArea";

const DoctorProfileArea = () => {
  const [showAddNewArea, setshowAddNewArea] = useState(false);
  const [showupdateDoctorArea, setshowupdateDoctorArea] = useState(false);
  const [showAddArea, setshowAddArea] = useState(true);
  const [procedureOne, setprocedureOne] = useState([]);
  const [selectedoctorlist, setselectedoctorlist] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [doctors, setdoctors] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [name, setUsername] = useState("");
  const [pId, setPId] = useState("");

  const navigate = useNavigate();

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
          `http://65.2.132.105:8080/provider/doctors/search/${storedPId}`
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("procedure==>", doctors);
            console.log("==>", result.doctors);
            setdoctors(result.doctors);
            console.log("new1==>", setdoctors(result.doctors));
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
        if (selectedoctorlist) {
          await fetch(
            `http://65.2.132.105:8080/provider/doctor/search/${selectedoctorlist}`
          )
            .then((res) => res.json())
            .then((data) => setprocedureOne(data.doctor))
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
  }, [selectedoctorlist]);

  const handlesetselecteddoctorlistChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected Procedure:", selectedValue);
    setselectedoctorlist(selectedValue);
    setShowResult(true);
  };

  const handleshowAddNewArea = () => {
    setshowAddArea(false);
    setshowAddNewArea(true);
    setshowupdateDoctorArea(false);
  };
  const handleshowupdateDoctorArea = (doctor) => {
    setshowAddArea(false);
    setSelectedProcedure(doctor);
    setshowAddNewArea(false);
    setshowupdateDoctorArea(true);
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

  return (
    <>
      <div className="col-xl-12 col-lg-12">
        <article className="service-details-box">
          <div className="service-details-thumb mb-80">
            <div className="section-title pos-rel mb-45">
              {/* <div className="section-icon">
                                    <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                                 </div> */}
              {showAddArea && (
                <div className="service-widget mb-50">
                  <div className="widget-title-box mb-30">
                    <h3 className="widget-title text-center">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register
                      Doctors
                    </h3>
                  </div>
                  <form className="service-contact-form" action="">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="contact-input contact-icon contact-hourglass">
                          <select
                            className="form-select select_style  form-group"
                            onChange={handlesetselecteddoctorlistChange}
                            aria-label="Default select example"
                          >
                            <option defaultValue="Select Procedure" value="">
                              Select Doctors
                            </option>
                            {doctors.map((doc) => (
                              <option key={doc.doctor_id} value={doc.id}>
                                {doc.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="ser-form-btn text-center mt-40 form-group">
                        <a
                          onClick={handleshowAddNewArea}
                          className="primary_btn btn-icon ml-0"
                          style={{ animationDelay: "0.6s" }}
                          tabIndex="0"
                        >
                          <span>+</span>Add New Doctors
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
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {procedureOne.map((doctor, index) => (
                                          <tr key={doctor.id}>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.specialty}</td>
                                            <td>
                                              <button
                                                class="btn btn-primary"
                                                onClick={() => {
                                                  handleshowupdateDoctorArea(
                                                    doctor
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
                                                  handleDelete(doctor.doctor_id)
                                                }
                                              >
                                                Delete
                                              </button>
                                            </td>
                                          </tr>
                                        ))}
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
              )}
              {showAddNewArea && <AddNewDoctorArea />}
              {showupdateDoctorArea && (
                <UpdateDoctorArea doctor={selectedProcedure} />
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default DoctorProfileArea;
