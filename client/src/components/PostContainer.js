import React, { useState, useEffect, useContext } from "react";
import UserContext from "../Context/UserContext";
import axios from "axios";
import "../App.css";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    (async () => {
      try {
        const allPosts = await axios.get("/api/posts", {
          cancelToken: source.token,
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
    const btnId = e.target.id;
    const chatInput = document.getElementById("chat" + btnId);
    const dpName = userData.user.displayName;

    if (!chatInput.value) {
      alert("Please enter your message before sending");
    } else {
      const chatObj = {
        displayName: dpName,
        userId: btnId,
        chat: chatInput.value,
      };

      try {
        const newChat = await axios
          .post("/api/posts/chat", chatObj)
          .then(() => {
            return;
          });

        const allPosts = await axios.get("/api/posts", {});
        setPosts(allPosts.data);
      } catch (err) {
        console.log(err);
      }
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
              padding: "15px",
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
                id={"chat" + post.userId}
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
                // type="submit"
                onClick={setChat}
                id={post.userId}
                className="chatSubmit"
              >
                Send
              </button>
            </form>
            {post.chat.map((msg, index) => (
              <div key={index}>
                <span>
                  <strong>{msg.displayName}: </strong>
                </span>
                <span>{msg.chat}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
