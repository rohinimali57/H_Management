import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from 'react-router-dom';

const UpdateProcedureArea = ({ procedure }) => {
  const [id, setProcedure_id] = useState("");
  const [pname, setProcedure_name] = useState("");
  const [description, setDescription] = useState("");
  const [doctor, setDoctor] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [provider_id, setProvider_id] = useState("");
  const [speciality, setspeciality] = useState("");
  const [section, setsection] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const storedProviderId = sessionStorage.getItem("provider_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (procedure) {
          setProcedure_id(procedure.id);
          setProcedure_name(procedure.pname);
          setPrice(procedure.price);
          setDescription(procedure.description);
          // setDoctor(selectedDoctor);
          setDuration(procedure.duration);
          setDiscount(procedure.discount);
          setProvider_id(storedProviderId);
          setspeciality(procedure.speciality);
          setsection(procedure.section);
          setFile(procedure.file);
          setDoctorId(procedure.doctor_id);
        }
        const response = await axios.get(
          `http://65.2.132.105:8004/providerprofiles/${procedure.id}`
        );
        const result = response.data;
        setDoctors(result.doctor);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [procedure]);

  const onCancel = async () => {
    navigate("/ProviderLandingPage");
  };

  // const handleProcedureRegistration = async (e) => {
  //    e.preventDefault();
  //    const addpro = {
  //       pname: pname,
  //       description: description,
  //       doctor_name: doctor_name,
  //       duration: duration,
  //       price: price,
  //       discount: discount,
  //       provider_id: provider_id,
  //       speciality: speciality,
  //       section: section
  //    };

  //    await fetch(`http://65.2.132.105:8081/procedures/update/${id}`, {
  //       method: "PUT",
  //       headers: {
  //          "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(addpro),
  //    })
  //       .then((response) => response.json())
  //       .then((data) => {
  //          if (data.success) {
  //             alert("Procedure Updated");
  //             // resetForm();
  //             navigate("/ProviderLandingPage");
  //          } else {
  //             alert("Procedure Update Failed");
  //          }
  //       })
  //       .catch((error) => {
  //          console.error(error);
  //          alert("An error occurred while updating the procedure");
  //       });
  // };

  // const updateProcedure = (updatedProcedure) => {
  //    fetch(`http://65.2.132.105:8081/procedures/${id}` , {
  //      method: 'PUT',
  //      headers: {
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify(updatedProcedure),
  //    })
  //      .then(response => response.json())
  //      .then(data => {
  //        setUpdateResponse(data); // Set the response from the server to the state variable
  //        // Handle the response as needed
  //      })
  //      .catch(error => {
  //        console.error('Error updating procedure:', error);
  //        // Handle the error
  //      });
  //  };
  const handleProcedureRegistration = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("pname", pname);
    formData.append("description", description);
    formData.append("doctor_id", doctorId); // Corrected key to "doctor_name"
    formData.append("duration", duration);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("provider_id", provider_id);
    formData.append("speciality", speciality);
    formData.append("section", section);
    // doctor_id: doctorId,
    try {
      const response = await axios.put(
        `http://65.2.132.105:8004/Procedure/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        alert("Procedure Updated");
        navigate("/ProviderLandingPage");
      } else {
        alert("Procedure Update Failed");
        navigate("/ProviderLandingPage");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the procedure.");
    }
  };

  return (
    <>
      <section className="checkout-area pb-70">
        <div className="container bg-light">
          <br></br>
          <form action="#">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="checkbox-form ">
                  <h3 class="text-center">Update Procedure</h3>
                  <br></br>
                  <div class="row">
                    <div class="col-md-12"></div>

                    <div class="col-md-12">
                      <div class="checkout-form-list">
                        <label>
                          Procedure Name<span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={pname}
                          onChange={(event) =>
                            setProcedure_name(event.target.value)
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
                          aria-label="Default select example"
                          value={selectedDoctor}
                          onChange={(event) =>
                            setSelectedDoctor(event.target.value)
                          }
                        >
                          {doctors.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          speciality <span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={speciality}
                          onChange={(event) =>
                            setspeciality(event.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          section <span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          value={section}
                          onChange={(event) => setsection(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="checkout-form-list">
                        <label>
                          Price <span class="required">*</span>
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
                    <div class="col-md-4">
                      <div class="checkout-form-list">
                        <label>
                          Discount <span class="required">*</span>
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
                    <div class="col-md-4">
                      <div class="checkout-form-list">
                        <label>
                          Duration <span class="required">*</span>
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

                  <div class="order-notes">
                    <div class="checkout-form-list">
                      <label>
                        Procedure Description<span class="required">*</span>
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
                  <div class="d-flex justify-content-center">
                    <div class="order-button-payment md-3">
                      <button
                        type="submit"
                        onClick={handleProcedureRegistration}
                        class="primary_btn theme-btn"
                      >
                        Submit
                      </button>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="order-button-payment md-3">
                      <a href="/ProviderLandingPage" id="cancelLink">
                        <button
                          type="button"
                          onClick={onCancel}
                          class="primary_btn theme-btn"
                        >
                          Cancel
                        </button>
                      </a>{" "}
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

export default UpdateProcedureArea;

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const UpdateDoctorArea = ({ doctor }) => {
//   const [id, setDoctorId] = useState("");
//   const [name, setDoctorName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [specialty, setSpecialty] = useState("");
//   const [created_at, setCreatedAt] = useState("");
//   const [bio, setBio] = useState("");
//   const [updated_at, setUpdatedAt] = useState("");
//   const [file, setFile] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (doctor) {
//       setDoctorId(doctor.id);
//       setDoctorName(doctor.name);
//       setEmail(doctor.email);
//       setPhone(doctor.phone);
//       setSpecialty(doctor.specialty);
//       setCreatedAt(doctor.created_at);
//       setBio(doctor.bio);
//       setUpdatedAt(doctor.updated_at);
//     }
//   }, [doctor]);

//   const handleDoctorRegistration = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("specialty", specialty);
//     formData.append("created_at", created_at);
//     formData.append("bio", bio);
//     formData.append("updated_at", updated_at);
//     formData.append("photo", file);

//     try {
//       const response = await axios.put(
//         `http://65.2.132.105:8080/doctordetails/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         alert("Doctor updated successfully");
//         navigate("/ProviderLandingPage");
//         resetForm();
//       } else {
//         alert("Failed to update the doctor");
//         navigate("/ProviderLandingPage");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while updating the doctor");
//     }
//   };

//   const resetForm = () => {
//     setDoctorId("");
//     setDoctorName("");
//     setEmail("");
//     setPhone("");
//     setSpecialty("");
//     setCreatedAt("");
//     setBio("");
//     setUpdatedAt("");
//     setFile(null);
//   };

//   return (
//     <div>
//       <section className="login-area pt-10 pb-10">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="basic-login">
//                 <h3 className="text-center mb-60">Update Doctor Details</h3>
//                 <form>
//                   {/* Rest of the form */}
//                   <div className="row">
//                     <div className="col-md-12">
//                       <div className="checkout-form-list">
//                         <label>Doctor Image</label>
//                         <input
//                           type="file"
//                           accept="image/jpeg, image/png, image/gif"
//                           onChange={(e) => setFile(e.target.files[0])}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="d-flex justify-content-center">
//                     <div className="order-button-payment md-3">
//                       <button
//                         type="submit"
//                         onClick={handleDoctorRegistration}
//                         className="primary_btn theme-btn"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                     <div className="order-button-payment md-3">
//                       <a href="/ProviderLandingPage" id="cancelLink">
//                         <button type="button" className="primary_btn theme-btn">
//                           Cancel
//                         </button>
//                       </a>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UpdateDoctorArea;
