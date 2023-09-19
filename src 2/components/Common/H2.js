import React from 'react';

const H2 = ({ children }) => {
  return (
    <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl pb-8 typewriter-text pt-4 text-center">
      <span className="block text-indigo-600 overflow-ellipsis">
        {children}
      </span>
    </h2>
  );
};

export default H2;