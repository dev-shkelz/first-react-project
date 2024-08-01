import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContextProvider";
import ZoomImage from "../../zoom-image/ZoomImage";
import L from "../../../utils/L";

const Post = ({ post }) => {
  const { loggedUser } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="post"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>
        <L w="Movie" /> {post.id}
      </h1>
      {/* --------I decided to not include ZoomImage, but just left it there
        to take the space-------------------- */}
      <ZoomImage src={""} alt={"z"} />
      <h2>
        <span className="span-movie-color">
          <L w="Title" />:
        </span>{" "}
        {post.title}
      </h2>
      <p>
        {" "}
        <span className="span-movie-color">
          <L w="Description" />:
        </span>{" "}
        {post.body}
      </p>
      <div className="post-buttons">
        {loggedUser ? (
          <button>
            <L w="See Movie" />
          </button>
        ) : (
          <h3>
            {isHovered ? <L w="Login to see this movie" /> : "_ _ _ _ _ _"}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Post;
