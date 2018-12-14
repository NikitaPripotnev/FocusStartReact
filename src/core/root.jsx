import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import FoodWrapper from '../foodWrapper/foodWrapper';
import AddFoodForm from '../addFoodWrapper/addFoodForm/addFoodForm';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={FoodWrapper} />
        <Route path="/food/add" component={AddFoodForm} />
      </div>
    </BrowserRouter>
  );
}


export default Root;
