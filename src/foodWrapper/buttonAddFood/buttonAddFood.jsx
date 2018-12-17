import React from 'react';
import { Route } from 'react-router-dom';

const ButtonAddFood = () => (
  <Route
    render={({ history }) => (
      <button
        className="button button_width100 food-wrapper__button"
        type="button"
        onClick={() => {
          history.push('/addFood');
        }}
      >
        Добавить новый продукт
      </button>
    )}
  />
);

export default ButtonAddFood;
