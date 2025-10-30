import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles, LogIn } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <Sparkles size={26} className="text-green-400" />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            EnhancerAI
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/main", label: "Enhance" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-gray-300 font-medium transition duration-300 hover:text-green-400 ${
                  isActive ? "text-green-400" : ""
                }`
              }
            >
              {link.label}
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {!user ? (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 px-5 py-2 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-200"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          ) : (
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                  userButtonOuterIdentifier: "text-white",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-green-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 flex flex-col items-center py-4 space-y-4 transition-all duration-300">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block text-gray-300 text-lg font-medium hover:text-green-400 transition ${
                isActive ? "text-green-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/main"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block text-gray-300 text-lg font-medium hover:text-green-400 transition ${
                isActive ? "text-green-400" : ""
              }`
            }
          >
            Enhance
          </NavLink>

          {!user && (
            <button
              onClick={() => {
                openSignIn();
                setIsOpen(false);
              }}
              className="mt-2 bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-200"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
