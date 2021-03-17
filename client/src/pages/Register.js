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
      const newUser = await axios.post("/api/users/register", form);
      console.log(newUser);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="reg-form">
        <h1 style={{paddingTop:"20px"}}>SignUp:</h1>
        <label style={{color:"black"}}>Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label style={{color:"black"}}>Password</label>
        <input onChange={onChange} type="text" name="password" />
        <label style={{color:"black"}}>Password Check</label>
        <input onChange={onChange} type="text" name="passwordCheck" />
        <label style={{color:"black"}}>Display Name</label>
        <input onChange={onChange} type="text" name="displayName" />
        <label style={{color:"black"}}>Native Language</label>
        <input onChange={onChange} type="text" name="native_lang" />
        <label style={{color:"black"}}>Language you want to learn:</label>
        <input onChange={onChange} type="text" name="learn_lang" />
        <input style={{marginTop:"20px", backgroundColor:"lightGrey", borderRadius:"10px"}} type="submit" name="Register" />
      </form>
    </div>
  );
};

export default Register;
