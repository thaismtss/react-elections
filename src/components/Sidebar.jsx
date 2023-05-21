import React from 'react';

export default function Sidebar({ children }) {
  return (
    <div className="bg-[#1E1656] md:h-screen w-[50%] md:w-[20%]">
      {children}
    </div>
  );
}
