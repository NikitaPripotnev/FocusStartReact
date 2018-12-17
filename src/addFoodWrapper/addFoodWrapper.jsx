import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFoodForm from './addFoodForm/addFoodForm';

class AddFoodWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <AddFoodForm />
      </div>
    );
  }
}

export default AddFoodWrapper;
