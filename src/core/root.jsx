import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import NavMenu from '../navMenu/navMenu';
import Home from '../home/home';
import FoodWrapper from '../foodWrapper/foodWrapper';
import DietWrapper from '../dietWrapper/dietWrapper';
import AddFoodWrapper from '../addFoodWrapper/addFoodWrapper';
import EditFoodWrapper from '../editFoodWrapper/editFoodWrapper';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavMenu />
        <Route exact path="/" component={Home} />
        <Route path="/food" component={FoodWrapper} />
        <Route path="/diet" component={DietWrapper} />
        <Route path="/addFood" component={AddFoodWrapper} />
        <Route path="/editFood/:id" component={EditFoodWrapper} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
