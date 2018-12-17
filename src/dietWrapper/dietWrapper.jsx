import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavMenu from '../navMenu/navMenu';
import DietTable from './dietTable/dietTable';

class DietWrapper extends PureComponent {
  onClick = () => {
    console.log('check');
  };

  render() {
    return (
      <div className="wrapper">
        <NavMenu />
        <DietTable />
      </div>
    );
  }
}

export default DietWrapper;
