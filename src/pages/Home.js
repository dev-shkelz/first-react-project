import React from "react";
import Posts from "../components/home-comp/posts/Posts";
import AddPost from "../components/home-comp/posts/AddPost";
import Hero from "../components/home-comp/hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
