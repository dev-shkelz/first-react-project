import React, { useContext } from "react";
// import SignupForm from "./SignUp";
import { UserContext } from "../../context/UserContextProvider";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import L from "../../utils/L";

const Profile = () => {
  const { setLoggedUser, user } = useContext(UserContext);
  const isOnline = useOnlineStatus();
  return (
    <div className="profile">
      <ul>
        <li>{user.name}</li>
        <li>
          <L w={user.title} />
          {isOnline ? (
            <span className="green-circle circle"></span>
          ) : (
            <span className="red-circle circle"></span>
          )}
        </li>
        <li className="profile-offline">
          {!isOnline && <L w="(disconnected)" />}
        </li>
        <li>
          <button onClick={() => setLoggedUser(false)}>
            <L w="Log Out" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
