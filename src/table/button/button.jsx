import React from 'react';

const Button = (props) => {
  const { className, onClick, title } = props;

  return <button className={className} type="button" onClick={onClick}>{title}</button>;
};

export default Button;
