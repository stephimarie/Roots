import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Nav from "../components/Navbar/nav";
import Slogan from "../components/Slogan/slogan";

const Login = () => {
  const [form, setForm] = useState();
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("api/users/login", form);
      console.log("data", data);

      setUserData({
        token: data.token,
        user: data.user,
      });

      localStorage.setItem("auth-token", data.token);
      history.push("/");
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 400) {
        const logErr = document.getElementById("logErr");
        logErr.innerHTML = err.response.data.msg;
        logErr.classList.remove("hidden");
        logErr.classList.add("err");
      } else if (err.response.status === 401) {
        const logErr = document.getElementById("passLogErr");
        logErr.innerHTML = err.response.data.msg;
        logErr.classList.remove("hidden");
        logErr.classList.add("err");
      }
    }
  };

  useEffect(() => {
    if (userData.user) history.push("/");
  }, [userData.user, history]);

  return (
    <div>
      <Nav />
      <Slogan />
      <form onSubmit={submitLoginForm} className="login-form">
        <h1 style={{ padding: "20px" }}>Login</h1>
        <label style={{ color: "black" }}>email</label>
        <input
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="email"
        />
        <p id="logErr" className="hidden"></p>
        <label style={{ color: "black" }}>Password</label>
        <input
          style={{ color: "black", borderBottom: "1px solid grey"}}
          onChange={onChange}
          type="text"
          name="password"
        />
        <p id="passLogErr" className="hidden"></p>
        <input
          style={{
            marginTop: "20px",
            backgroundColor: "lightGrey",
            borderRadius: "10px",
          }}
          type="submit"
          name="Login"
        />
      </form>
    </div>
  );
};

export default Login;
