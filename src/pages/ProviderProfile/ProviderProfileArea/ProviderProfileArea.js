import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProcedureDetailsArea = () => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Speciality, setSpeciality] = useState("");
  //   const [Medical_Info, setMedical_Info] = useState('');
  const [Zip, setZip] = useState("");
  //   const [Password, setPassword] = useState('');
  const [Website, setWebsite] = useState("");
  const [Phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("name");
    if (storedUsername) {
      setName(storedUsername);
    }
    const storedPId = sessionStorage.getItem("provider_id");
    if (storedPId) {
      axios
        .get(`http://65.2.132.105:8080/providerprofile/${storedPId}`)
        .then((response) => {
          console.log(response.data.provider);
          console.log("Address=>", response.data.provider[0].address);
          const providerData = response.data.provider[0];
          // setName(providerData.name);
          console.log(providerData.address);
          setAddress(providerData.address);
          setEmail(providerData.email);
          setCity(providerData.city);
          setState(providerData.state);
          setCountry(providerData.country);
          setSpeciality(providerData.speciality);
          setZip(providerData.zipcode);
          setWebsite(providerData.website);
          setPhone(providerData.phone);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPId = sessionStorage.getItem("provider_id");
    if (storedPId) {
      const updatedProviderData = {
        name: Name,
        address: Address,
        email: Email,
        city: City,
        state: State,
        country: Country,
        speciality: Speciality,
        zipcode: Zip,
        website: Website,
        phone: Phone,
      };

      axios
        .put(
          `http://65.2.132.105:8080/providerprofile/${storedPId}`,
          updatedProviderData
        )
        .then((response) => {
          console.log(response.data);
          alert("profile Updated"); // Data updated in database
          // Add any additional logic or state updates here
        })
        .catch((error) => {
          console.error(error);
          alert("Error  in profile Updated");
          // Handle error
        });
    }
  };
  return (
    <>
      <section className="login-area pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="basic-login">
                <h3 className="text-center mb-60">Profile Page</h3>
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
                      value={Name}
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
                    value={Email}
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
                      value={Phone}
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
                      value={Address}
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
                        value={City}
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
                        value={State}
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
                      value={Country}
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
                      value={Zip}
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
                      value={Speciality}
                      placeholder="Enter Speciality..."
                      onChange={(e) => setSpeciality(e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="url" className="mb-2">
                      Website <span>*</span>
                    </label>
                    <input
                      required
                      type="url"
                      placeholder="Enter Website"
                      value={Website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="ser-form-btn text-center mt-40 form-group">
                    <a
                      href="#"
                      onClick={handleSubmit}
                      className="primary_btn btn-icon ml-0"
                      style={{ animationDelay: "0.6s" }}
                      tabIndex="0"
                    >
                      <span>+</span>Submit Changes
                    </a>
                  </div>
                </form>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcedureDetailsArea;
