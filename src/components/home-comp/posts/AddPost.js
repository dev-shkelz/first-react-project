// Child of SinglePost.js
import React, { useContext, useState } from "react";
// import { DataContext } from "../../../context/DataContextProvider";
import useFetchData from "../../../hooks/useFetchData";
import { UserContext } from "../../../context/UserContextProvider";
import L from "../../../utils/L";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { loggedUser } = useContext(UserContext);
  const { addFetchData } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const addPost = (body, title) => {
    addFetchData({
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: Math.random(),
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="add-post-container">
      {loggedUser ? (
        <>
          <h2>
            <L w="Add a new movie" />
          </h2>
          <label>
            <L w="Title" />:
            <input
              type="text"
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            />
          </label>
          <label>
            <L w="Description" />:
            <input
              type="text"
              value={body}
              onChange={(evt) => setBody(evt.target.value)}
            />
          </label>
          <button
            onClick={() => {
              addPost(title, body);
              setTitle("");
              setBody("");
            }}
          >
            <L w="Add" />
          </button>
        </>
      ) : (
        <>
          <div className="add-post-locked">
            <input
              type="text"
              placeholder="Login to add your favourite movies"
              // disabled={true}
            />
            <div className="add-post-marquee">
              {/* Interstellar Movie - Sunday at 19:00 - Get your tickets here */}
            </div>
            <button
              // disabled={true}
              onClick={() => {
                alert("Login to add your movie");
              }}
            >
              <L w="Add" /> <L w="Movie" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddPost;
