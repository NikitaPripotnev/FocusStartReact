import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

class AddFoodForm extends PureComponent {
  textRefName = createRef();

  textRefCal = createRef();

  textRefProt = createRef();

  textRefFat = createRef();

  textRefCarb = createRef();

  textRefInfo = createRef();

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.textRef.current.value, this.textRefCal.current.value, this.textRefName.current.value, 'textRefs in AddFood');
    // this.textRef.current.value = '';
  };

  render() {
    return (
      <form className="add-food" onSubmit={this.onSubmit}>
        <label htmlFor="food-item-name">
        Наименование:
          <input type="text" id="food-item-name" className="input" name="text" ref={this.textRefName} />
        </label>
        <label htmlFor="food-item-cal">
        Каллории:
          <input type="text" id="food-item-cal" className="input" name="text" ref={this.textRefCal} />
        </label>
        <label htmlFor="food-item-prot">
        Белок:
          <input type="text" id="food-item-prot" className="input" name="text" ref={this.textRefProt} />
        </label>
        <label htmlFor="food-item-fat">
        Жир:
          <input type="text" id="food-item-fat" className="input" name="text" ref={this.textRefFat} />
        </label>
        <label htmlFor="food-item-carb">
        Углеводы:
          <input type="text" id="food-item-carb" className="input" name="text" ref={this.textRefCarb} />
        </label>
        <label htmlFor="food-item-info">
        Описание:
          <input type="text" id="food-item-info" className="input" name="text" ref={this.textRefInfo} />
        </label>
        <button type="submit" className="add-food_button">
          Добавить
        </button>
      </form>
    );
  }
}

export default AddFoodForm;
