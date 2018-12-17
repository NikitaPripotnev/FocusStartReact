import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EditFood from './editFood/editFood';

class EditFoodWrapper extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <EditFood />
      </div>
    );
  }
}

export default EditFoodWrapper;
