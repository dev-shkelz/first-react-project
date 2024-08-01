import { useEffect, useState } from "react";

const useFetchData = (url, config) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // GET:
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);
  //DELETE:
  const deletePost = (id) => {
    console.log("Id: " + id);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
          setPosts(posts.filter((post) => post.id !== id));
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };
  //ADD:
  const addFetchData = (config) => {
    console.log("Added post(config) is: ", config);

    fetch(url, config)
      .then((response) => response.json())
      .then((object) => {
        setPosts([object, ...posts]);
        setIsLoading(false);
        console.log("Added posts are:", posts);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    posts,
    setPosts,
    isLoading,
    error,
    config,
    // activePost,
    // setActivePost,
    deletePost,
    addFetchData,
  };
};

export default useFetchData;
