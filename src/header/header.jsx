import React from 'react';
import { Route } from 'react-router-dom';

const Header = () => (
  <Route
    render={({ history }) => (
      <header
        className="header"
        onClick={() => {
          history.push('/');
        }}
      />
    )}
  />
);

export default Header;
