import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const ProfileChat = () => {
  const [selfChat, setChat] = useState([]);
  const [selfPost, setSelf] = useState([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    setBusy(true);
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    }
    (async () => {
      try {
        const userPost = await axios.get("/api/users", {
          cancelToken: source.token,
          headers: { "x-auth-token": token },
        });
        const display = userPost.data.displayName;
        const selfData = await axios
          .get("/api/posts/profile", {
            cancelToken: source.token,
            params: display,
          })
          .then((res) => {
            setSelf(res.data.post);
            setChat(res.data.post.chat);
            setBusy(false);
          });
        // let data = await selfData.data.post;
        // setSelf(data);
        // setChat(data.chat);
        // const chatData = await selfData.data.post.chat.map((msg, index) => (
        //   <div key={index}>
        //     <span>
        //       <strong>{msg.displayName}: </strong>
        //     </span>
        //     <span>{msg.chat}</span>
        //   </div>
        // ));

        // setChat(chatData);
        // const postArea = document.getElementById("profilePost");
        // postArea.append(JSON.parse(chatData));
      } catch (err) {
        axios.isCancel(err)
          ? console.log("Request cancelled")
          : console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      {/* <p>{selfPost.message}</p> */}
      {/* {selfChat.map((msg, index) => {
        <div key={index}>
          <h6>{msg.displayName}</h6>
          <p>{msg.chat}</p>
        </div>;
      })} */}

      {selfChat &&
        selfChat.map((msg, index) => {
          <div key={index}>
            <h6>{msg.displayName}</h6>
            <p>{msg.chat}</p>
          </div>;
        })}
    </div>
  );
};

export default ProfileChat;
