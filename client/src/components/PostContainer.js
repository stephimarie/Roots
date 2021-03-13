import React, { useState, useEffect } from "react";
import axios from "axios";

const PostContainer = () => {
  // const [form, setForm] = useState({ title: "", text: "" });
  const [posts, setPosts] = useState();

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
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });
        console.log("allPosts", allPosts.data);
        setPosts(allPosts.data);
      } catch (err) {
        axios.isCancel(err)
          ? console.log("Request cancelled")
          : console.log(err);
      }
    })();
    return () => source.cancel();
  }, []);

  return (
    <div>
      <h1>hello from post container</h1>
      {/* <form onSubmit={submitPost}>
        <input onChange={onChange} type="text" name="title" />
        <input onChange={onChange} type="text" name="text" />
        <button type="submit">Submit</button>
      </form> */}

      <div className="allPosts">
        {/* {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.displayName}</h3>
            <p>{post.message}</p>
          </div>
        ))} */}
        {/* <h3>{allPosts.displayName}</h3>
        <p>{allPosts.message}</p> */}
      </div>
    </div>
  );
};

export default PostContainer;