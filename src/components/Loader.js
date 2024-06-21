import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        <div className="w-8 h-8 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        <div className="w-8 h-8 border-4 border-red-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
