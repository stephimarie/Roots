import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

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
        const profileData = await axios.get("/api/users/profile", {
          params: display,
        });
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
