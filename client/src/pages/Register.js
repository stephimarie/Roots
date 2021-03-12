import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await axios.post("users/register", form);
      console.log(newUser);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div>
      <h4>Through your roots we grow together.</h4>
      <h6>The app that creates cross-cultural and multilingual conversations.</h6>

      <form onSubmit={submit} className="reg-form">
        <label>Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label>Password</label>
        <input onChange={onChange} type="text" name="password" />
        <label>Password Check</label>
        <input onChange={onChange} type="text" name="passwordCheck" />
        <label>Display Name</label>
        <input onChange={onChange} type="text" name="displayName" />
        <label>Native Language</label>
        <input onChange={onChange} type="text" name="native_lang" />
        <label>Language you want to learn:</label>
        <input onChange={onChange} type="text" name="learn_lang" />
        <input type="submit" name="Register" />
      </form>
    </div>
  );
};

export default Register;
