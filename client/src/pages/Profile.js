import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext.js";
import axios from "axios";
import "../App.css";
import Nav from "../components/Navbar/nav";
import Slogan from "../components/Slogan/slogan";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    }
    (async () => {
      try {
        const userRes = await axios.get("/api/users", {
          headers: { "x-auth-token": token },
        });
        const display = userRes.data.displayName;
        console.log(display);
        const profileData = await axios.get("/api/users/profile", {
          params: display,
        });
        console.log("profileData", profileData);
        setProfile(profileData.data.getpro);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div id="profilePage">
      <ul>
        <li>test</li>
        <li>{profile.displayName}</li>
        <li>{profile.email}</li>
        <li>{profile.native_lang}</li>
        <li>{profile.learn_lang}</li>
      </ul>
    </div>
  );
};

export default Profile;
