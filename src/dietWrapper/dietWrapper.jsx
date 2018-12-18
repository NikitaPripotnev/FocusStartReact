import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavMenu from '../navMenu/navMenu';
import DietTable from './dietTable/dietTable';
import ButtonAddScreen from '../buttonAddScreen/buttonAddScreen';

class DietWrapper extends PureComponent {
  onClick = () => {
    console.log('check');
  };

  render() {
    return (
      <div className="wrapper">
        <NavMenu />
        <DietTable />
        <ButtonAddScreen
          path="/addDiet"
          className="button button_width100 food-wrapper__button"
          title="Добавить новую диету"
        />
      </div>
    );
  }
}

export default DietWrapper;
