import React from 'react';
import { Link } from 'react-router-dom';

const ButtonAddScreen = (props) => {
  const { path, className, title } = props;
  return <Link to={path} className={className}>{title}</Link>;
};
export default ButtonAddScreen;
