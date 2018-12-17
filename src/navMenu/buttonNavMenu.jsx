import React from 'react';
import { Route } from 'react-router-dom';

const ButtonNavMenu = (props) => {
  const { className, path, title, onClick, dataName } = props;

  return (
    <Route
      render={({ history }) => (
        <button
          data-name={dataName}
          className={className}
          type="button"
          onClick={(event) => {
            onClick(event);
            history.push(path);
          }}
        >
          {title}
        </button>
      )}
    />
  );
};

export default ButtonNavMenu;
