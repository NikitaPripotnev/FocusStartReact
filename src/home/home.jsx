import React, { PureComponent } from 'react';
import NavMenu from '../navMenu/navMenu';
import ChooseDietForm from './chooseDietForm';

class Home extends PureComponent {
  state = {};

  render() {
    return (
      <div className="wrapper home">
        <NavMenu />
        <p>Добро пожаловать!</p>
        <p>Чтобы подобрать себе диету, введи свои данные в форму ниже</p>
        <ChooseDietForm />
      </div>
    );
  }
}

export default Home;
