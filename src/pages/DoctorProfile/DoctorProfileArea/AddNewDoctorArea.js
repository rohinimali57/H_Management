import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function AddNewDoctorArea() {
  const [pId, setPId] = useState("");
  const [name, setDoctor_name] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [specialty, setspecialty] = useState("");
  const [created_at, setcreated_at] = useState("");
  const [bio, setbio] = useState("");
  const [updated_at, setupdated_at] = useState("");
  const [doctor_image, setdoctor_image] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedPId = sessionStorage.getItem("provider_id");
    if (storedPId) {
      setPId(storedPId);
      console.log("provider id", storedPId);
    }
  });

  const handleDoctorRegistration = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);
    formData.append("specialty", specialty);
    formData.append("updated_at", updated_at);
    formData.append("created_at", created_at);
    formData.append("phonephone", phone);
    formData.append("doctor_image", doctor_image);

    try {
      const response = await axios.post(
        "http://65.2.132.105:8080/Doctor/AddNew",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        alert("Doctor Added");
        navigate("/ProviderLandingPage");
        resetForm();
      } else {
        alert("Doctor Added Failed");
        navigate("/ProviderLandingPage");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the Doctor.");
    }
  };

  const resetForm = () => {
    setDoctor_name("");
    setemail("");
    setphone("");
    setspecialty("");
    setcreated_at("");
    setbio("");
    setupdated_at("");
    setdoctor_image("");
    setFile(null);
  };

  return (
    <div>
      <section className="login-area pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="basic-login">
                <h3 className="text-center mb-60">Add Doctor Details</h3>
                <form>
                  <div className="mb-2">
                    <label htmlFor="name" className="mb-2">
                      Doctor Name<span>*</span>
                    </label>
                    <input
                      required
                      id="name"
                      type="text"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={(event) => setDoctor_name(event.target.value)}
                    />
                  </div>

                  <label htmlFor="email-id" className="mb-2">
                    Doctor Email Address <span>*</span>
                  </label>
                  <input
                    required
                    id="email-id"
                    type="email"
                    value={email}
                    placeholder="Enter Email address..."
                    onChange={(event) => setemail(event.target.value)}
                  />

                  <div className="mb-2">
                    <label htmlFor="phone" className="mb-2">
                      Doctor Contact number <span>*</span>
                    </label>
                    <input
                      required
                      id="phone"
                      type="tel"
                      value={phone}
                      placeholder="Enter Mobile number..."
                      onChange={(event) => setphone(event.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="address" className="mb-2">
                      Speciality <span>*</span>
                    </label>
                    <input
                      required
                      id="address"
                      type="text"
                      value={specialty}
                      placeholder="Enter Speciality..."
                      onChange={(event) => setspecialty(event.target.value)}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="city" className="mb-2">
                        Date of insert <span>*</span>
                      </label>
                      <input
                        required
                        id="city"
                        type="date"
                        value={created_at}
                        onChange={(event) => setcreated_at(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Doctor Name <span className="required">*</span>
                        </label>
                        <input
                          type="file"
                          name="photo"
                          onChange={(e) => {
                            setFile(e.target.files[0]);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center">
                    <div class="order-button-payment md-3">
                      <button
                        type="submit"
                        onClick={handleDoctorRegistration}
                        class="primary_btn theme-btn"
                      >
                        Submit
                      </button>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="order-button-payment md-3">
                      <a href="/ProviderLandingPage" id="cancelLink">
                        <button type="button" class="primary_btn theme-btn">
                          Cancel
                        </button>
                      </a>
                    </div>
                  </div>
                </form>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddNewDoctorArea;
