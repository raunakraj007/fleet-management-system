import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";

import { checkValidData } from "../utils/validate.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice.js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const cnfPassword = useRef(null);
  const name = useRef(null);

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const mess = checkValidData(
      email?.current?.value,
      password?.current?.value,
      isSignInForm ? undefined : cnfPassword?.current?.value
    );

    if (mess) {
      setErrorMessage(mess);
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "- " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const { uid, email, displayName } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode == "auth/invalid-credential") {
            setErrorMessage("invalid-credential");
          }
        });
    }
  };

  return (
    <>
      <div className="py-16 h-full">
        <div className="flex h-[95%] bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
            }}
          ></div>
          <div
            className={`w-full ${
              isSignInForm ? "mt-16" : ""
            } px-8 pt-2 lg:w-1/2`}
          >
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Brand
            </h2>
            {isSignInForm && (
              <>
                <p className="text-xl text-gray-600 text-center">
                  Welcome back!
                </p>
              </>
            )}

            {!isSignInForm && (
              <>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    ref={name}
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="text"
                  />
                </div>
              </>
            )}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                ref={email}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                {/* <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a> */}
              </div>
              <input
                ref={password}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>

            {!isSignInForm && (
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  ref={cnfPassword}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
              </div>
            )}
            <div className="mt-8">
              {errorMessage && (
                <label className="block text-red-600 text-sm font-bold mb-2">
                  {errorMessage}
                </label>
              )}

              <button
                onClick={handleButtonClick}
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div
              className="mt-4 flex items-center justify-between cursor-pointer"
              onClick={toogleSignInForm}
            >
              <span className="border-b w-1/5 md:w-1/4"></span>
              <p className="text-xs text-gray-500 uppercase">
                {isSignInForm ? "or Sign Up" : "already Account"}
              </p>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
