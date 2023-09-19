import React from 'react';

const H1 = ({ children, id }) => {
  return (
    <h1 className="text-3xl md:text-5xl mb-4 font-extrabold" id={id}>{children}</h1>
  );
};

export default H1;