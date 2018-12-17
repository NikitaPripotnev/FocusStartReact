import React, { PureComponent } from 'react';
import ButtonNavMenu from './buttonNavMenu';

class NavMenu extends PureComponent {
  state = {
    classNameDietButton: '',
    classNameFoodButton: ''
  };

  componentWillMount() {
    this.setState({
      classNameDietButton: localStorage.getItem('classNameDietButton'),
      classNameFoodButton: localStorage.getItem('classNameFoodButton')
    });
  }

  changeClassForButtons = (event) => {
    const { name } = event.currentTarget.dataset;
    this.setState({
      classNameDietButton: name === 'diet' ? 'nav-menu__button_active' : '',
      classNameFoodButton: name === 'diet' ? '' : 'nav-menu__button_active'
    });
  };

  render() {
    const { classNameFoodButton, classNameDietButton } = this.state;
    localStorage.setItem('classNameDietButton', classNameDietButton);
    localStorage.setItem('classNameFoodButton', classNameFoodButton);
    return (
      <div className="nav-menu">
        <ButtonNavMenu
          dataName="diet"
          className={`nav-menu__button ${classNameDietButton}`}
          path="/diet"
          title="Диеты"
          onClick={this.changeClassForButtons}
        />
        <ButtonNavMenu
          dataName="food"
          className={`nav-menu__button ${classNameFoodButton}`}
          path="/food"
          title="Продукты"
          onClick={this.changeClassForButtons}
        />
      </div>
    );
  }
}
export default NavMenu;
