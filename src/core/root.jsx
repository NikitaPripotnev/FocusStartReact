import React from 'react';
import Header from '../header/header';
import FoodWrapper from '../foodWrapper/foodWrapper';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Tasks from '../tasks/tasks';
import About from '../about/about';

function Root() {
/*
  return(
    <BrowserRouter>
      <div>
        <Link className="link" to="/">tasks</Link>
        <Link className="link" to="/about">about</Link>
        <Route exact path="/" component={Tasks} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
*/  

  return (
    <div>
      <Header />
      <FoodWrapper />
    </div>
  );

}


export default Root;
