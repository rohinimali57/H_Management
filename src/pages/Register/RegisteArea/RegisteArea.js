import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const RegisteArea = () => {
  const [showPatientForm, setShowPatientForm] = useState(true);
  const [showProviderForm, setShowProviderForm] = useState(false);
  const navigate = useNavigate();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");

  const [website, setWebsite] = useState("");

  const handlePatientClick = () => {
    setShowPatientForm(true);
    setShowProviderForm(false);
  };

  const handleProviderClick = () => {
    setShowProviderForm(true);
    setShowPatientForm(false);
  };

  const { registerUser, googleSignIn } = useAuth();
  const { handleSubmit, reset } = useForm();

  const handlePatientSignup = async (event) => {
    if (password.length <= 6) {
      return Swal.fire({
        icon: "error",
        // title: 'Oops...',
        text: "Password must be at least 6 character",
      });
    }
    event.preventDefault();
    const searchpro = {
      first_name: fname,
      last_name: lname,
      dob: dob,
      address: address,
      username: username,
      email: email,
      password: password,
      gender: gender,
      age: age,
      phone: phone,
    };
    fetch("http://65.2.132.105:8080/registerpatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchpro),
    })
      .then(
        (response) => response.json(),
        window.alert("Data Inserted Now Login"),
        navigate("/")
      )
      // onReset()

      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  };

  const handleProviderSignup = async (event) => {
    if (password.length <= 6) {
      return Swal.fire({
        icon: "error",
        // title: 'Oops...',
        text: "Password must be at least 6 character",
      });
    }
    event.preventDefault();
    const searchpro = {
      name: name,
      phone: phone,
      email: email,
      address: address,
      city: city,
      state: state,
      country: country,
      password: password,
      zipcode: zip,
      speciality: speciality,
      website: website,
    };
    fetch("http://65.2.132.105:8080/providersignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchpro),
    })
      .then(
        (response) => response.json(),
        window.alert("Data Inserted Now Login"),
        navigate("/")
      )
      // onReset()

      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  };
  return (
    <>
      <div className="containersign">
        <div className="bloc-tabs">
          <button
            className={showPatientForm === true ? "tabs active-tabs" : "tabs"}
            onClick={handlePatientClick}
          >
            SIGNUP AS PATIENT
          </button>
          <button
            className={showProviderForm === true ? "tabs active-tabs" : "tabs"}
            onClick={handleProviderClick}
          >
            SIGNUP AS PROVIDER
          </button>
        </div>
      </div>

      {showPatientForm && (
        <section className="login-area pt-40 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Patien Signup From</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="fname" className="md-6">
                          First Name <span>*</span>
                        </label>
                        <input
                          required
                          id="fname"
                          type="text"
                          placeholder="Enter First Name..."
                          onChange={(e) => setFName(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="lname" className="md-6">
                          Last Name <span>*</span>
                        </label>
                        <input
                          required
                          id="lname"
                          type="text"
                          placeholder="Enter Last Name..."
                          onChange={(e) => setLName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="dob" className="mb-2">
                        Date of Birth <span>*</span>
                      </label>
                      <input
                        required
                        id="dob"
                        type="date"
                        placeholder="Enter Date of Birth..."
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="gender" className="mb-3">
                        Gender <span>*</span>
                      </label>
                      <select
                        required
                        id="gender"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="username" className="mb-2">
                        Username <span>*</span>
                      </label>
                      <input
                        required
                        id="username"
                        type="text"
                        placeholder="Enter Username..."
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <label htmlFor="email-id" className="mb-2">
                      Email Address <span>*</span>
                    </label>
                    <input
                      required
                      id="email-id"
                      type="text"
                      placeholder="Enter Username or Email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="pass" className="mb-2">
                      Password <span>*</span>
                    </label>
                    <input
                      required
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="mb-2">
                      <div className="mb-2">
                        <label htmlFor="phone" className="mb-2">
                          Phone <span>*</span>
                        </label>
                        <input
                          required
                          id="phone"
                          type="tel"
                          placeholder="Enter Phone number..."
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <label htmlFor="age" className="mb-2">
                        Age <span>*</span>
                      </label>
                      <input
                        required
                        id="age"
                        type="age"
                        placeholder="Enter age"
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="address" className="mb-2">
                        Address <span>*</span>
                      </label>
                      <input
                        required
                        id="address"
                        type="text"
                        placeholder="Enter Address..."
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <div className="mt-10"></div>
                    <button
                      type="submit"
                      className="primary_btn theme-btn-2 w-100"
                      onClick={handlePatientSignup}
                    >
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showProviderForm && (
        <section className="login-area pt-40 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Provider Signup From</h3>
                  <form>
                    <div className="mb-2">
                      <label htmlFor="name" className="mb-2">
                        Hospital Name<span>*</span>
                      </label>
                      <input
                        required
                        id="name"
                        type="text"
                        placeholder="Enter Name..."
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <label htmlFor="email-id" className="mb-2">
                      Hospital Email Address <span>*</span>
                    </label>
                    <input
                      required
                      id="email-id"
                      type="email"
                      placeholder="Enter Email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="mb-2">
                      <label htmlFor="phone" className="mb-2">
                        Hospital Contact number <span>*</span>
                      </label>
                      <input
                        required
                        id="phone"
                        type="tel"
                        placeholder="Enter Mobile number..."
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="address" className="mb-2">
                        Hospital Address <span>*</span>
                      </label>
                      <input
                        required
                        id="address"
                        type="text"
                        placeholder="Enter Address..."
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="city" className="mb-2">
                          City <span>*</span>
                        </label>
                        <input
                          required
                          id="city"
                          type="text"
                          placeholder="Enter City..."
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="state" className="mb-2">
                          State <span>*</span>
                        </label>
                        <input
                          required
                          id="state"
                          type="text"
                          placeholder="Enter State..."
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="country" className="mb-2">
                        Country <span>*</span>
                      </label>
                      <input
                        required
                        id="country"
                        type="text"
                        placeholder="Enter country..."
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="zip" className="mb-2">
                        Post Code <span>*</span>
                      </label>
                      <input
                        required
                        id="zip"
                        type="text"
                        placeholder="Enter Zip Code..."
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="speciality" className="mb-2">
                        Specialty <span>*</span>
                      </label>
                      <input
                        required
                        id="speciality"
                        type="text"
                        placeholder="Enter Speciality..."
                        onChange={(e) => setSpeciality(e.target.value)}
                      />
                    </div>

                    <label htmlFor="pass" className="mb-2">
                      Password <span>*</span>
                    </label>
                    <input
                      required
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="mb-2">
                      <label htmlFor="url" className="mb-2">
                        Website <span>*</span>
                      </label>
                      <input
                        required
                        id="username"
                        type="url"
                        placeholder="Enter Website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                    <div className="mt-10"></div>
                    <button
                      type="submit"
                      className="primary_btn theme-btn-2 w-100"
                      onClick={handleProviderSignup}
                    >
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RegisteArea;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import useAuth from "../../../hooks/useAuth";
// import { Button, Form } from "react-bootstrap";
// import Swal from "sweetalert2";
// import "./Register.css";
// import { useNavigate } from "react-router-dom";

// const RegisteArea = () => {
//   const [showPatientForm, setShowPatientForm] = useState(true);
//   const [showProviderForm, setShowProviderForm] = useState(false);
//   const navigate = useNavigate();

//   const [fname, setFName] = useState("");
//   const [lname, setLName] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");

//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [zip, setZip] = useState("");

//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [speciality, setSpeciality] = useState("");

//   const [website, setWebsite] = useState("");

//   const handlePatientClick = () => {
//     setShowPatientForm(true);
//     setShowProviderForm(false);
//   };

//   const handleProviderClick = () => {
//     setShowProviderForm(true);
//     setShowPatientForm(false);
//   };

//   const { registerUser, googleSignIn } = useAuth();
//   const { handleSubmit, reset } = useForm();

//   const handlePatientSignup = async (event) => {
//     if (password.length <= 6) {
//       return Swal.fire({
//         icon: "error",
//         // title: 'Oops...',
//         text: "Password must be at least 6 character",
//       });
//     }
//     event.preventDefault();
//     const searchpro = {
//       first_name: fname,
//       last_name: lname,
//       dob: dob,
//       address: address,
//       username: username,
//       email: email,
//       password: password,
//       gender: gender,
//       age: age,
//     };
//     fetch("http://65.2.132.105:8004/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(searchpro),
//     })
//       .then(
//         (response) => response.json(),
//         window.alert("Data Inserted Now Login"),
//         navigate("/")
//       )
//       // onReset()

//       .catch((error) => {
//         // Handle errors
//         console.log(error);
//       });
//   };

//   const handleProviderSignup = async (event) => {
//     if (password.length <= 6) {
//       return Swal.fire({
//         icon: "error",
//         // title: 'Oops...',
//         text: "Password must be at least 6 character",
//       });
//     }
//     event.preventDefault();
//     const searchpro = {
//       name: name,
//       phone: phone,
//       email: email,
//       address: address,
//       city: city,
//       state: state,
//       country: country,
//       password: password,
//       zipcode: zip,
//       speciality: speciality,
//       website: website,
//     };
//     fetch("http://65.2.132.105:8004/providersignup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(searchpro),
//     })
//       .then(
//         (response) => response.json(),
//         window.alert("Data Inserted Now Login"),
//         navigate("/")
//       )
//       // onReset()

//       .catch((error) => {
//         // Handle errors
//         console.log(error);
//       });
//   };
//   return (
//     <>
//       <div className="containersign">
//         <div className="bloc-tabs">
//           <button
//             className={showPatientForm === true ? "tabs active-tabs" : "tabs"}
//             onClick={handlePatientClick}
//           >
//             SIGNUP AS PATIENT
//           </button>
//           <button
//             className={showProviderForm === true ? "tabs active-tabs" : "tabs"}
//             onClick={handleProviderClick}
//           >
//             SIGNUP AS PROVIDER
//           </button>
//         </div>
//       </div>

//       {showPatientForm && (
//         <section className="login-area pt-40 pb-120">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8 offset-lg-2">
//                 <div className="basic-login">
//                   <h3 className="text-center mb-60">Patien Signup From</h3>
//                   <form>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <label htmlFor="fname" className="md-6">
//                           First Name <span>*</span>
//                         </label>
//                         <input
//                           required
//                           id="fname"
//                           type="text"
//                           placeholder="Enter First Name..."
//                           onChange={(e) => setFName(e.target.value)}
//                         />
//                       </div>

//                       <div className="col-md-6">
//                         <label htmlFor="lname" className="md-6">
//                           Last Name <span>*</span>
//                         </label>
//                         <input
//                           required
//                           id="lname"
//                           type="text"
//                           placeholder="Enter Last Name..."
//                           onChange={(e) => setLName(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="mb-2">
//                       <label htmlFor="dob" className="mb-2">
//                         Date of Birth <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="dob"
//                         type="date"
//                         placeholder="Enter Date of Birth..."
//                         onChange={(e) => setDob(e.target.value)}
//                       />
//                     </div>

//                     <div className="mb-2">
//                       <label htmlFor="gender" className="mb-3">
//                         Gender <span>*</span>
//                       </label>
//                       <select
//                         required
//                         id="gender"
//                         onChange={(e) => setGender(e.target.value)}
//                       >
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
//                     <div className="mb-2">
//                       <label htmlFor="username" className="mb-2">
//                         Username <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="username"
//                         type="text"
//                         placeholder="Enter Username..."
//                         value={username}
//                         onChange={(e) => setUserName(e.target.value)}
//                       />
//                     </div>
//                     <label htmlFor="email-id" className="mb-2">
//                       Email Address <span>*</span>
//                     </label>
//                     <input
//                       required
//                       id="email-id"
//                       type="text"
//                       placeholder="Enter Username or Email address..."
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />

//                     <label htmlFor="pass" className="mb-2">
//                       Password <span>*</span>
//                     </label>
//                     <input
//                       required
//                       id="pass"
//                       type="password"
//                       placeholder="Enter password..."
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className="mb-2">
//                       <div className="mb-2">
//                         <label htmlFor="phone" className="mb-2">
//                           Phone <span>*</span>
//                         </label>
//                         <input
//                           required
//                           id="phone"
//                           type="tel"
//                           placeholder="Enter Phone number..."
//                           onChange={(e) => setPhone(e.target.value)}
//                         />
//                       </div>

//                       <label htmlFor="age" className="mb-2">
//                         Age <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="age"
//                         type="age"
//                         placeholder="Enter age"
//                         onChange={(e) => setAge(e.target.value)}
//                       />
//                     </div>
//                     <div className="mb-2">
//                       <label htmlFor="address" className="mb-2">
//                         Address <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="address"
//                         type="text"
//                         placeholder="Enter Address..."
//                         onChange={(e) => setAddress(e.target.value)}
//                       />
//                     </div>

//                     <div className="mt-10"></div>
//                     <button
//                       type="submit"
//                       className="primary_btn theme-btn-2 w-100"
//                       onClick={handlePatientSignup}
//                     >
//                       Register Now
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {showProviderForm && (
//         <section className="login-area pt-40 pb-120">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8 offset-lg-2">
//                 <div className="basic-login">
//                   <h3 className="text-center mb-60">Provider Signup From</h3>
//                   <form>
//                     <div className="mb-2">
//                       <label htmlFor="name" className="mb-2">
//                         Hospital Name<span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="name"
//                         type="text"
//                         placeholder="Enter Name..."
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </div>

//                     <label htmlFor="email-id" className="mb-2">
//                       Hospital Email Address <span>*</span>
//                     </label>
//                     <input
//                       required
//                       id="email-id"
//                       type="email"
//                       placeholder="Enter Email address..."
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />

//                     <div className="mb-2">
//                       <label htmlFor="phone" className="mb-2">
//                         Hospital Contact number <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="phone"
//                         type="tel"
//                         placeholder="Enter Mobile number..."
//                         onChange={(e) => setPhone(e.target.value)}
//                       />
//                     </div>

//                     <div className="mb-2">
//                       <label htmlFor="address" className="mb-2">
//                         Hospital Address <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="address"
//                         type="text"
//                         placeholder="Enter Address..."
//                         onChange={(e) => setAddress(e.target.value)}
//                       />
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6">
//                         <label htmlFor="city" className="mb-2">
//                           City <span>*</span>
//                         </label>
//                         <input
//                           required
//                           id="city"
//                           type="text"
//                           placeholder="Enter City..."
//                           onChange={(e) => setCity(e.target.value)}
//                         />
//                       </div>

//                       <div className="col-md-6">
//                         <label htmlFor="state" className="mb-2">
//                           State <span>*</span>
//                         </label>
//                         <input
//                           required
//                           id="state"
//                           type="text"
//                           placeholder="Enter State..."
//                           onChange={(e) => setState(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="mb-2">
//                       <label htmlFor="country" className="mb-2">
//                         Country <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="country"
//                         type="text"
//                         placeholder="Enter country..."
//                         onChange={(e) => setCountry(e.target.value)}
//                       />
//                     </div>

//                     <div className="mb-2">
//                       <label htmlFor="zip" className="mb-2">
//                         Post Code <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="zip"
//                         type="text"
//                         placeholder="Enter Zip Code..."
//                         onChange={(e) => setZip(e.target.value)}
//                       />
//                     </div>

//                     <div className="mb-2">
//                       <label htmlFor="speciality" className="mb-2">
//                         Specialty <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="speciality"
//                         type="text"
//                         placeholder="Enter Speciality..."
//                         onChange={(e) => setSpeciality(e.target.value)}
//                       />
//                     </div>

//                     <label htmlFor="pass" className="mb-2">
//                       Password <span>*</span>
//                     </label>
//                     <input
//                       required
//                       id="pass"
//                       type="password"
//                       placeholder="Enter password..."
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />

//                     <div className="mb-2">
//                       <label htmlFor="url" className="mb-2">
//                         Website <span>*</span>
//                       </label>
//                       <input
//                         required
//                         id="username"
//                         type="url"
//                         placeholder="Enter Website"
//                         value={website}
//                         onChange={(e) => setWebsite(e.target.value)}
//                       />
//                     </div>
//                     <div className="mt-10"></div>
//                     <button
//                       type="submit"
//                       className="primary_btn theme-btn-2 w-100"
//                       onClick={handleProviderSignup}
//                     >
//                       Register Now
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default RegisteArea;

// //   const [toggleState, setToggleState] = useState(1);

// // const toggleTab = (index) => {
// //   setToggleState(index);
// // };

// // return (
// //   <div className="containersign">
// //     <div className="bloc-tabs">
// //       <button
// //         className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
// //         onClick={() => toggleTab(1)}
// //       >
// //         SIGNUP AS PATIENT
// //       </button>
// //       <button
// //         className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
// //         onClick={() => toggleTab(2)}
// //       >
// //         SIGNUP AS PROVIDER
// //       </button>

// //     </div>

// //     <div className="content-tabs">
// //       <div
// //         className={toggleState === 1 ? "content  active-content" : "content"}
// //       >

// //         <div className="basic-login">
// //         <h3 className="text-center mb-60">Signup From Here</h3>
// //         {/* <form onSubmit={handleSubmit(onSubmit)}> */}
// //           <label htmlFor="name" className='mb-2' >Username <span>**</span></label>
// //           <input  required id="name" type="text" placeholder="Enter Username..." />

// //           <label htmlFor="email-id" className='mb-2'>Email Address <span>**</span></label>
// //           <input required id="email-id" name="email" type="text"
// //               placeholder="Enter Username or Email address..." />

// //           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
// //           <input  required id="pass" name="password" type="password"
// //               placeholder="Enter password..." />

// //           <div className="mt-10"></div>
// //           <button type='submit' className="primary_btn theme-btn-2 w-100">Register Now</button>
// //           <div className="or-divide"><span>or</span></div>
// //           {/* <Link to="/login"> */}
// //           <button className="primary_btn btn-icon-green w-100">login Now</button>
// //           {/* </Link> */}
// //         {/* </form> */}
// //         <div className="or-divide or-login"><span>or login with </span></div>
// //         <button  className="login_btn">
// //           <img src="img/icon/google_icon.svg" alt="" /> </button>
// //     </div>
// //       </div>

// //       <div
// //         className={toggleState === 2 ? "content  active-content" : "content"}
// //       >
// //          <div className="basic-login">
// //         <h3 className="text-center mb-60">Signup From Here</h3>
// //         {/* <form onSubmit={handleSubmit(onSubmit)}> */}
// //           <label htmlFor="name" className='mb-2' >Username <span>**</span></label>
// //           <input  required id="name" type="text" placeholder="Enter Username..." />

// //           <label htmlFor="email-id" className='mb-2'>Email Address <span>**</span></label>
// //           <input required id="email-id" name="email" type="text"
// //               placeholder="Enter Username or Email address..." />

// //           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
// //           <input  required id="pass" name="password" type="password"
// //               placeholder="Enter password..." />

// //           <div className="mt-10"></div>
// //           <button type='submit' className="primary_btn theme-btn-2 w-100">Register Now</button>
// //           <div className="or-divide"><span>or</span></div>
// //           {/* <Link to="/login"> */}
// //           <button className="primary_btn btn-icon-green w-100">login Now</button>
// //           {/* </Link> */}
// //         {/* </form> */}
// //         <div className="or-divide or-login"><span>or login with </span></div>
// //         <button  className="login_btn">
// //           <img src="img/icon/google_icon.svg" alt="" /> </button>
// //     </div>
// //       </div>

// //     </div>
// //   </div>
// // );
// // };

// // export default HomeFourHeroArea;

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { useForm } from "react-hook-form";
// // import useAuth from '../../../hooks/useAuth';
// // import Swal from 'sweetalert2';

// // const RegisteArea = () => {
// //    const { registerUser, googleSignIn } = useAuth();

// //    const { register, handleSubmit, reset } = useForm();
// //    const onSubmit = data => {
// //       // console.log(data)
// //       const name = data.name;
// //       const email = data.email;
// //       const password = data.password;
// //       if (password.length <= 6) {
// //          return Swal.fire({
// //             icon: 'error',
// //             // title: 'Oops...',
// //             text: 'Password must be at least 6 character',
// //          })
// //       }
// //       registerUser(email, password, name, reset)
// //    };
// //    return (
// //       <>
// //          <section className="login-area pt-120 pb-120">
// //             <div className="container">
// //                <div className="row">
// //                   <div className="col-lg-8 offset-lg-2">
// //                      <div className="basic-login">
// //                         <h3 className="text-center mb-60">Signup From Here</h3>
// //                         <form onSubmit={handleSubmit(onSubmit)}>
// //                            <label htmlFor="name" className='mb-2' >Username <span>**</span></label>
// //                            <input {...register("name")} required id="name" type="text" placeholder="Enter Username..." />

// //                            <label htmlFor="email-id" className='mb-2'>Email Address <span>**</span></label>
// //                            <input {...register("email")} required id="email-id" name="email" type="text"
// //                               placeholder="Enter Username or Email address..." />

// //                            <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
// //                            <input {...register("password")} required id="pass" name="password" type="password"
// //                               placeholder="Enter password..." />

// //                            <div className="mt-10"></div>
// //                            <button type='submit' className="primary_btn theme-btn-2 w-100">Register Now</button>
// //                            <div className="or-divide"><span>or</span></div>
// //                            <Link to="/login"><button className="primary_btn btn-icon-green w-100">login Now</button></Link>
// //                         </form>
// //                         <div className="or-divide or-login"><span>or login with </span></div>
// //                         <button onClick={() => googleSignIn()} className="login_btn">
// //                            <img src="img/icon/google_icon.svg" alt="" /> </button>
// //                      </div>
// //                   </div>
// //                </div>
// //             </div>
// //          </section>
// //       </>
// //    );
// // };

// // export default RegisteArea;
