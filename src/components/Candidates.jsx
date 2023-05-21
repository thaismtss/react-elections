import React from 'react';

export default function Candidates({ children }) {
  return (
    <div className="flex flex-wrap gap-8 w-full place-content-center py-8 md:h-[45em] m-auto">
      {children}
    </div>
  );
}
