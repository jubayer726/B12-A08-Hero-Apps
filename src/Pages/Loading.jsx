import React from "react";
import logo from '/logo.png'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src={logo}alt="Loading..."
        className="w-40 h-40 animate-spin-slow"
      />
    </div>
  );
};

export default Loading;

