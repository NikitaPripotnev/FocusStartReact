import React, { PureComponent } from 'react';
import NavMenu from '../navMenu/navMenu';

class Home extends PureComponent {
  render() {
    return (
      <div className="wrapper home">
        <NavMenu />
        <p>Добро пожаловать</p>
        <button className="button home__button" type="button" onClick="">
          Выбрать диету
        </button>
      </div>
    );
  }
}

export default Home;
