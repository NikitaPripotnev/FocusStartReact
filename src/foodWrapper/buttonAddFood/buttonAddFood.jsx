import React from 'react';

const ButtonAddFood = (props) => {
  const { onClick } = props;

  return <button className="button button_add-food" type="button" onClick={onClick}>Добавить новый продукт</button>;
};

export default ButtonAddFood;
