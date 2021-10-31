import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { singInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <div className=" container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-8 offset-md-2 shadow p-5 login-text">
            <h2>Please Login</h2>
            <button className="btn-style" onClick={handleGoogleLogin}>
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
