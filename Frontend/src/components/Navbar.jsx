import React, { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Default to light if theme not found
  );

  const [sticky, setSticky] = useState(false);

  // Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Save theme to localStorage and apply it
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Name for sign up
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password for sign up

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle Sign Up logic here
      console.log("Sign Up - Name:", name, "Email:", email, "Password:", password);
    } else {
      // Handle Login logic here
      console.log("Login - Email:", email, "Password:", password);
    }
    closeModal();
  };

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const navItems = (
    <>
      <li className="mx-2">
        <a href="#home">Home</a>
      </li>
      <li className="mx-2">
        <a href="#course">Course</a>
      </li>
      <li className="mx-2">
        <a href="#contact">Contact</a>
      </li>
      <li className="mx-2">
        <a href="#about">About</a>
      </li>
      <li className="mx-2">
        <button onClick={openModal} className="btn">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </li>
    </>
  );

  return (
    <nav
      className={`navbar bg-white px-4 lg:px-8 ${sticky ? "sticky top-0 shadow-md z-50" : ""}`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2"
          >
            {navItems}
          </ul>
        </div>
        <a href="#home" className="text-2xl font-bold">
          BookStore
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">{navItems}</ul>
      </div>

      {/* Search Box */}
      <div className="navbar-end hidden lg:flex">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-64 mr-4"
        />
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={(e) =>
              setTheme(e.target.checked ? "light" : "dark")
            }
          />
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>

      {/* Modal for Login/Sign Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-box bg-white p-6 rounded-lg">
            <form onSubmit={handleSubmit}>
              {/* Close Button */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Modal Title */}
              <h3 className="font-bold text-lg mb-4">{isSignUp ? "Sign Up" : "Login"}</h3>

              {/* Conditional Form Based on SignUp/Login */}
              {isSignUp ? (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input input-bordered w-full mt-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : null}

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input input-bordered w-full mt-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {isSignUp && (
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="input input-bordered w-full mt-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">
                  {isSignUp ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>

            {/* Toggle between Sign Up and Login */}
            <div className="text-center mt-4">
              <p>
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <button onClick={toggleSignUp} className="text-blue-500">
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <button onClick={toggleSignUp} className="text-blue-500">
                      Sign Up
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
