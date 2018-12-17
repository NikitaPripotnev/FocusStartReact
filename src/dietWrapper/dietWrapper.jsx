import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DietTable from './dietTable/dietTable';

class DietWrapper extends PureComponent {
  onClick = () => {
    console.log('check');
  };

  render() {
    return (
      <div className="wrapper">
        <DietTable />
      </div>
    );
  }
}

export default DietWrapper;
