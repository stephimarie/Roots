import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostContainer from "../components/PostContainer";
import UserContext from "../Context/UserContext";


const Home = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <div>
      <h3>Through your roots we grow together.</h3>

      <h1>Hello from Home Page</h1>
      <h3>Your name is: {userData.user?.displayName}</h3>
      <PostContainer />
    </div>
  );
};

export default Home;
