import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFoodForm from './addFoodForm/addFoodForm';
import ButtonAddScreen from '../buttonAddScreen/buttonAddScreen';

class AddFoodWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <AddFoodForm />
        <ButtonAddScreen path="/food" className="button button_width100 add-food-wrapper__button_back" title="Вернуться к списку продукту" />
      </div>
    );
  }
}

export default AddFoodWrapper;
