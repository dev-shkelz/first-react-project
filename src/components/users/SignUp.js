//Child of OpenSignUp.js

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import L from "../../utils/L";
import "./Users.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsModalOpen }) => {
  //OK button after signing up:
  const [afterButton, setAfterButton] = useState(false);
  //Saving users for local storage:
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //Send users array to local storage:
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //react-hook-form:

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission:

    const newUser = {
      name: data.name,
      surname: data.surname,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      password: data.password,
    };
    setUsers([...users, newUser]);
    reset();
    setAfterButton(true);
    console.log("New user: " + newUser.name);
  };

  if (afterButton) {
    return (
      <div className="after-signup">
        <p>
          <L w="You have successfully signed up" />
        </p>
        <p>
          <L w="Click OK to continue" />
        </p>
        <button
          onClick={() => {
            setIsModalOpen(false);
            // navigate("/");
          }}
        >
          OK
        </button>
      </div>
    );
  }
  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <L w="Name" />
            <input {...register("name", { required: true })} />
            {errors.name && (
              <span>
                <L w="Name is required" />
              </span>
            )}
          </label>
        </div>

        <div>
          <label>
            <L w="Surname" />
            <input {...register("surname", { required: true })} />
            {errors.surname && (
              <span>
                <L w="Surname is required" />
              </span>
            )}
          </label>
        </div>

        <div>
          <label>
            <L w="Date of Birth" />
            <input
              type="date"
              {...register("dateOfBirth", { required: true })}
            />
            {errors.dateOfBirth && (
              <span>
                <L w="Date of Birth is required" />
              </span>
            )}
          </label>
        </div>

        <div>
          <label>
            <L w="Email" />
            <input type="email" {...register("email", { required: true })} />
            {errors.email && (
              <span>
                <L w="Email is required" />
              </span>
            )}
          </label>
        </div>

        <div>
          <label>
            <L w="Password" />
            <input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span>
                <L w="Password is required" />
              </span>
            )}
          </label>
        </div>

        <button type="submit">
          <L w="Sign Up" />
        </button>
      </form>
    </div>
  );
};

export default Signup;
