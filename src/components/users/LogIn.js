import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import L from "../../utils/L";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { setLoggedUser, user, setUser } = useContext(UserContext);
  //setUserLogged(true); etc
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //The button OK after we log in:
  const [afterLogin, setAfterLogin] = useState(false);
  //
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    console.log("current user", currentUser);
    if (currentUser) {
      setUser({ ...user, name: currentUser.name, title: "Profile" });
      // setLoggedUser(true);
      // I put this functionality to the OK button below
      setErrorMessage("");
      setAfterLogin(true);
      console.log("You are now logged in");
    } else if (!isOnline) {
      setErrorMessage("You can't log in, you're offline");
    } else if (email === "" || password === "") {
      setErrorMessage(<L w="Please fill the form to login" />);
    } else {
      setErrorMessage(<L w="No account found with your info" />);
      console.log("No account found with your info");
    }
  };
  if (afterLogin) {
    return (
      <div className="after-login">
        <p>
          {isOnline ? (
            <L w="You are now logged in" />
          ) : (
            <L w="Check your internet connection" />
          )}
        </p>
        {isOnline && (
          <button
            onClick={() => {
              setLoggedUser(true);
              // navigate("/");
            }}
          >
            <L w="Press OK to continue" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <label>
          <L w="Email" />:
          <input
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </label>
        <label>
          <L w="Password" />:
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </label>
        <button type="submit">
          <L w="Login" />
        </button>
        {errorMessage && <p className="login-error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LogIn;
