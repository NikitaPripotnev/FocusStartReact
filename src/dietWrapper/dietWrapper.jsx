import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavMenu from '../navMenu/navMenu';
import DietTable from './dietTable/dietTable';
import ButtonAddScreen from '../buttonAddScreen/buttonAddScreen';

class DietWrapper extends PureComponent {
  onClick = () => {};

  render() {
    const { BMR } = this.props.match.params;
    return (
      <div>
        <NavMenu />
        <div className="wrapper">
          <DietTable BMR={BMR} />
        </div>
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
