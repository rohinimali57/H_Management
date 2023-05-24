import React, { useState } from "react";
import axios from "axios";

const ChangePasswordArea = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPId = sessionStorage.getItem("provider_id");
    if (storedPId) {
      axios
        .put(`http://65.2.132.105:8080/providerchangepass/${storedPId}`, {
          oldpassword: oldPassword,
          newpassword: newPassword,
        })
        .then((response) => {
          alert("Change Password sucessfully");
          console.log(response.data); // Password updated successfully
          // Add any additional logic or state updates here
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            setErrorMessage(error.response.data);
          } else {
            setErrorMessage("Server error");
          }
        });
    }
  };

  return (
    <>
      <section className="checkout-area pb-70">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-12">
                <div className="checkbox-form">
                  <h3 className="text-center">Change Password</h3>
                  <br></br>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Old Password <span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          id="old-password"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          New Password <span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          id="new-password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="ser-form-btn text-center mt-40 form-group">
                      <a
                        href="#"
                        onClick={handleSubmit}
                        className="primary_btn btn-icon ml-0"
                        style={{ animationDelay: "0.6s" }}
                        tabIndex="0"
                      >
                        <span>+</span>Submit{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ChangePasswordArea;
