import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from '../../../hooks/useAuth';
// import { useForm } from "react-hook-form";
import Axios from "axios";

const LoginArea = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    Axios.post("http://65.2.132.105:8080/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        const { message, username, patient_id, name, provider_id } =
          response.data;
        setLoginStatus(message);
        if (message) {
          if (username) {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("patient_id", patient_id);
            console.log("before==>", patient_id);
            navigate("/PatientLandingPage");
          } else {
            console.log(name);
            console.log(provider_id);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("provider_id", provider_id);
            console.log("before==>", provider_id);
            navigate("/ProviderLandingPage");
          }

          // navigate('/admin');
        } else {
          localStorage.setItem("userEmail", response.data.email);
          navigate("/signup");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <form>
                  <label htmlFor="name" className="mb-2">
                    Email Address <span>**</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    id="name"
                    type="text"
                    placeholder="Enter Username or Email address..."
                  />

                  <label htmlFor="pass" className="mb-2">
                    Password <span>**</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                    id="pass"
                    type="password"
                    placeholder="Enter password..."
                  />

                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <span>Lost your password?</span>
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="primary_btn btn-icon-green w-100"
                    onClick={login}
                  >
                    Login Now
                  </button>
                  <h1
                    style={{
                      color: "red",
                      fontSize: "15px",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    {loginStatus}
                  </h1>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link to="/register">
                    <button className="primary_btn theme-btn w-100">
                      Register Now
                    </button>
                  </Link>
                </form>
                <div className="or-divide or-login">
                  <span>or login with </span>
                </div>
                <button className="login_btn">
                  <img src="img/icon/google_icon.svg" alt="" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginArea;
