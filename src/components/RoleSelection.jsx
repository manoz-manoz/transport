import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const RoleSelection = () => {
  const [darkMode, setDarkMode] = useState(false);



  return (
    <header
      className="flex justify-between items-center p-4 px-8 transition-colors duration-300
                 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Left Section: Logo and Title */}
      <div className="flex items-center gap-4">
       
        <div className="text-xl font-semibold"><h2 className="text-red-500 text-2xl">Live Tracking</h2></div>
      </div>

      {/* Right Section: Dark/Light Mode Toggle Button */}
      <div>
<button className="text-white hidden md:block  font-medium p-3  rounded-[15px] bg-red-400 border-0">Raise a Complaint</button>


      </div>
    </header>
  );
};

export default RoleSelection;
