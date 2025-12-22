import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Icon */}
      <img
        src={assets.user_icon}
        alt="profile_icon"
        className="w-8 md:w-9 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-[#FFEBC3] shadow-xl rounded-xl p-2 z-50">
          <Link to="/profile" className="block px-3 py-2 hover:bg-orange-100 rounded">
            My Profile
          </Link>

          <Link to="/orders" className="block px-3 py-2 hover:bg-orange-100 rounded">
            My Orders
          </Link>
          
          <button className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-600 rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
