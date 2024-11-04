import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  console.log("header");
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
    // <div className="w-full h-11 bg-black text-white">
    //   <ul className="flex flex-wrap">
    //     <Link to={"/home/blue"}>
    //       <li className="mx-2">
    //         reddblue</li>
    //     </Link>
    //     <Link to={"/home/red"}>
    //       <li>red</li>
    //     </Link>
    //   </ul>
    //   <button onClick={handleSignOut}>Sign Out</button>
    // </div>

    <nav className=" w-full fixed bg-[#C6E7FF] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LOGO_URL} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            logo
          </span>
        </div>

        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className=" flex">
            <li>
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  `block mx-3 py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-red-600" : "text-black"
                  } font-medium  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/fleetManagement"}
                className={({ isActive }) =>
                  `block  mx-3 py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-red-600" : "text-black"
                  } font-medium border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                }
              >
                Fleet Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/routeOptimization"}
                className={({ isActive }) =>
                  `block mx-3 py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-red-600" : "text-black"
                  } font-medium border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                }
              >
                Route Optimizer
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/account"}
                className={({ isActive }) =>
                  `block mx-3 py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-red-600" : "text-black"
                  } font-medium border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                }
              >
                Account
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
