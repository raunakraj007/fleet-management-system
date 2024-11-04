import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";

const Header = () => {
    console.log("header")
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user sign out");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div className="w-full h-11 bg-black text-white">
      <ul className="flex flex-wrap">
        <Link to={"/home/blue"}>
          <li className="mx-2">blue</li>
        </Link>
        <Link to={"/home/red"}>
          <li>red</li>
        </Link>
      </ul>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Header;
