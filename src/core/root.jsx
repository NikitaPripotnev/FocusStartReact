import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import Home from '../home/home';
import FoodWrapper from '../foodWrapper/foodWrapper';
import DietWrapper from '../dietWrapper/dietWrapper';
import AddFoodWrapper from '../addFoodWrapper/addFoodWrapper';
import AddDietWrapper from '../addDietWrapper/addDietWrapper';
import EditFoodWrapper from '../editFoodWrapper/editFoodWrapper';
import EditDietWrapper from '../editDietWrapper/editDietWrapper';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/food" component={FoodWrapper} />
        <Route path="/diets/:BMR?" component={DietWrapper} />
        <Route path="/addFood" component={AddFoodWrapper} />
        <Route path="/addDiet" component={AddDietWrapper} />
        <Route path="/editFood/:id" component={EditFoodWrapper} />
        <Route path="/editDiet/:id" component={EditDietWrapper} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
