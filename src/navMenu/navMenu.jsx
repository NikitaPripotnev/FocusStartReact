import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends PureComponent {
  state = {
  };

  render() {
    return (
      <div className="nav-menu">
        <NavLink to="/diets" className="nav-menu__button" activeClassName="nav-menu__button_active">
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
