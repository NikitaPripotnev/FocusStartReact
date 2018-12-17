import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonNavMenu from './buttonNavMenu';

class NavMenu extends PureComponent {
  state = {
    classNameDietButton: '',
    classNameFoodButton: ''
  };
  /*
  changeClassForButtons = (event) => {
    const { name } = event.currentTarget.dataset;
    this.setState({
      classNameDietButton: name === 'diet' ? 'nav-menu__button_active' : '',
      classNameFoodButton: name === 'diet' ? '' : 'nav-menu__button_active'
    });
  };

  changeClasses = (type) => {
    if (type === 'food' || type === 'Food') {
      this.setState({ classNameFoodButton: 'nav-menu__button_active', classNameDietButton: '' });
    } else {
      this.setState({ classNameDietButton: 'nav-menu__button_active', classNameFoodButton: '' });
    }
  };
  */

  render() {
    return (
      <div className="nav-menu">
        <NavLink to="/diet" className="nav-menu__button" activeClassName="nav-menu__button_active">
          Диеты
        </NavLink>
        <NavLink to="/food" className="nav-menu__button" activeClassName="nav-menu__button_active">
          Продукты
        </NavLink>
      </div>
    );
  }
}
export default NavMenu;
