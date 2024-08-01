import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = (props) => {
  //A boolean state to show some elements on UI based on Login:
  // const [loggedUser, setLoggedUser] = useState(false);
  const [loggedUser, setLoggedUser] = useState(() => {
    // Retrieve initial state from local storage if it exists
    const savedState = localStorage.getItem("myState");
    return savedState ? JSON.parse(savedState) : "";
  });
  console.log("type of loggedUser:", loggedUser);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : "";
  });

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem("myState", JSON.stringify(loggedUser));
    localStorage.setItem("user", JSON.stringify(user));
  }, [loggedUser, user]);

  // Here you save the current logged-in user name and title:
  // const [user, setUser] = useState({ name: "", title: "" });

  //I saved posts from API in here too, not to create another Context
  // const [posts, setPosts] = useState([]);

  return (
    // We use Context for the user because we need user data all across our App.
    <UserContext.Provider value={{ loggedUser, setLoggedUser, user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
