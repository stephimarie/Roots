import React, { useState, useEffect, useContext } from "react";
import UserContext from "../Context/UserContext";
import axios from "axios";
import "../App.css";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const { userData } = useContext(UserContext);

  // const [form, setForm] = useState({ title: "", text: "" });

  // const onChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const submitPost = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const newPost = await axios.post("/api/posts", form, {
  //       headers: { "x-auth-token": localStorage.getItem("auth-token") },
  //     });

  //     setPosts([...posts, newPost]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    (async () => {
      try {
        const allPosts = await axios.get("/api/posts", {
          cancelToken: source.token,
          // headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });

        setPosts(allPosts.data);
      } catch (err) {
        axios.isCancel(err)
          ? console.log("Request cancelled")
          : console.log(err);
      }
    })();
    return () => source.cancel();
  }, []);

  const setChat = async (e) => {
    e.preventDefault();
    const btnId = e.target.id;
    const chatInput = document.getElementById(btnId);
    const dpName = userData.user.displayName;

    const chatObj = {
      displayName: dpName,
      userId: btnId,
      chat: chatInput.value,
    };
    try {
      const newChat = await axios
        .post("/api/posts/chat", chatObj)
        .then((res) => {
          console.log(res);
        });
      console.log("newChat", newChat);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1
        style={{ marginTop: "30px", fontFamily: "'Akaya Telivigala', cursive" }}
      >
        Post a comment to our global community below and start connecting!
      </h1>

      <div style={{ marginBottom: "70px" }} className="container">
        {posts.map((post, index) => (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.250)",
              marginTop: "50px",
              borderRadius: "15px",
            }}
            className="card"
            key={index}
          >
            <h3>{post.displayName}</h3>
            <p>{post.message}</p>
            <form>
              <input
                style={{ color: "black" }}
                type="text"
                className="chatInput"
                placeholder="Type message here:"
              />
              <button
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  backgroundColor: "lightGrey",
                  borderRadius: "10px",
                }}
                type="submit"
                className="chatSubmit"
              >
                Send
              </button>
            </form>
            {post.chat.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
