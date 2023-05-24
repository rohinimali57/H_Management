import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewProcedureArea = () => {
  const [pname, setProcedureName] = useState("");
  const [description, setDescription] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  // const [providerId, setProviderId] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const storedProviderId = sessionStorage.getItem("provider_id");
  useEffect(() => {
    // if (storedProviderId) {
    //   setProviderId(storedProviderId);
    // }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/provider/doctors/search/${storedProviderId}`
        );
        const result = response.data;
        setDoctors(result.doctors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleProcedureRegistration = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("pname", pname);
    formData.append("description", description);
    formData.append("doctor_id", selectedDoctor);
    formData.append("duration", duration);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("provider_id", storedProviderId);
    formData.append("speciality", speciality);
    formData.append("section", section);

    try {
      const response = await axios.post(
        "http://localhost/Procedure/adddataImages",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        alert("Procedure Added");
        navigate("/ProviderLandingPage");
        resetForm();
      } else {
        alert("Procedure Added Failed");
        navigate("/ProviderLandingPage");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the procedure.");
    }
  };
  const handlesetselecteddoctorlistChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected Doctor:", selectedValue);
    setSelectedDoctor(selectedValue);
  };

  const resetForm = () => {
    setProcedureName("");
    setPrice("");
    setDescription("");
    setDoctors([]);
    setDuration("");
    setDiscount("");
    setSpeciality("");
    setSection("");
    setFile(null);
  };

  return (
    <>
      <section className="checkout-area pb-70">
        <div className="container bg-light">
          <br></br>
          <form action="#" onSubmit={handleProcedureRegistration}>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="checkbox-form">
                  <h3 className="text-center">Add New Procedure</h3>
                  <br></br>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Procedure Name<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={pname}
                          onChange={(event) =>
                            setProcedureName(event.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Doctor Name <span className="required">*</span>
                        </label>
                        <select
                          className="form-select select_style form-group"
                          onChange={handlesetselecteddoctorlistChange}
                          aria-label="Default select example"
                        >
                          <option
                            defaultValue="Select Procedure"
                            value={selectedDoctor}
                          >
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
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Speciality <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={speciality}
                          onChange={(event) =>
                            setSpeciality(event.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Section <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={section}
                          onChange={(event) => setSection(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-form-list">
                        <label>
                          Price <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={price}
                          onChange={(event) => setPrice(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-form-list">
                        <label>
                          Discount <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={discount}
                          onChange={(event) => setDiscount(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-form-list">
                        <label>
                          Duration <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={duration}
                          onChange={(event) => setDuration(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>
                        Procedure Description<span className="required">*</span>
                      </label>
                      <textarea
                        id="checkout-mess"
                        cols="30"
                        rows="10"
                        placeholder="Notes about your Procedure."
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Upload Image <span className="required">*</span>
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

                  <div className="d-flex justify-content-center">
                    <div className="order-button-payment md-3">
                      <button type="submit" className="primary_btn theme-btn">
                        Submit
                      </button>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="order-button-payment md-3">
                      <button
                        type="reset"
                        onClick={resetForm}
                        className="primary_btn theme-btn"
                      >
                        Reset
                      </button>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="order-button-payment md-3">
                      <a href="/ProviderLandingPage" id="cancelLink">
                        <button type="button" className="primary_btn theme-btn">
                          Cancel
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNewProcedureArea;
