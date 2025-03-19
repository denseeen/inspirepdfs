"use client";

import React, { useState, useEffect } from "react";

const Nav = () => {
  
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 
         bg-white shadow-md"
      
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo and Inspire Text */}
        <div className="flex items-center">
          <img
            src="/images/inspirelogo.png"
            alt="Inspire Connect"
            className="h-10 mr-2"
          />
          <span
            className="text-blue-600 text-xl font-bold"
          >
            INSPIRE GROUP
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
