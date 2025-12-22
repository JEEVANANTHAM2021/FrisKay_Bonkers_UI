import React from "react";
import { assets } from "../assets/assets";


const Profile = () => {
  return (
    <section className="min-h-screen bg-[#FFEBC3] px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        {/* Header */}
        <h1 className="text-5xl font-['FatFrank'] text-[#FFEBC3] mb-6">
          My Profile 
        </h1>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Profile Card */}
          <div className="bg-[#FFEBC3] rounded-2xl p-6 shadow">
            <div className="flex flex-col items-center">
              <img src={assets.carousel_image1} className="rounded-full border-4 border-orange-400"/>
              <h2 className="text-2xl font-['Dinosaur'] mt-3 text-gray-800">Bonkers User</h2>
              <p className="text-gray-500 font-['rooneySansRegular']">user@bonkers.com</p>
              <button className="mt-6 w-full bg-black hover:bg-gray-900 text-white py-2 rounded-xl">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right - Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FFEBC3] p-5 rounded-xl shadow text-center">
                
                <p className="font-['Dinosaur'] text-xl">2</p>
                <span className="text-gray-600 text-sm font-['rooneySansRegular']">Pets Registered</span>
              </div>

              <div className="bg-[#FFEBC3] p-5 rounded-xl shadow text-center">
                <p className="font-['Dinosaur'] text-xl">5</p>
                <span className="text-gray-600 text-sm font-['rooneySansRegular']">Orders</span>
              </div>

              <div className="bg-[#FFEBC3] p-5 rounded-xl shadow text-center">
                <p className="font-['Dinosaur'] text-xl">Gold</p>
                <span className="text-gray-600 text-sm font-['rooneySansRegular']">Membership</span>
              </div>
            </div>

            {/* Extra Section Example */}
            <div className="bg-[#FFEBC3] p-6 rounded-xl shadow">
              <h3 className="text-xl font-['Dinosaur'] mb-2">About You</h3>
              <p className="text-gray-600 font-['rooneySansRegular']">
                This is your Bonkers pet profile. Soon you can manage pets,
                track orders, update preferences, and lots more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
