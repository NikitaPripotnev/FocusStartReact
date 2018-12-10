import React from 'react';

const Button = (props) => {
  const { className, onClick } = props;

  return <button className={className} type="button" onClick={onClick} />;
};

export default Button;
