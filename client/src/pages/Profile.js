import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import ProfileChat from "../components/ProfileChat";

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
        <li>{profile.displayName}</li>
        <li>{profile.email}</li>
        <li>{profile.native_lang}</li>
        <li>{profile.learn_lang}</li>
      </ul>
      <div
        style={{ marginBottom: "70px" }}
        className="container"
        id="profilePost"
      >
        <h1>Personal Post</h1>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.250)",
            marginTop: "50px",
            borderRadius: "15px",
            padding: "15px",
          }}
          className="card"
          id="mapPlace"
        >
          <ProfileChat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
