import React, { useContext, useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import Post from "./Post";
import "./Posts.css";
import useOnlineStatus from "../../../hooks/useOnlineStatus";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContextProvider";

const Posts = () => {
  const isOnline = useOnlineStatus();
  const { posts, isLoading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const postsPerPage = 9; // Number of posts to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const { loggedUser } = useContext(UserContext);

  if (isLoading) {
    return (
      <div className="posts-status">
        <p className="posts-status-error">
          Your items are loading, please wait
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="posts-status">
        <p className="posts-status-error">
          Ups! Error while fetching your data
        </p>
      </div>
    );
  }
  if (!isOnline) {
    return (
      <div className="posts-status">
        <p className="posts-status-error">
          It seems like you are disconnected from internet. Check out your
          connection and try again
        </p>
      </div>
    );
  }

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //
  return (
    <>
      <div className="posts">
        {currentPosts.map((post) => (
          <Link
            key={post.id}
            to={loggedUser ? `/movie/${post.id}` : `login-required`}
            className="no-underline"
          >
            <Post post={post} />
          </Link>
        ))}
      </div>
      {/* Pagination controls */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, index) => (
            <button
              className={`paginate-button ${
                currentPage === index + 1 ? "button-active" : ""
              }`}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Posts;
