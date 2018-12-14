import React from 'react';
import { Route } from 'react-router-dom';

const ButtonAddFood = () => (
  <Route
    render={({ history }) => (
      <button
        className="button button_add-food"
        type="button"
        onClick={() => {
          history.push('/food/add');
        }}
      >
        Добавить новый продукт
      </button>
    )}
  />
);

export default ButtonAddFood;
