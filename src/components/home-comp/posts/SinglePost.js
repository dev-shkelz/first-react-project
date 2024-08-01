//This component holds AddPost and EditPost
import { Link, useParams } from "react-router-dom";
import "./Posts.css";
import { useEffect, useRef, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import Modal from "../../modal/Modal";
import ZoomImage from "../../zoom-image/ZoomImage";
import L from "../../../utils/L";

//When you open Post.js(that is used like a card) it will redirect you to SinglePost(here)
const SinglePost = () => {
  const { postId } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef();

  const { deletePost, posts } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("Deleted Posts are:", posts);

  const clickedPost = posts.find((post) => Number(post.id) === Number(postId));
  //   console.log("clickedPost", clickedPost.title);

  useEffect(() => {
    ref.current.scrollIntoView({
      block: "start",
    });
  }, []);

  if (clickedPost === undefined) {
    <div class="post-not-found">Post not found</div>;
  }

  return (
    <div ref={ref} className="single-post">
      {isModalOpen && (
        <Modal
          height="40vh"
          setIsModalOpen={setIsModalOpen}
          navigateToHome={false}
        >
          {!isDeleted && (
            <h1 className="delete-post-warning">
              <L w="Are you sure you want to delete your movie? This process cannot be undone" />
            </h1>
          )}
          <div className="delete-buttons-modal">
            {isDeleted ? (
              <p>
                <L w="Your movie has been deleted" />
              </p>
            ) : (
              <button
                onClick={() => {
                  deletePost(clickedPost.id);
                  setIsDeleted(true);
                }}
              >
                <L w="Yes" />
              </button>
            )}
            {!isDeleted && (
              <button onClick={() => setIsModalOpen(false)}>
                <L w="No" />
              </button>
            )}
          </div>
        </Modal>
      )}
      {/***************************** Single Post Container **************************/}
      <div className="single-post-container">
        {/* On refresh title, body show undefined 
        Is it because of the posts that are coming from the Context*/}
        {clickedPost?.title && (
          <img
            src={
              "https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg"
            }
            alt={clickedPost?.title}
          />
        )}
        <h1>{clickedPost?.title}</h1>
        <p>{clickedPost?.body}</p>
        {isDeleted ? (
          <p>
            <L w="Your movie has been deleted" />
          </p>
        ) : (
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <L w="Delete" />
          </button>
        )}

        <button>
          <Link to="/">
            <L w="Go Back" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
