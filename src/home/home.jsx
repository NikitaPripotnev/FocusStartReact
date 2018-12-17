import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    return (
      <div className="wrapper home">
        <p>Добро пожаловать</p>
        <button className="button home__button" type="button" onClick="">
          Выбрать диету
        </button>
      </div>
    );
  }
}

export default Home;
